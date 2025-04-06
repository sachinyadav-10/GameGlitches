import axios from "axios";

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
const BASE_URL = "https://api.rawg.io/api/games";

/**
 * Builds the query URL based on Redux filter state.
 * @param {Object} filters - Redux filters: category, tags, year, popularity, search, page
 */
export const fetchGames = async (filters) => {
  const { category, tags, year, popularity, search, page } = filters;

  let url = `${BASE_URL}?key=${API_KEY}&page=${page || 1}&page_size=20`;

  if (category) url += `&genres=${category}`;
  if (tags && tags.length > 0) url += `&tags=${tags.join(",")}`;
  if (year) url += `&dates=${year}-01-01,${year}-12-31`;
  if (popularity) url += `&ordering=${popularity}`;
  if (search) url += `&search=${encodeURIComponent(search)}`;

  console.log("🔍 Final RAWG API URL:", url);

  const response = await axios.get(url);
  return response.data.results;
};
export const fetchGenres = async () => {
    const response = await axios.get(
      `https://api.rawg.io/api/genres?key=${API_KEY}`
    );
    return response.data.results; // array of genres with {name, slug}
  };
  
  export const fetchTags = async () => {
    const response = await axios.get(
      `https://api.rawg.io/api/tags?key=${API_KEY}`
    );
    return response.data.results; // array of tags with {name, slug}
  };
/**
 * Fetches detailed info of a game by ID.
 * @param {string|number} id - RAWG game ID
 */
export const fetchGameDetails = async (id) => {
  const response = await axios.get(`${BASE_URL}/${id}?key=${API_KEY}`);
  return response.data;
};
