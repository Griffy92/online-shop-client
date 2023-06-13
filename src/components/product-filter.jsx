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
        <aside id="default-sidebar" className="fixed px-4 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="menu bg-white w-56 space-y-4 form-control">
            <select className="select select-bordered w-full max-w-xs"
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
            <select className="select select-bordered w-full max-w-xs"
                value={sortBy}
                onChange={ (e) => setSortBy(e.target.value) }
            >
                <option value="">Sort By</option>
                <option value="asc">Low to High</option>
                <option value="desc">High to Low</option>
                <option value="newest">Newest</option>
            </select>
            <br />
            <button onClick={ _handleApplyFilters } className="py-4 px-8 text-white font-bold text-xs rounded hover:text-gray-950 sameasbg-color text-white">Apply</button>
        </div>
        </aside>
    );
};

export default ProductFilter;
