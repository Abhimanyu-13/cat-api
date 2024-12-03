import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const login = createAsyncThunk();

const authSlice = createSlice({
  name: "auth",
  reducers: {},
  
});

export default authSlice.reducer;
