
import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../pages/LoginPage'
import { RegistPage } from '../pages/RegistPage'


export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path='/login'  element={<LoginPage />} />
        <Route path='/register' element={<RegistPage />} />

        <Route path='/*' element={<Navigate to='/auth/login' />} />
    </Routes>
  )
}
