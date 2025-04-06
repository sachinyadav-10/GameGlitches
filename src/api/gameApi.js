import axios from "axios";

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

export const fetchGameDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}?key=${API_KEY}`);
  return response.data;
};

export const fetchScreenshots = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}/screenshots?key=${API_KEY}`);
  return response.data.results;
};

export const fetchGenres = async () => {
  const response = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
  return response.data.results;
};

export const fetchTags = async () => {
  const response = await axios.get(`https://api.rawg.io/api/tags?key=${API_KEY}`);
  return response.data.results;
};
