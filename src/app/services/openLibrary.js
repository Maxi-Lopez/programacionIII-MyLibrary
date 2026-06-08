import axios from 'axios';

export async function searchBooks(query) {
  if (!query) return [];
  
  try {
    const response = await axios.get(
      `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`
    );

    return response.data.docs;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function getBookDetails(id) {
  try {
    const response = await axios.get(
      `https://openlibrary.org/works/${id}.json`
    );

    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}