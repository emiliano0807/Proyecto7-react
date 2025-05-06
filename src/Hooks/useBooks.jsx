// src/hooks/useBooks.js
import { useBookContext } from "../Context/BookContext";

export function useBooks() {
  const { books, setBooks } = useBookContext();

  const addBook = (book) => setBooks([...books, book]);
  const updateBook = (updatedBook) => {
    setBooks(
      books.map((b) => (b.id === updatedBook.id ? updatedBook : b))
    );
  };
  const deleteBook = (id) => {
    setBooks(books.filter((b) => b.id !== id));
  };

  return { books, addBook, updateBook, deleteBook };
}