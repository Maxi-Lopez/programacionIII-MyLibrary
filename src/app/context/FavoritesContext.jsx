"use client";

import { createContext, useContext, useEffect, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const storedFavorites = localStorage.getItem("favorites");

    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    } else {
      setFavorites([]);
      localStorage.setItem("favorites", JSON.stringify([]));
    }
  }, []);

  const addFavorite = (book) => {
    setFavorites((prev) => {
      const exists = prev.some((fav) => fav.key === book.key);
      if (exists) return prev;

      const updated = [...prev, book];
      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    });
  };

  const removeFavorite = (key) => {
    setFavorites((prev) => {
      const updated = prev.filter((book) => book.key !== key);
      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    });
  };

  const isFavorite = (key) => {
    return favorites.some((book) => book.key === key);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        addFavorite,
        removeFavorite,
        isFavorite,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
}