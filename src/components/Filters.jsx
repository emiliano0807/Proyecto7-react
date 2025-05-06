import { useState } from "react";
import { useBookContext } from "../Context/BookContext";

export default function Filters() {
  const { books, setBooks } = useBookContext();
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearch(value);
    setBooks((prev) =>
      prev.map((b) => ({
        ...b,
        visible:
          b.title.toLowerCase().includes(value) ||
          b.author.toLowerCase().includes(value) ||
          b.genre.toLowerCase().includes(value),
      }))
    );
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder="Filtrar por título, autor o género"
        value={search}
        onChange={handleChange}
        className="border p-2 w-full"
      />
    </div>
  );
}