import { useEffect } from "react";
import { useBooksContext } from "../Context/BookContext";

export function useBooks(){
    const {books, setBooks} = useBooksContext();
    
    useEffect(()=>{
        const saved = localStorage .getItem("books");
        if(saved) setBooks(JSON.parse(saved));

    },[]);

    useEffect(()=>{
        localStorage.setItem("books", JSON.stringify(books));
    },[books])

    const addBooks = (book) => setBooks([...books, book]);
    const updateBook = (updated)=>
        setBooks(books.map((book) => book.id === updated.id ? updated : book));
    const deleteBook = (id) => setBooks(books.filter((book) => book.id !== id));

    return {books, addBooks, updateBook, deleteBook};
}