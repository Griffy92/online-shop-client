import React, { useState } from "react";

const ProductFilter = ({ products, onApplyFilters }) => {
    const [sortBy, setSortBy] = useState(""); 
    const [sortByCategory, setSortByCategory] = useState(""); 

    const applyFilters = () => {
        let updatedProducts = [...products];
    
        // Filter by category
        if (sortByCategory !== "") {
            updatedProducts = updatedProducts.filter(
                (product) => product.product_category === sortByCategory
            );
        };

        // Filter by price
        if (sortBy === "asc") {
            updatedProducts.sort((a, b) => a.retail_price - b.retail_price);
        } else if (sortBy === "desc") {
            updatedProducts.sort((a, b) => b.retail_price - a.retail_price);
        } else if (sortBy === "newest") {
            updatedProducts.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        };

        onApplyFilters(updatedProducts);
    }

    const _handleApplyFilters = () => {
        applyFilters();
    };

    return (
        <aside id="default-sidebar" className="mt-16 fixed px-4 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 top-[18%] z-4" aria-label="Sidebar">

        <div className="menu bg-white w-50 space-y-1 form-control ">
            {/* filter icon */}
            <div className="flex justify-center my-1">
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth="1.5" 
                    stroke="currentColor" 
                    className="w-6 h-6"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" 
                    />
                </svg>
            </div>

            {/* Category Filter */}
            <select 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={sortByCategory}
                onChange={ (e) => setSortByCategory(e.target.value) }
            >
                <option value="">Product Category</option>
                <option value="Dry Food">Dry Food</option>
                <option value="Wet Food">Wet Food</option>
                <option value="Treats">Treats</option>
                <option value="Flea, Tick & Worm">Flea, Tick & Worm</option>
                <option value="Litter">Litter</option>
                <option value="Accessories">Accessories</option>
                <option value="Toys">Toys</option>
            </select>
            <br />

            {/* Soft By Filter */}
            <select 
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                value={sortBy}
                onChange={ (e) => setSortBy(e.target.value) }
            >
                <option value="">Sort By</option>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
                <option value="newest">Newest</option>
            </select>
            <br />
            <button 
                onClick={ _handleApplyFilters } 
                className="font-poppinsMed font-medium py-3 px-7 text-red font-bold text-sm rounded text-white hover:text-white outline-offset-0 bg-green-400 hover:bg-sky-500 duration-500 shadow">
                Apply
            </button>
        </div>
        </aside>
    );
};

export default ProductFilter;
