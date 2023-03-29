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
            category: "Action"
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
            category: "Mystery"
        },
        {
            Title: "Las of us",
            Author: "Kanye West",
            img: "https://s26162.pcdn.co/wp-content/uploads/2020/01/Sin-Eater-by-Megan-Campisi.jpg",
            price: 9,
            category: "Action"
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
            category: "Biography"
        },
    ])
    return (
        <div className="2xl:mx-auto h-full 2xl:px-0 py-24 px-10">
            <Searchbar />
            <div className="flex flex-row">
                <div className="w-7/12 h-full 2xl:mx-auto 2xl:px-0 py-2">
                    <Carousel />
                </div>
                <div className="flex flex-col ml-[30px]">
                    <div className="w-full h-full bg-[url('https://www.wallsauce.com/uploads/wallsauce-com/images/thumbs/248/822e65e410d17c8ae756978e5a46f84b540b6038_800__R_N_90.jpg')] bg-no-repeat bg-cover bg-center rounded-xl m-auto">
                        <div className="hidden xl:flex flex flex-col">
                            <h1 className="text-7xl font-semibold text-white mt-32 ml-7">Get a book today</h1>
                            <button className="w-10/12 h-[65px] bg-amber-300 rounded-full m-auto mt-24 text-white text-2xl font-medium leading-4 ">Start reading now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;