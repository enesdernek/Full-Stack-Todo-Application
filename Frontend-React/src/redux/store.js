import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "./slices/todoSlice"
import authSlice from './slices/authSlice'
import todoDetailReducer from './slices/todoDetailSlice'

export const store = configureStore({
    reducer: {
        auth: authSlice,
        todos: todoReducer,
        todo: todoDetailReducer
    },
})