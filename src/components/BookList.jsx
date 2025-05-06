import { useBooks } from "../Hooks/useBooks";
import { useState } from "react";
import { useBookContext } from "../Context/BookContext";

export default function BookList() {
  const { books, setBooks } = useBookContext();
  const { deleteBook, updateBook } = useBooks();
  const [filter, setFilter] = useState("");

  const filteredBooks = books.filter(
    (b) =>
      b.title.toLowerCase().includes(filter) ||
      b.author.toLowerCase().includes(filter) ||
      b.genre.toLowerCase().includes(filter)
  );

  const toggleRead = (book) => {
    updateBook({ ...book, read: !book.read });
  };

  return (
    <div>
      <h2 className="text-xl font-semibold">Libros</h2>
      {filteredBooks.length === 0 ? (
        <p>No hay libros.</p>
      ) : (
        <ul className="space-y-2 mt-2">
          {filteredBooks.map((book) => (
            <li key={book.id} className="border p-3 rounded flex justify-between items-center">
              <div>
                <p><strong>{book.title}</strong> - {book.author}</p>
                <p>{book.genre} | {book.year}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => toggleRead(book)} className="bg-green-500 text-white px-2 py-1 rounded">
                  {book.read ? "No leído" : "Leído"}
                </button>
                <button onClick={() => deleteBook(book.id)} className="bg-red-500 text-white px-2 py-1 rounded">Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}