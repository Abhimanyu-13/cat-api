import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getSelectedBreed = createAsyncThunk(
  'getSelectedBreed',
  async (breedId) => {
    try {
      const response = await axios.get(
        `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`,
        {
          headers: {
            'x-api-key': "live_nDfI6JgqoltZKSsHmVr4LG41dyKBmzTGJnu8ocN94q5Mw0MKeopJrHGTadFhhZ3k"
          }
        }
      );    
      // console.log(response.data);
       
      return response.data;
    } catch (error) {
      console.error(error);
      throw error; 
    }
  }
);

const getSelectedBreedDetail = createSlice({
  name: 'getSelectedBreed',
  initialState: {
    loading: false,
    breed: [],
    error: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSelectedBreed.pending, (state) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getSelectedBreed.fulfilled, (state, action) => {
        state.loading = false;
        state.breed = action.payload; 
      })
      .addCase(getSelectedBreed.rejected, (state) => {
        state.loading = false;
        state.error = true;
      });
  }
});

export default getSelectedBreedDetail.reducer;
