"use client";

import { useFavorites } from "@/app/context/FavoritesContext";

export default function FavoriteButton({ book }) {
  const {
    addFavorite,
    removeFavorite,
    isFavorite,
  } = useFavorites();

  const favorite = isFavorite(book.key);

  const handleClick = () => {
    if (favorite) {
      removeFavorite(book.key);
    } else {
      addFavorite(book);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`mt-4 px-4 py-2 rounded text-white ${
        favorite
          ? "bg-red-500 hover:bg-red-600"
          : "bg-blue-500 hover:bg-blue-600"
      }`}
    >
      {favorite
        ? "❤️ Quitar de favoritos"
        : "⭐ Agregar a favoritos"}
    </button>
  );
}