import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"


const initialState = {
    todos: []
}


export const getAllTodos = createAsyncThunk("todos",
    async (userName) => {
        const response = await axios.get(`http://localhost:8080/${userName}/todos`, {
            headers: {
                Authorization: "Basic ZW5lczoxMjM="
            }
        })
        return response.data
    }
)


export const deleteTodoById = createAsyncThunk("todos",
    async ({ id, token }) => {
        await axios.delete("http://localhost:8080/deletetodobyid?id=" + id, {
            headers: {
                Authorization: token
            }
        })
    }
)

export const addTodoByUserName = createAsyncThunk("todos",
    async ({ todo, token }) => {
        await axios.post(`http://localhost:8080/${todo.userName}/addtodobyusername`, todo, {
            headers: {
                Authorization: token
            }
        })
    }
)








export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(getAllTodos.fulfilled, (state, action) => {
                state.todos = action.payload
            })
    },
    extraReducers: (builder) => {
        builder.addCase(deleteTodoById.fulfilled, (state, action) => {
            state.todos = action.payload
        })
    },
    extraReducers: (builder) => {
        builder.addCase(addTodoByUserName.fulfilled, (state, action) => {
            state.todos = action.payload
        })
    }
})

export const { } = todoSlice.actions

export default todoSlice.reducer


