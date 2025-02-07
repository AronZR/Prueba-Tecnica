import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { TasksPage } from '../pages/TasksPage'

export const TasksRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<TasksPage />} />

        <Route path='/*' element={<Navigate to='/' />} />
    </Routes>
  )
}
