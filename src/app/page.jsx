import Link from "next/link";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center py-20 px-6 text-center">

      <h1 className="text-5xl font-bold mb-6">
        📚 MyLibrary
      </h1>

      <p className="max-w-2xl text-lg text-gray-600 mb-10">
        Descubre nuevos libros, explora autores y organiza tu propia biblioteca
        personal en un solo lugar.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mb-16">
        <Link
          href="/libros"
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Explorar Libros
        </Link>

        <Link
          href="/about"
          className="px-6 py-3 border rounded-lg hover:bg-gray-100 transition"
        >
          Acerca del Proyecto
        </Link>
      </div>

    </section>
  );
}