import { createSlice } from "@reduxjs/toolkit";

export const characterSlice = createSlice ({
    name:"character",
    initialState:{
        page: 0,
        characters: [],
        isLoading: false,
        prevPage:1,
        favorites: [],
        active:null,
        selected: [] 
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
            state.favorites.push(action.payload);    
        },
        setActiveFavorite: (state, action) => {
            state.active = action.payload;
        },
        setFavorites:(state, action) => {
            state.favorites = action.payload;
        }, 
        clearCharactersLogout: (state ) => {
            state.characters = [];
            state.favorites = [];
            state.active = null;
        },
        deleteNoteById:(state, action) => {
            state.active = null;
            state.favorites = state.favorites.filter(favorite => favorite.id !== action.payload)
        },
        findCharacterById:(state, action) => {
            state.active = null;
            state.selected = state.characters.find( character => character.id === action.payload)
        },
        isInFavoriteByName:(state,action) => {
            state.favorites = action.payload;
            state.favorites = state.favorites.some(favorite => favorite.name === action.payload)
        }
    }
})

export const { startLoadingCharacters, setCharacters, addFavorite, setActiveFavorite, setFavorites, savingNewFavorite, clearCharactersLogout, deleteNoteById, findCharacterById, isInFavoriteByName } = characterSlice.actions