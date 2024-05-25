import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"

const initialState = {
    todo: {},
}

export const getTodoById = createAsyncThunk("todo",
    async ({ id, token }) => {
        const response = await axios.get("http://localhost:8080/gettodobyid?id=" + id, {
            headers: {
                Authorization: token
            }
        })
        return response.data
    }
)

export const updateTodoById = createAsyncThunk("todo",

    async ({ todo, token }) => {
        axios.put("http://localhost:8080/updatetodobyid?id=" + todo.id, todo, {
            headers: {
                Authorization: token
            }
        })
    }
)

export const todoDetailSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getTodoById.fulfilled, (state, action) => {
            state.todo = action.payload
        })
    },
    /* extraReducers: (builder) => {
         builder.addCase(updateTodoById.fulfilled, (state, action) => {
             state.todo = action.payload
         })
     }*/

})

// Action creators are generated for each case reducer function
export const { } = todoDetailSlice.actions

export default todoDetailSlice.reducer