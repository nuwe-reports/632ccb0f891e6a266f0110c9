import axios from 'axios'
export const charactersApi = axios.create({
    baseURL: 'https://rickandmortyapi.com/api'
});