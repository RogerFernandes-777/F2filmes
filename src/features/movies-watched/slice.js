

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    itens: [{
        nome: ''
    }]
}

export const moviesWatchedSlice = createSlice({
    name: 'moviesWatched',
    initialState,
    reducers: {
        addMovie: (state, action)=>{
            state.itens.push(action.payload);
        },
       
    },
});

export const {addMovie} = moviesWatchedSlice.actions;
export default moviesWatchedSlice.reducer;