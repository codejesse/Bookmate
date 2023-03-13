// context/todoContext.tsx
import * as React from 'react';
import { BookContextType, Ibook, Isearch, Props} from '../@types/types.books';

//creating the context
export const BookContext = React.createContext<BookContextType | null>(null)

//context provider function to house the books state
const BookProvider: React.FC<Props> = ({ children }) => {
    const [books, setBooks] = React.useState<Ibook[]>([
        {
            id: 1,
            title: "Harry Potter",
            author: "J.K Rowlin",
            img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/teal-and-orange-fantasy-book-cover-design-template-056106feb952bdfb7bfd16b4f9325c11.jpg?ts=1637018051",
            description: "fill something here",
            price: 9,
            category: "Fiction",
            status: true
        },
        {
            id: 2,
            title: "Something different",
            author: "Balablu",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQB-3-cJ6tpQ6cFUjCach0R1dTiXdhXI0AtA&usqp=CAU",
            description: "fill something here",
            price: 9.00,
            category: "Action",
            status: true
        },
        {
            id: 3,
            title: "Another one",
            author: "DJ Khalid",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8tJNhtl4fvNnXeElC-rBSFwwIxODNd_ROzQ&usqp=CAU",
            description: "fill something here",
            price: 9,
            category: "Fiction",
            status: true
        },
        {
            id: 4,
            title: "Encrypted case",
            author: "Kanye West",
            img: "https://s26162.pcdn.co/wp-content/uploads/2020/01/Sin-Eater-by-Megan-Campisi.jpg",
            description: "fill something here",
            price: 9,
            category: "Mystery",
            status: true
        },
        {
            id: 5,
            title: "Las of us",
            author: "Kanye West",
            img: "https://s26162.pcdn.co/wp-content/uploads/2020/01/Sin-Eater-by-Megan-Campisi.jpg",
            description: "fill something here",
            price: 9,
            category: "Action",
            status: true
        },
        {
            id: 6,
            title: "Las of u",
            author: "Kanye West",
            img: "https://s26162.pcdn.co/wp-content/uploads/2020/01/Sin-Eater-by-Megan-Campisi.jpg",
            description: "fill something here",
            price: 9,
            category: "Fiction",
            status: true
        },
        {
            id: 7,
            title: "Lasus",
            author: "Kanye West",
            img: "https://s26162.pcdn.co/wp-content/uploads/2020/01/Sin-Eater-by-Megan-Campisi.jpg",
            description: "fill something here",
            price: 9,
            category: "Biography",
            status: true
        },
    ])

    const saveBook = (book: Ibook) => {
        const newBook: Ibook = {
            id: Math.random(),
            title: book.title,
            author: book.author,
            img: book.img,
            description: book.description,
            price: book.price,
            category: book.category,
            status: book.status
        }
        setBooks([...books, newBook])
    }

    const updateBook = (id: number) => {
        books.filter((book: Ibook) => {
            if (book.id === id) {
                book.status = true
                setBooks([...books])
            }
        })
    }

    /* Logic: create search function that if the input value matches the book.title then update the 
    search state with the values of the book */
    const searchBook = () => {
    }
    /* Logic: create category function that if the category value matches the book.cateory then update the 
    books state with the values of the book */
    const bookCategory = () => {
    }

    return (
        <BookContext.Provider value={{ books, saveBook, updateBook, searchBook, bookCategory}}>
            {children}
        </BookContext.Provider>
    )
}

export default BookProvider;