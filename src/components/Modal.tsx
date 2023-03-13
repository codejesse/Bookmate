import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState, useContext } from 'react'
import { BookContext } from '../context/bookContext'
import { BookContextType, Ibook } from '../@types/types.books'


const Modal: React.FC = () => {
    let [isOpen, setIsOpen] = useState(false)
    const { saveBook } = useContext(BookContext) as BookContextType;
    // const [formData, setFormData] = useState<Ibook | []>({
    //     title: "",
    //     author: "",
    //     img: "",
    //     category: "",
    //     description: "",
    //     price: 0.00,
    //     status: false
    // });
    const [formData, setFormData] = useState<Ibook | {}>()
    const handleForm = (e: React.FormEvent<HTMLInputElement>): void => {
        setFormData({
            ...formData,
            [e.currentTarget.id]: e.currentTarget.value,
        });
    };

    // const handleSaveBook = (e: React.FormEvent, formData : Ibook | any) => {
    //     e.preventDefault();
    //     saveBook(formData);
    //     setFormData({})
    // }
    const handleSaveBook = (formData : Ibook | any) => {
        saveBook(formData);
        setFormData({})
    }

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    console.log(formData)

    return (
        <>
            <div className="">
                <button
                    type="button"
                    onClick={openModal}
                    className="w-32 h-11 border-2 border-green-200 text-green-400 bg-none rounded-3xl"
                >
                    Add book
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-4xl font-medium leading-6 text-gray-900"
                                    >
                                        Add new book 📚
                                    </Dialog.Title>
                                    <form className="mt-2 Form">
                                        <div className="mt-12">
                                            <div className="mb-3 w-full xl:w-full">
                                                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                                                    <input
                                                        type="text"
                                                        id="title"
                                                        onChange={handleForm}
                                                        className="h-12 relative m-0 block w-full min-w-0 flex-auto rounded-full border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                                                        placeholder="Book name"
                                                        aria-label="Search"
                                                        aria-describedby="button-addon2" />
                                                </div>
                                            </div>
                                            <div className="mb-3 w-full xl:w-full">
                                                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                                                    <input
                                                        type="text"
                                                        id="img"
                                                        onChange={handleForm}
                                                        className="h-12 relative m-0 block w-full min-w-0 flex-auto rounded-full border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                                                        placeholder="Book image"
                                                        aria-label="Search"
                                                        aria-describedby="button-addon2" />
                                                </div>
                                            </div>
                                            <div className="mb-3 w-full xl:w-full">
                                                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                                                    <input
                                                        type="text"
                                                        id="author"
                                                        onChange={handleForm}
                                                        className="h-12 relative m-0 block w-full min-w-0 flex-auto rounded-full border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                                                        placeholder="Author's name"
                                                        aria-label="Search"
                                                        aria-describedby="button-addon2" />
                                                </div>
                                            </div>
                                            <div className="mb-3 w-full xl:w-full">
                                                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                                                    <input
                                                        type="text"
                                                        id="price"
                                                        onChange={handleForm}
                                                        className="h-12 relative m-0 block w-full min-w-0 flex-auto rounded-full border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                                                        placeholder="Price"
                                                        aria-label="Search"
                                                        aria-describedby="button-addon2" />
                                                </div>
                                            </div>
                                            <div className="mb-3 w-full xl:w-full">
                                                <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                                                    <input
                                                        type="text"
                                                        id="description"
                                                        onChange={handleForm}
                                                        className="h-12 relative m-0 block w-full min-w-0 flex-auto rounded-full border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                                                        placeholder="Description"
                                                        aria-label="Search"
                                                        aria-describedby="button-addon2" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="mt-4"> */}
                                            <button
                                                type="button"
                                                className="mr-4 justify-center w-32 h-11 border-2 border-red-300 text-red-400 bg-none rounded-3xl"
                                                onClick={closeModal}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="button"
                                                className="justify-center bg-amber-100 w-32 h-11 text-amber-400 bg-none rounded-3xl"
                                                disabled={formData === undefined ? true : false}
                                                onClick={() => handleSaveBook(formData)}
                                            >
                                                Submit
                                            </button>   
                                        {/* </div> */}
                                    </form>

                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}
export default Modal;