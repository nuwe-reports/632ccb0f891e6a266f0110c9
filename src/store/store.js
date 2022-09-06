import { configureStore } from '@reduxjs/toolkit';
import { authSlice } from './auth';
import { characterSlice } from './principal/characterSlice';

export const store = configureStore({
    reducer:{
        auth: authSlice.reducer,
        characters: characterSlice.reducer
    },
})