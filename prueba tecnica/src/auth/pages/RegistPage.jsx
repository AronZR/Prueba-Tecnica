import { Link as RouterLink } from 'react-router-dom'
import { Button, Grid, Link, TextField, Typography } from '@mui/material'
import React from 'react'
import { AuthLayout } from '../layout/AuthLayout'

export const RegistPage = () => {
  return (
    <AuthLayout title='Crear cuenta'>
      <form action="">
            <Grid container>

              <Grid item xs={12} sx={{mt: 2}}>
                <TextField 
                  label='nombre' 
                  type='text' 
                  placeholder='nombre' 
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sx={{mt: 2}}>
                <TextField 
                  label='correo' 
                  type='email' 
                  placeholder='corre@google.com' 
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sx={{mt: 2}}>
                <TextField 
                  label='contraseña' 
                  type='email' 
                  placeholder='contraseña' 
                  fullWidth
                />
              </Grid>
              
              
              <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
                <Grid item xs={12} >
                  <Button variant='contained' fullWidth>
                    Login
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


