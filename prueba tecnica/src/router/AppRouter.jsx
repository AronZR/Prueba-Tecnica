import { Route, Routes } from 'react-router-dom';

import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { TasksRoutes } from '../Tasks/routes/TasksRoutes';

export const AppRouter = () => {

  const authStatus = 'authenticated'; //authenticated // not-authenticated

  return (
    <Routes>
      {/* login */}
      <Route path='/auth/*' element={<AuthRoutes />} />
      
      {/* Tasks */}
      <Route path='/*' element={<TasksRoutes />} />

    </Routes>
  )
}
