"use client";

import { useRouter } from "next/navigation";

const normalizeKey = (key) => {
  if (!key) return "";
  if (key.startsWith("/works/")) return key;
  if (key.startsWith("OL")) return `/works/${key}`;
  return key;
};

export default function BookCard({ book }) {
  console.log("Estoy aca en la function de BookCard")
  const router = useRouter();

  const coverId = book.cover_i;
  const id = normalizeKey(book.key);
  const handleClick = () => {
    router.push(`/libros${id}`);
  };

  return (
    <div
      onClick={handleClick}
      style={{
        display: "flex",
        gap: "12px",
        padding: "10px",
        border: "1px solid #eee",
        borderRadius: "10px",
        alignItems: "center",
        backgroundColor: "white",
        cursor: "pointer",
      }}
    >
      {coverId ? (
        <img
          src={`https://covers.openlibrary.org/b/id/${coverId}-S.jpg`}
          alt={book.title}
          style={{ width: "60px", height: "90px", objectFit: "cover" }}
        />
      ) : (
        <div style={{ width: "60px", height: "90px", background: "#eee" }} />
      )}

      <div style={{ flex: 1 }}>
        <h4>{book.title}</h4>
        <p>{book.author_name?.join(", ")}</p>
      </div>
    </div>
  );
}