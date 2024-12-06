import { configureStore } from "@reduxjs/toolkit";
import userReducer from './UserSlice';
import selectedCatBreedReducer from './GetSelectedBreedDetailSlice'
import catBreedsReducer from './GetCatBreedsSlice';

const store = configureStore({
    reducer: {
        user: userReducer,
        catBreeds: catBreedsReducer,
        selectedCatBreed: selectedCatBreedReducer,
    },
});

export default store;
