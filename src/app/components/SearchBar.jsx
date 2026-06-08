"use client";

import { useState } from "react";
import { searchBooks } from "@/app/services/openLibrary";

export default function SearchBar({ setResults }) {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!query.trim()) return;

    setLoading(true);

    const results = await searchBooks(query);
    console.log("API RESULTS:", results);

    setResults(results);

    setLoading(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <div style={{ marginBottom: "20px" }}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          maxWidth: "600px",
          margin: "0 auto",
          border: "1px solid #ddd",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        <input
          type="text"
          placeholder="Buscar libros..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            flex: 1,
            padding: "12px",
            border: "none",
            outline: "none",
          }}
        />

        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "12px 18px",
            backgroundColor: "#22c55e",
            color: "white",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
          }}
        >
          {loading ? "..." : "Buscar"}
        </button>
      </form>
    </div>
  );
}