import { async } from "@firebase/util";
import { collection, deleteDoc, doc, getDoc, setDoc } from "firebase/firestore/lite";
import { charactersApi } from "../../api/charactersApi";
import { FirebaseDB } from "../../firebase/config";
import { loadFavorites } from "../../helpers/loadFavorites";
import {
  setCharacters,
  startLoadingCharacters,
  addFavorite,
  setFavorites,
  setActiveFavorite,
  deleteNoteById,
} from "./characterSlice";

export const getCharacters = (page = 1) => {
  return async (dispatch) => {
    dispatch(startLoadingCharacters());

    const { data } = await charactersApi.get(`/character/?page=${page}`);

    dispatch(
      setCharacters({
        characters: data.results,
        page: page + 1,
        prevPage: page - 1,
      })
    );
  };
};

export const addFavoriteCharacter = ({ image, species, name,created }) => {
  return async (dispatch, getState) => {
   
    const { uid } = getState().auth;

    const newFavorite = {
      name: name,
      image: image,
      species: species,
      created: created,
      
    };

    const newFavoritesDoc = doc(
      collection(FirebaseDB, `${uid}/principal/favorites`)
    );
    await setDoc(newFavoritesDoc, newFavorite);

    newFavorite.id = newFavoritesDoc.id;

    dispatch(addFavorite(newFavorite));
    dispatch(setActiveFavorite(newFavorite));
    
  };
};




export const startLoadingFavorites = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    if (!uid) throw new Error("UID inexistente");

    const favorites = await loadFavorites(uid);
    dispatch(setFavorites(favorites));
  };
};

export const startDeletingFavorite = (id) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;
    const { active: favorite } = getState().characters;
    const { id } = favorite;

    // console.log({uid, id})
    const favRef = doc(FirebaseDB, `${uid}/principal/favorites/${id}`);

    await deleteDoc(favRef);

    dispatch(deleteNoteById(id));
  };
};
