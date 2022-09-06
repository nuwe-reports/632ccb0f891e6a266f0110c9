import { createSlice } from "@reduxjs/toolkit";

export const characterSlice = createSlice ({
    name:"character",
    initialState:{
        page: 0,
        characters: [],
        isLoading: false,
        prevPage:1,
        favoritesCharacters: [],
        activeCharacter:null
        
    },
    reducers:{
        startLoadingCharacters: (state) => {
            state.isLoading = true
        },
        setCharacters: (state, action) => {
            state.isLoading = false;
            state.page = action.payload.page;
            state.prevPage = action.payload.prevPage;
            state.characters = action.payload.characters;
        },
        addFavorite: (state, action) => {
            state.favoritesCharacters.push(action.payload);
            state.isLoading = false;
        },
        setActiveCharacter: (state, action) => {
            state.activeCharacter = action.payload;
        },
        setFavorites:(state, action) => {
            state.favoritesCharacters = action.payload;
        }
    }
})

export const { startLoadingCharacters, setCharacters, addFavorite, setActiveCharacter } = characterSlice.actions