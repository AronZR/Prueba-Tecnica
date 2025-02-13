import { useDispatch, useSelector } from "react-redux"
import { taskApi } from "../api";
import { clearErrorMessage, onChecking, onLogin, onLogout } from "../store/auth/authSlice";


export const useAuthStore = () =>{

    const {status, user, errorMessage} = useSelector(state => state.auth);
    const dispatch = useDispatch();

    const startLogin = async({email, password}) => {
        dispatch(onChecking()); 

        try {

            const {data} =  await taskApi.post('/auth', {email, password});
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(onLogin({name: data.name, uid: data.uid}));
            
        } catch (error) {
            dispatch(onLogout('credenciales incorrectas'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    }

    const startRegister = async({email, name, password}) => {
        dispatch(onChecking()); 

        try {

            const {data} =  await taskApi.post('/auth/new', {email, name, password});
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(onLogin({name: data.name, uid: data.uid}));
            
        } catch (error) {
            dispatch(onLogout(error.response.data?.msg || '---'));
            setTimeout(() => {
                dispatch(clearErrorMessage());
            }, 10);
        }
    }

    const checkAuthToken = async() => {
        const token = localStorage.getItem('token');
        if (!token) return dispatch(onLogout());

        try {
            const {data} = await taskApi.get('auth/renew');
            
            localStorage.setItem('token', data.token);
            localStorage.setItem('token-init-date', new Date().getTime());

            dispatch(onLogin({name: data.name, uid: data.uid})); 
        } catch (error) {
            localStorage.clear();
            dispatch(onLogout());
        }
    }

    const startLogout = () => {
        localStorage.clear();
        dispatch(onLogout());
    }

    return {
        // propiedades
        status,
        user, 
        errorMessage,
        // metodos
        startLogin,
        startRegister,
        startLogout,
        checkAuthToken,
    }
}