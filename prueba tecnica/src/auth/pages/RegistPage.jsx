import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks/useForm'
import { useAuthStore } from '../../hooks/useAuthStore'
import Swal from 'sweetalert2'

const registerFormFields = {
  registerName: '',
  registerEmail: '',
  registerPassword: ''
}


export const RegistPage = () => {

  const {startRegister, errorMessage} = useAuthStore();
  const {registerName, registerEmail, registerPassword, onInputChange} = useForm(registerFormFields);

  const registerSubmit = (event) => {
    event.preventDefault();
    
    startRegister({email: registerEmail,name: registerName,password: registerPassword});
  }
  useEffect(() => {
  
  if(errorMessage !== undefined) {
    Swal.fire('Error en la autenticación', errorMessage, 'error')
  }

}, [errorMessage])

  return (
    <AuthLayout title='Crear cuenta'>
      <form onSubmit={registerSubmit}>
            <Grid container>

              <Grid item xs={12} sx={{mt: 2}}>
                <TextField 
                  label='nombre' 
                  type='text' 
                  placeholder='nombre' 
                  fullWidth
                  name='registerName'
                  value={registerName}
                  onChange={onInputChange}
                />
              </Grid>

              <Grid item xs={12} sx={{mt: 2}}>
                <TextField 
                  label='correo' 
                  type='email' 
                  placeholder='corre@google.com' 
                  fullWidth
                  name='registerEmail'
                  value={registerEmail}
                  onChange={onInputChange}
                />
              </Grid>

              <Grid item xs={12} sx={{mt: 2}}>
                <TextField 
                  label='contraseña' 
                  type='text' 
                  placeholder='contraseña' 
                  fullWidth
                  name='registerPassword'
                  value={registerPassword}
                  onChange={onInputChange}
                />
              </Grid>
              
              
              <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
                <Grid item xs={12} >
                  <Button variant='contained' fullWidth type='submit'>
                    Crear Cuenta
                  </Button>
                </Grid>
              </Grid>
                
              <Grid container direction='row' justifyContent='end'>
                <Link color='inherit' component={RouterLink} to='/auth/login'>
                  Ya tienes una cuenta?
                </Link>
              </Grid>

            </Grid>
          </form>
    </AuthLayout>
  )
}


