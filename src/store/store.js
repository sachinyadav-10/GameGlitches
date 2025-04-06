import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./slices/FavourateSlice"; 
import gameReducer from "./slices/gameSlice";
import filterReducer from "./slices/filterSlice";

// Load favorites from localStorage
const loadFavorites = () => {
    try {
        const serializedState = localStorage.getItem("favorites");
        return serializedState ? JSON.parse(serializedState) : [];
    } catch (error) {
        console.error("Error loading favorites:", error);
        return [];
    }
};

// Save favorites to localStorage
const saveFavorites = (favorites) => {
    try {
        const serializedState = JSON.stringify(favorites);
        localStorage.setItem("favorites", serializedState);
    } catch (error) {
        console.error("Error saving favorites:", error);
    }
};

// Initialize store with persisted favorites
const preloadedState = {
    favorites: loadFavorites(), // Ensure the structure matches the reducer's state
};

export const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
        games: gameReducer,
        filters: filterReducer,
    },
    preloadedState: {
        favorites: { favorites: loadFavorites() }, // Ensure it's wrapped in an object if needed
    },
});

// Listen for changes in favorites and save to localStorage
store.subscribe(() => {
    try {
        const { favorites } = store.getState();
        saveFavorites(favorites.favorites); // Ensure correct access to favorites array
    } catch (error) {
        console.error("Error subscribing to store:", error);
    }
});

export default store;
