export default function About() {
  return (
    <section className="max-w-4xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold mb-6">
        Acerca de MyLibrary
      </h1>

      <p className="text-lg mb-4">
        MyLibrary es una aplicación web desarrollada con Next.js que permite a
        los usuarios buscar libros, consultar información detallada y crear una
        biblioteca personal guardando sus títulos favoritos.
      </p>

      <p className="text-lg mb-4">
        La aplicación consume datos de la API pública Open Library para obtener
        información sobre libros, autores y portadas.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Tecnologías utilizadas
      </h2>

      <ul className="list-disc list-inside space-y-2">
        <li>Next.js</li>
        <li>React</li>
        <li>Tailwind CSS</li>
        <li>Context API</li>
        <li>LocalStorage</li>
        <li>Open Library API</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        Funcionalidades principales
      </h2>

      <ul className="list-disc list-inside space-y-2">
        <li>Búsqueda de libros.</li>
        <li>Visualización de detalles de cada libro.</li>
        <li>Gestión de libros favoritos.</li>
        <li>Persistencia de datos mediante LocalStorage.</li>
        <li>Navegación dinámica con Next.js.</li>
      </ul>
    </section>
  );
}