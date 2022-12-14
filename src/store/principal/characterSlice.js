import { createSlice } from "@reduxjs/toolkit";

export const characterSlice = createSlice({
  name: "character",
  initialState: {
    page: 0,
    characters: [],
    isLoading: false,
    prevPage: 1,
    favorites: [],
    active: null,
    selected: [],
    isSaving: false,
  },
  reducers: {
    startLoadingCharacters: (state) => {
      state.isLoading = true;
    },
    setCharacters: (state, action) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.prevPage = action.payload.prevPage;
      state.characters = action.payload.characters;
    },
    addFavorite: (state, action) => {
      state.favorites.push(action.payload);
      state.isSaving = false;
    },
    setActiveFavorite: (state, action) => {
      state.active = action.payload;
    },
    setActiveCharacter: (state, action) => {
      state.active = action.payload;
    },
    setFavorites: (state, action) => {
      state.favorites = action.payload;
    },
    clearCharactersLogout: (state) => {
      state.isSaving = false;
      state.characters = [];
      state.favorites = [];
      state.active = null;
    },
    deleteCharacterById: (state, action) => {
      state.active = null;
      state.favorites = state.favorites.filter(
        (favorite) => favorite.id !== action.payload
      );
    },

    findCharacterById: (state, action) => {
      state.active = null;
      state.selected = state.characters.find(
        (character) => character.id === action.payload
      );
    },
    isInFavoriteByCreated: (state, action) => {
      state.active = null;
      state.favorites = state.favorites.some(
        (favorite) => favorite.created === action.payload
      );
    },
  },
});

export const {
  startLoadingCharacters,
  setCharacters,
  addFavorite,
  setActiveFavorite,
  setActiveCharacter,
  setFavorites,
  clearCharactersLogout,
  deleteCharacterById,
  findCharacterById,
  isInFavoriteByCreated,
} = characterSlice.actions;
