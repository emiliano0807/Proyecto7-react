import { createContext, useContext, useState} from "react";

const BookContext = createContext();

export function BookProvider({children}){
    const [books, setBooks] = useState([]);

    return(
        <BookContext.Provider value={{books, setBooks}}>
            {children}
        </BookContext.Provider>
    )
}

export function useBooksContext(){
    return useContext(BookContext)
}