import { BookProvider } from "./Context/BookContext";
import BookForm from "./Components/BookForm";
import BookList from "./Components/BookList";
import ReadList from "./Components/ReadList";

function App() {
  return (
    <BookProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center mb-4">Gestor de Libros</h1>
        <BookForm />
        <BookList />
        <ReadList />
      </div>
    </BookProvider>
  );
}

export default App;