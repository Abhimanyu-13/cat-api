import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
    'user/loginUser',
    async (userCredentials) => {
        const res = await axios.post("https://dummyjson.com/auth/login", userCredentials);
        const data = await res.data;  
        if (data.accessToken) {
            localStorage.setItem("accessToken", data.accessToken);
            localStorage.setItem('username',data.username)
        }
        return data; 
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        user: null,
        error: null,  
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.user = null;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;  // Fixed typo: 'payloaad' -> 'payload'
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                console.log(action.error.message);
                if (action.error.message === 'Request failed with status code 401') {
                    state.error = 'Action Denied! Invalid Credentials';
                } else {
                    state.error = action.error.message;
                }
            });
    }
});

export default userSlice.reducer;
