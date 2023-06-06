import React from "react";
import { useState } from "react";
import { Link, navigate } from "gatsby";

const SearchButton = () => {
    
    const [search, setSearch] = useState('')


    const _handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search?query=${search}`);
      };
    
    const _handleChange = (e) => {
    setSearch(e.target.value);
    };
    
    const _handleKeyDown = (e) => {
    if (e.key === "Enter") {
        _handleSubmit(e);
    }
    };

    return (
    <div className="flex flex-wrap items-center justify-between mx-auto p-4">
    
            <div className="relative hidden md:block p-2.5">
                <div className="absolute inset-y-0 left-2 flex  items-center pl-3 pointer-events-none">

                    <svg
                    className="w-5 h-5 text-gray-500"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                    <span className="sr-only">Search icon</span>
                </div>
                
                <input
                type="text"
                id="search-navbar"
                className="block p-2.5 w-full pl-10 text-sm inline-flex text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
                value={search}
                onChange={_handleChange}
                onKeyDown={_handleKeyDown}
                />
            </div>

            {/* <Link to="/search" state={{ search }}>
                Search
            </Link> */}
            {/* <button type="submit"> Submit</button> */}
    </div>
      );
    };
    

export default SearchButton;