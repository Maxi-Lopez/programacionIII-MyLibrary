import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        <Link
          href="/"
          className="text-2xl font-bold hover:text-blue-200 transition"
        >
          📚 MyLibrary
        </Link>

        <ul className="flex gap-6 font-medium">
          <li>
            <Link
              href="/"
              className="hover:text-blue-200 transition"
            >
              Inicio
            </Link>
          </li>

          <li>
            <Link
              href="/libros"
              className="hover:text-blue-200 transition"
            >
              Libros
            </Link>
          </li>

          <li>
            <Link
              href="/libros/favoritos"
              className="hover:text-blue-200 transition"
            >
              Favoritos
            </Link>
          </li>

          <li>
            <Link
              href="/about"
              className="hover:text-blue-200 transition"
            >
              Acerca de
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}