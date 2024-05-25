import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    user: null,
    isAuthenticated: false,
    token: null
}

export const executeJwtAuthenticationService = createAsyncThunk("token",
    async ({ userName, password }) => {
        const response = await axios.post("http://localhost:8080/authenticate",

            {
                "username": userName,
                "password": password
            }

        )
        const token = "Bearer " + response.data.token
        return token
    }
)

export const getByUserNameAndPassword = createAsyncThunk("user",
    async ({ userName, password, token }) => {
        const response = await axios.get(`http://localhost:8080/getbyusernameandpassword?userName=${userName}&password=${password}`,
            {
                headers: {
                    Authorization: token
                }
            }
        )
        return response.data


    }
)





// export const executeBasicAuthenticationService = createAsyncThunk("user",
//     async ({ token, userName, password }) => {


//         const response = await axios.get(`http://localhost:8080/getbyusernameandpassword?userName=${userName}&password=${password}`,
//             {
//                 headers: {
//                     Authorization: token
//                 }
//             }
//         )
//         return response.data
//     }
// )

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state) => {
            state.isAuthenticated = true
        },
        logoutSuccess: (state) => {
            state.user = null
            state.isAuthenticated = false
            state.token = null

        }

    },
    extraReducers:
        (builder) => {
            builder
                .addCase(executeJwtAuthenticationService.fulfilled, (state, action) => {
                    state.token = action.payload; // action.payload is myToken
                    state.isAuthenticated = true; // Assuming successful token retrieval implies authentication
                })
                .addCase(getByUserNameAndPassword.fulfilled, (state, action) => {
                    state.user = action.payload;
                });
        }

})

export const { loginSuccess, logoutSuccess, setToken } = authSlice.actions

export default authSlice.reducer