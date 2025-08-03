
import { configureStore } from "@reduxjs/toolkit";

import movieWatchedReducer from '../features/movies-watched/slice';
import authReducer from '../features/auth/slice'

export const store = configureStore({
    reducer: {
        movieWatched: movieWatchedReducer,
        auth: authReducer,
    }
})