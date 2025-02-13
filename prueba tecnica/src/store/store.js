import { configureStore } from '@reduxjs/toolkit';
import { taskSlice } from './tasks/taskSlice';
import { authSlice } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    task: taskSlice.reducer, 
    auth: authSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false
  })
});