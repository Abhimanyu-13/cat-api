import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
export const loginUser = createAsyncThunk(
    'user/loginUser',async (values) =>{
        try {
            const response = await fetch('https://dummyjson.com/auth/login',{
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username: values.username,
                    password: values.password,
                }),
            })
            const data = await response.json()
            if (data.accessToken) {
                localStorage.setItem("accessToken", data.accessToken);
                localStorage.setItem('username',values.username)
            }
        } catch (error) {
            console.error(error);
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        userLoggedIn: !!localStorage.getItem('accessToken'),
        user: null,
        error: null,
    },
    reducers    :{},
    extraReducers: (builder) => {
        builder
            .addCase(loginUser.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(loginUser.fulfilled, (state, action) => {
                state.loading = false;
                state.user = action.payload;  
                state.userLoggedIn = true;
                state.error = null;
            })
            .addCase(loginUser.rejected, (state, action) => {
                state.loading = false;
                state.user = null;
                state.userLoggedIn = false;
                if (action.error.message === 'Request failed with status code 401') {
                    state.error = 'Action Denied! Invalid Credentials';
                } else {
                    state.error = action.error.message;
                }
            });
    }
});

export default userSlice.reducer;
