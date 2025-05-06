import { createContext, useContext, useState, useEffect } from "react";

const BookContext = createContext();

export function BookProvider({ children }) {
  const [books, setBooks] = useState(() => {
    // ← Función inicial que solo corre una vez
    const stored = localStorage.getItem("books");
    return stored ? JSON.parse(stored) : [];
  });

  // Guardar en localStorage cuando cambien los libros
  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
  }, [books]);

  return (
    <BookContext.Provider value={{ books, setBooks }}>
      {children}
    </BookContext.Provider>
  );
}

export function useBookContext() {
  return useContext(BookContext);
}