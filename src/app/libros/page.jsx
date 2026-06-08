"use client";

import { useState } from "react";
import SearchBar from "@/app/components/SearchBar";
import BookCard from "@/app/components/BookCard";

export default function Home() {
  const [results, setResults] = useState([]);

  return (
    <div style={{ padding: "20px" }}>
      <SearchBar setResults={setResults} />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
          gap: "10px",
        }}
      >
        {results.map((book) => (
          <BookCard key={book.key} book={book} />
        ))}
      </div>
    </div>
  );
}