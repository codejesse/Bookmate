import { BookContextType, Ibook } from '../@types/types.books';
import { BookContext } from '../context/bookContext';
import { useContext } from 'react';

const Inventory = () => {
    const { books } = useContext(BookContext) as BookContextType;

    return (
        <div className="overflow-hidden rounded-3xl m-5 mt-[-25px]">
            {/* Use context to make the state available here for displaying */}
            <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
                <thead>
                    <tr>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Title</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Author</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Category</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Availability</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Status</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900">Price</th>
                        <th scope="col" className="px-6 py-4 font-medium text-gray-900"></th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                    {books.map((book, index) => {
                        return (
                            <tr className="hover:bg-gray-50">
                                <th className="flex gap-3 px-6 py-4 font-normal text-gray-900">
                                    <div className="relative h-17 w-10">
                                        <img
                                            className="h-full w-full rounded object-cover object-center"
                                            src={book.img}
                                            alt={book.title}
                                        />
                                    </div>
                                    <div className="text-sm mt-4">
                                        <div className="font-medium text-gray-700">{book.title}</div>
                                        {/* <div className="text-gray-400">Posted: Thursday, December, 12:30</div> */}
                                    </div>
                                </th>
                                <td className="px-6 py-4">
                                    <p>{book.author}</p>
                                </td>
                                <td className="px-6 py-4">{book.category}</td>
                                <td className="px-6 py-4">
                                    <div className="flex gap-2">
                                        <span
                                            className="inline-flex items-center gap-1 rounded-full bg-green-50 px-2 py-1 text-xs font-semibold text-green-600"
                                        >
                                            <span className="h-1.5 w-1.5 rounded-full bg-green-600"></span>
                                            {book.status}
                                        </span>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex gap-2">
                                        <p>{book.status}</p>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <div className="flex gap-4">
                                        {/* Add the price and status options*/}
                                        <button
                                            className="inline-flex flex justify-center items-center gap-1 rounded-full bg-blue-400 h-[43px] w-[144px] px-2 py-1 text-xs font-semibold text-white"
                                        >
                                            ${book.price}
                                        </button>
                                    </div>
                                </td>
                            </tr>

                        )
                    })}
                    {/* </tr> */}
                </tbody>
            </table>
        </div>
    );
}

export default Inventory;