import { Navigate, Route, Routes } from 'react-router-dom';

import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { TasksRoutes } from '../Tasks/routes/TasksRoutes';
import { useAuthStore } from '../hooks/useAuthStore';
import { useEffect } from 'react';


export const AppRouter = () => {

  const {status, checkAuthToken} = useAuthStore();
  // const authStatus = 'not-authenticated'; //authenticated // not-authenticated

  useEffect(() => {
    checkAuthToken();
  }, []);

  if (status === 'checking') {
    return (
      <h3>Loading...</h3>
    )
  }

  

  return (
    <Routes>

      {
        (status === 'not-authenticated') 
          /* login */
          ?(
            <>
              <Route path='/auth/*' element={<AuthRoutes />} />
              <Route path='/*' element={<Navigate to='/auth/login' />} />
            </>
          )
          /* Tasks */
          :(
            <>
              <Route path='/' element={<TasksRoutes />} /> 
              <Route path='/*' element={<Navigate to='/' />} />
            </>
          )
      }
      
    </Routes>
  )
}
