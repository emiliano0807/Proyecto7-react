import { useEffect } from "react";
import { useBookContext } from "../Context/BookContext";

export function useBooks() {
  const { books, setBooks } = useBookContext();

  useEffect(() => {
    const saved = localStorage.getItem("books");
    if (saved) setBooks(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  const addBook = (book) => setBooks([...books, book]);
  const updateBook = (updated) =>
    setBooks(books.map((b) => (b.id === updated.id ? updated : b)));
  const deleteBook = (id) => setBooks(books.filter((b) => b.id !== id));

  return { books, addBook, updateBook, deleteBook };
}