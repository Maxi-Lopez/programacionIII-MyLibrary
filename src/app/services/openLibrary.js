export async function searchBooks(query = "harry potter") {
  try {
    const response = await fetch(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`
    );

    if (!response.ok) {
      throw new Error("Error al obtener libros");
    }

    const data = await response.json();

    return data.docs;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getBookDetails(id) {
  try {
    const response = await fetch(
      `https://openlibrary.org/${id}.json`
    );

    if (!response.ok) return null;

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}