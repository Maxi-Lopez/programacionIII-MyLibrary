"use client";

import Link from "next/link";
import { useFavorites } from "../../context/FavoritesContext";

export default function Favoritos() {
  const { favorites } = useFavorites();

  return (
    <section className="max-w-6xl mx-auto">

      <h1 className="text-4xl font-bold mb-6">
        ❤️ Mis Favoritos
      </h1>

      {favorites.length === 0 ? (
        <div className="border rounded-lg p-8 text-center">
          <p>No tienes libros favoritos todavía.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {favorites.map((book) => (
            <div
              key={book.key}
              className="border p-4 rounded-lg shadow"
            >

              {book.coverId && (
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`}
                  alt={book.title}
                  className="w-full h-64 object-cover rounded mb-4"
                />
              )}

              <h2 className="text-xl font-semibold mb-3">
                {book.title}
              </h2>

              <Link
                href={`/libros/${book.key.split("/").pop()}`}
                className="text-blue-600 hover:underline"
              >
                Ver detalles
              </Link>

            </div>
          ))}

        </div>
      )}

    </section>
  );
}