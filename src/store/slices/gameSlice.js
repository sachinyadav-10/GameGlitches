import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_KEY = import.meta.env.VITE_RAWG_API_KEY;
const BASE_URL = "https://api.rawg.io/api/games";

export const fetchGames = createAsyncThunk(
  'games/fetchGames',
  async (filters, thunkAPI) => {
    const { category, tags, releaseYear, popularity, searchQuery, currentPage } = filters;


    const params = new URLSearchParams();

    if (category) params.append('genres', category.toLowerCase());
    if (tags?.length) {
      const slugTags = tags.map(tag => tag.toLowerCase().replace(/\s/g, '-'));
      params.append('tags', slugTags.join(','));
    }

    if (releaseYear) {
      params.append('dates', `${releaseYear}-01-01,${releaseYear}-12-31`);
    }

    if (popularity) {
      const ordering = popularity === 'high' ? '-rating' :
                       popularity === 'low' ? 'rating' :
                       popularity === 'new' ? '-released' : '';
      if (ordering) params.append('ordering', ordering);
    }

    // Search
    if (searchQuery) params.append('search', searchQuery);

    // Page
    params.append('page', currentPage || 1);
    params.append('page_size', 9);

    const url = `https://api.rawg.io/api/games?${params.toString()}&key=${API_KEY}`;
    const res = await fetch(url);
    const data = await res.json();

    return data;
  }
);

const gameSlice = createSlice({
  name: "games",
  initialState: {
    games: [],
    count: 0,
    next: null,
    previous: null,
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGames.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchGames.fulfilled, (state, action) => {
        state.loading = false;
        state.games = action.payload.results;
        state.count = action.payload.count;
        state.next = action.payload.next;
        state.previous = action.payload.previous;
      })
      .addCase(fetchGames.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default gameSlice.reducer;