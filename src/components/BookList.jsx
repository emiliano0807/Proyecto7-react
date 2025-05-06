// src/components/BookList.jsx
import { useBooks } from "../Hooks/useBooks";
import { useState } from "react";

export default function BookList() {
  const { books, deleteBook, updateBook } = useBooks();
  const [filter, setFilter] = useState("");

  const filteredBooks = books.filter(
    (b) =>
      b.title.toLowerCase().includes(filter.toLowerCase()) ||
      b.author.toLowerCase().includes(filter.toLowerCase()) ||
      b.genre.toLowerCase().includes(filter.toLowerCase())
  );

  const toggleRead = (book) => {
    updateBook({ ...book, read: !book.read });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Libros</h2>

      <input
        type="text"
        placeholder="Buscar por título, autor o género"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="border p-2 w-full mb-4"
      />

      {filteredBooks.length === 0 ? (
        <p>No hay libros.</p>
      ) : (
        <ul className="space-y-2">
          {filteredBooks.map((book) => (
            <li
              key={book.id}
              className="border p-3 rounded flex justify-between items-center"
            >
              <div>
                <p>
                  <strong>{book.title}</strong> - {book.author}
                </p>
                <p>{book.genre} | {book.year}</p>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => toggleRead(book)}
                  className="bg-green-500 text-white px-2 py-1 rounded"
                >
                  {book.read ? "No leído" : "Leído"}
                </button>
                <button
                  onClick={() => deleteBook(book.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Eliminar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}