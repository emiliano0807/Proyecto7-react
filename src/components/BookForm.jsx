import { useState } from "react";
import { useBooks } from "../Hooks/useBooks";

export default function BookForm() {
  const { addBook } = useBooks();
  const [form, setForm] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
    read: false,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title || !form.author) return;
    addBook({ ...form, id: crypto.randomUUID() });
    setForm({ title: "", author: "", genre: "", year: "", read: false });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-2 mb-6">
      <input name="title" placeholder="Título" value={form.title} onChange={handleChange} className="border p-2 w-full" />
      <input name="author" placeholder="Autor" value={form.author} onChange={handleChange} className="border p-2 w-full" />
      <input name="genre" placeholder="Género" value={form.genre} onChange={handleChange} className="border p-2 w-full" />
      <input name="year" placeholder="Año de publicación" value={form.year} onChange={handleChange} className="border p-2 w-full" />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Agregar libro</button>
    </form>
  );
}