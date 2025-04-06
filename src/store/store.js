import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./slices/FavourateSlice"; 
import gameReducer from "./slices/gameSlice";
import filterReducer from "./slices/filterSlice";

const loadFavorites = () => {
    try {
        const serializedState = localStorage.getItem("favorites");
        return serializedState ? JSON.parse(serializedState) : [];
    } catch (error) {
        console.error("Error loading favorites:", error);
        return [];
    }
};

const saveFavorites = (favorites) => {
    try {
        const serializedState = JSON.stringify(favorites);
        localStorage.setItem("favorites", serializedState);
    } catch (error) {
        console.error("Error saving favorites:", error);
    }
};

export const store = configureStore({
    reducer: {
        favorites: favoritesReducer,
        games: gameReducer,
        filters: filterReducer,
    },
    preloadedState: {
        favorites: { favorites: loadFavorites() },
    },
});

store.subscribe(() => {
    try {
        const { favorites } = store.getState();
        saveFavorites(favorites.favorites);
    } catch (error) {
        console.error("Error subscribing to store:", error);
    }
});

export default store;
