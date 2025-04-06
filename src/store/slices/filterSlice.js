import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filters",
  initialState: {
    currentPage: 1,
    category: "",
    tags: [],
    releaseYear: "",
    popularity: "",
    searchQuery: "",
  },
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
      state.currentPage = 1;
    },
    setTags: (state, action) => {
      state.tags = action.payload;
      state.currentPage = 1;
    },
    setReleaseYear: (state, action) => {
      state.releaseYear = action.payload;
      state.currentPage = 1;
    },
    setPopularity: (state, action) => {
      state.popularity = action.payload;
      state.currentPage = 1;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
      state.currentPage = 1;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    resetFilters: (state) => {
      state.category = "";
      state.tags = [];
      state.releaseYear = "";
      state.popularity = "";
      state.searchQuery = "";
      state.currentPage = 1;
    },
  },
});

export const { setCategory, setTags, setReleaseYear, setPopularity, setSearchQuery, setCurrentPage, resetFilters } = filterSlice.actions;
export default filterSlice.reducer;
