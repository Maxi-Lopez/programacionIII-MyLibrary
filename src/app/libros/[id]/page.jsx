import { getBookDetails } from "@/app/services/openLibrary";
import FavoriteButton from "@/app/components/FavoriteButton";

export default async function LibroDetalle({ params }) {
  const { id } = await params;

  const book = await getBookDetails(id);

  console.log("BOOK:", book);

  if (!book) {
    return (
      <h1 className="text-2xl font-bold">
        Libro no encontrado
      </h1>
    );
  }

  const coverId = book.covers?.[0];

  return (
    <section className="max-w-4xl mx-auto">

      <h1 className="text-4xl font-bold mb-4">
        {book.title}
      </h1>

      <div className="grid md:grid-cols-2 gap-8 mt-6">

        {/* Portada */}
        <div>
          {coverId ? (
            <img
              src={`https://covers.openlibrary.org/b/id/${coverId}-L.jpg`}
              alt={book.title}
              className="rounded-lg shadow-md"
            />
          ) : (
            <div className="border rounded-lg p-10 text-center">
              Sin portada disponible
            </div>
          )}
        </div>

        {/* Descripción */}
        <div>
          <h2 className="text-2xl font-semibold mb-3">
            Descripción
          </h2>

          <p className="text-gray-700">
            {typeof book.description === "string"
              ? book.description
              : book.description?.value ||
                "No hay descripción disponible."}
          </p>
        </div>

      </div>
      <FavoriteButton
              book={{
                ...book,
                key: `/works/${id}`
              }}
            />
    </section>
  );
}