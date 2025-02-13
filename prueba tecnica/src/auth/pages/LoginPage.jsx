import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField} from '@mui/material'
import { useEffect } from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { useAuthStore } from '../../hooks/useAuthStore'
import Swal from 'sweetalert2'

const loginFormFields = {
  loginEmail: '',
  loginPassword: ''
}

export const LoginPage = () => {

  const {startLogin, errorMessage} = useAuthStore()

  const {loginEmail, loginPassword, onInputChange} = useForm(loginFormFields);

  const loginSubmit = (event) => {
    event.preventDefault();
    startLogin({email: loginEmail, password: loginPassword});
  }

  useEffect(() => {
    
    if(errorMessage !== undefined) {
      Swal.fire('Error en la autenticación', errorMessage, 'error')
    }

  }, [errorMessage])
  



  return (
    <AuthLayout title='Login'>
      <form onSubmit={loginSubmit}>
            <Grid container>
              <Grid item xs={12} sx={{mt: 2}}>
                <TextField 
                  label='correo' 
                  type='email' 
                  placeholder='corre@google.com' 
                  fullWidth
                  name='loginEmail'
                  value={loginEmail}
                  onChange={onInputChange}
                />
              </Grid>
              <Grid item xs={12} sx={{mt: 2}}>
                <TextField 
                  label='contraseña' 
                  type='text' 
                  placeholder='contraseña' 
                  fullWidth
                  name='loginPassword'
                  value={loginPassword}
                  onChange={onInputChange}
                />
              </Grid>
              
              <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
                <Grid item xs={12} >
                  <Button variant='contained' fullWidth type='submit'>
                    Login
                  </Button>
                </Grid>
              </Grid>
                
              <Grid container direction='row' justifyContent='end'>
                <Link color='inherit' component={RouterLink} to='/auth/register'>
                  Crear Cuenta
                </Link>
              </Grid>

            </Grid>
          </form>
    </AuthLayout>
  )
}

