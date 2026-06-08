import Link from "next/link";

export default function BookCard({ book }) {
  const idBusqueda = book.key.split("/").pop();
  const coverId = book.cover_i;

  return (
    <div className="border p-3 rounded-lg shadow hover:shadow-lg transition max-w-sm flex flex-col h-full">

      {/* Imagen */}
      {coverId ? (
        <img
          src={`https://covers.openlibrary.org/b/id/${coverId}-M.jpg`}
          alt={book.title}
          className="w-full h-40 object-cover rounded mb-3"
        />
      ) : (
        <div className="w-full h-40 flex items-center justify-center bg-gray-100 rounded mb-3">
          Sin portada
        </div>
      )}

      <div className="flex-1">
        <h2 className="text-xl font-semibold mb-2">
          {book.title}
        </h2>

        <p className="text-gray-600">
          Autor: {book.author_name?.[0] || "Desconocido"}
        </p>

        <p className="text-gray-600 mb-4">
          Año: {book.first_publish_year || "N/D"}
        </p>
      </div>

      <div className="mt-auto pt-2 border-t">
        <Link
          href={`/libros/${idBusqueda}`}
          className="text-blue-600 hover:underline"
        >
          Ver detalles
        </Link>
      </div>

    </div>
  );
}