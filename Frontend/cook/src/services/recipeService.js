import axios from 'axios';

//const API_URL = process.env.VUE_APP_API_URL;// || 'http://localhost:5000/recipes';
const API_URL  = 'http://recipefullstack-9936c0c3b72a.herokuapp.com/api';
console.log("API", API_URL);
export const getRecipes = () => axios.get(API_URL);
export const getRecipe = (id) => axios.get(`${API_URL}/${id}`);
export const createRecipe = (recipe) => axios.post(API_URL, recipe);
export const updateRecipe = (id, recipe) => axios.put(`${API_URL}/${id}`, recipe);
export const deleteRecipe = (id) => axios.delete(`${API_URL}/${id}`);