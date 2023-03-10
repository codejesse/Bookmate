const Searchbar = () => {
    return (
        <div className="flex flex-grow justify-between w-full">
            <div className="flex justify-center w-8/12 ">
                <div className="mb-3 w-full xl:w-full">
                    <div className="relative mb-4 flex w-full flex-wrap items-stretch">
                        <input
                            type="search"
                            className="h-14 relative m-0 block w-9/12 min-w-0 flex-auto rounded-full border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
                            placeholder="Search"
                            aria-label="Search"
                            aria-describedby="button-addon2" />
                    </div>
                </div>
            </div>
            <div className="">
                <div className="">
                    <select data-te-select-init className="h-14 relative m-0 block w-96 min-w-0 flex-auto rounded-full border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200">
                        <option value="1">Category</option>
                        <option value="2">Fiction</option>
                        <option value="3">Action</option>
                        <option value="4">Mystery</option>
                        <option value="5">Biography</option>
                        <option value="6">Fantasy</option>
                        <option value="7">Sci-fi</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Searchbar;