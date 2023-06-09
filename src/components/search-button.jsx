import React from "react";
import { useState } from "react";
import { navigate } from "gatsby";

const SearchButton = () => {
    const [search, setSearch] = useState('')


    const _handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search?query=${encodeURIComponent(search)}`);
    };
    
    const _handleChange = (e) => {
        setSearch(e.target.value);
    };
    
    const _handleKeyDown = (e) => {
        if (e.key === "Enter") {
            _handleSubmit(e);
            _clearSearchBar();
        }
    };

    const _clearSearchBar = () => {
        setSearch("");
    };


    return (
        <>
            <div className="flex flex-wrap items-center justify-between mx-auto mr-2">
            
                <div className="relative block md:inline-block">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none inline-block">
                        <svg
                            className="w-5 h-5 text-white"
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
                        className="block w-full sm:w-40 lg:w-50 p-2 pl-10 text-sm text-white border border-white rounded-lg bg-transparent font-poppinsLight font-extra-light placeholder-gray-200"
                        placeholder="Search..."
                        value={search}
                        onChange={_handleChange}
                        onKeyDown={_handleKeyDown}
                    />
                </div>
            </div>
        </>
      );
    };
    

export default SearchButton;



