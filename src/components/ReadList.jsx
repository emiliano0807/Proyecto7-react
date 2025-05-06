import { useBookContext } from "../Context/BookContext";

export default function ReadList() {
  const { books } = useBookContext();
  const readBooks = books.filter((b) => b.read);

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold">Libros leídos</h2>
      {readBooks.length === 0 ? (
        <p>No hay libros marcados como leídos.</p>
      ) : (
        <ul className="space-y-2 mt-2">
          {readBooks.map((book) => (
            <li key={book.id} className="border p-3 rounded">
              <strong>{book.title}</strong> - {book.author}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}