import { configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSlice';
import catBreedsReducer from './GetCatSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        catBreeds: catBreedsReducer,
    },
});

export default store;
