import Carousel from "../Carousel";
import Searchbar from "./Searchbar";
import React, { useState } from "react";

export interface Istate {
    books: {
        Title: string,
        Author: string,
        img: string,
        price: number,
        category: string
    }[]
}

const Main = () => {
    const [books, setBooks] = useState<Istate["books"]>([
        {
            Title: "Harry Potter",
            Author: "J.K Rowlin",
            img: "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/teal-and-orange-fantasy-book-cover-design-template-056106feb952bdfb7bfd16b4f9325c11.jpg?ts=1637018051",
            price: 9,
            category: "Fiction"
        },
        {
            Title: "Something different",
            Author: "Balablu",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQB-3-cJ6tpQ6cFUjCach0R1dTiXdhXI0AtA&usqp=CAU",
            price: 9.00,
            category: "Fiction"
        },
        {
            Title: "Another one",
            Author: "DJ Khalid",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8tJNhtl4fvNnXeElC-rBSFwwIxODNd_ROzQ&usqp=CAU",
            price: 9,
            category: "Fiction"
        },
        {
            Title: "Encrypted case",
            Author: "Kanye West",
            img: "https://s26162.pcdn.co/wp-content/uploads/2020/01/Sin-Eater-by-Megan-Campisi.jpg",
            price: 9,
            category: "Fiction"
        },
        {
            Title: "Las of us",
            Author: "Kanye West",
            img: "https://s26162.pcdn.co/wp-content/uploads/2020/01/Sin-Eater-by-Megan-Campisi.jpg",
            price: 9,
            category: "Fiction"
        },
        {
            Title: "Las of u",
            Author: "Kanye West",
            img: "https://s26162.pcdn.co/wp-content/uploads/2020/01/Sin-Eater-by-Megan-Campisi.jpg",
            price: 9,
            category: "Fiction"
        },
        {
            Title: "Lasus",
            Author: "Kanye West",
            img: "https://s26162.pcdn.co/wp-content/uploads/2020/01/Sin-Eater-by-Megan-Campisi.jpg",
            price: 9,
            category: "Fiction"
        },
    ])
    return (
        <div>
            <div className="2xl:mx-auto h-full 2xl:px-0 py-24 px-10">
                <Searchbar />
                <div className="w-7/12 h-full 2xl:mx-auto 2xl:px-0 py-2">
                    <Carousel books={books} />
                </div>
            </div>
        </div>
    );
}

export default Main;