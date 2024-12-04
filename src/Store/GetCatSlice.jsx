import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getBreeds = createAsyncThunk(
    'getBreeds', async () => {
        try {
            const response = await axios.get('https://api.thecatapi.com/v1/breeds?limit=20&has_image=true',{
                headers:{
                    'x-api-key':"live_nDfI6JgqoltZKSsHmVr4LG41dyKBmzTGJnu8ocN94q5Mw0MKeopJrHGTadFhhZ3k"
                }
            })
            const data = await response.data;
            console.log(data);
            return data;
        }
        catch (error) {
            console.error(error);
        }
    }
)

const getCatsBreeds = createSlice({
    name: 'getBreeds',
    initialState: {
        loading: false,
        breeds: [],
        error : false,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBreeds.pending,(state) => {
            state.loading = true;
            state.error = false;
        })
        .addCase(getBreeds.fulfilled,(state, action) => {
            state.loading = false;
            state.breeds = action.payload;
        })
        .addCase(getBreeds.rejected,(state) => {
            state.loading = false;
            state.error = true
        })
    }

})

export default getCatsBreeds.reducer;