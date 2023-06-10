import React, { useState } from "react";

const ProductFilter = ({ products, onApplyFilters }) => {
    const [sortByPrice, setSortByPrice] = useState(""); 
    const [sortByCategory, setSortByCategory] = useState(""); 
    const [sortByNewest, setSortByNewest] = useState(false);

    const applyFilters = () => {
        let updatedProducts = [...products];
    
        // Filter by price
        if (sortByPrice === "asc") {
            updatedProducts.sort((a, b) => a.retail_price - b.retail_price);
        } else if (sortByPrice === "desc") {
            updatedProducts.sort((a, b) => b.retail_price - a.retail_price);
        }
    
        // Filter by category
        if (sortByCategory !== "") {
            updatedProducts = updatedProducts.filter(
              (product) => product.product_category === sortByCategory
            );
        }
    
        // Filter by newest
        if (sortByNewest) {
            updatedProducts.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
        }
            onApplyFilters(updatedProducts);
        };
    
        const _handleApplyFilters = () => {
            applyFilters();
        };

    return (
        <aside id="default-sidebar" className="fixed px-4 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div className="menu bg-white w-56 space-y-4 form-control">
            <h3>Filters</h3>
                <label className="label">
                    <span className="label-text">Sort by Price</span>
                </label>
                    <select className="select select-bordered w-full max-w-xs select-sm"
                <label className="label">
                    <span className="label-text">Sort by Price</span>
                </label>
                    <select className="select select-bordered w-full max-w-xs select-sm"
                        value={sortByPrice}
                        onChange={ (e) => setSortByPrice(e.target.value) }
                    >
                        <option value="">All</option>
                        <option value="asc">Low to High</option>
                        <option value="desc">High to Low</option>
                    </select>
                <br />
                <label className="label">
                    <span className="label-text">Filter by Category</span>
                <br />
                <label className="label">
                    <span className="label-text">Filter by Category</span>
                </label>
                    <select className="select select-bordered w-full max-w-xs select-sm"
                    <select className="select select-bordered w-full max-w-xs select-sm"
                        value={sortByCategory}
                        onChange={ (e) => setSortByCategory(e.target.value) }
                    >
                        <option value="">All</option>
                        <option value="Dry Food">Dry Food</option>
                        <option value="Wet Food">Wet Food</option>
                        <option value="Treats">Treats</option>
                        <option value="Flea, Tick & Worm">Flea, Tick & Worm</option>
                        <option value="Litter">Litter</option>
                        <option value="Accessories">Accessories</option>
                        <option value="Toys">Toys</option>
                    </select>
                <br />
                <label className="label">
                    <span className="label-text">Sort by Newest</span>
                <br />
                <label className="label">
                    <span className="label-text">Sort by Newest</span>
                </label>
                    <input
                        type="checkbox"
                        checked={sortByNewest}
                        onChange={ (e) => setSortByNewest(e.target.checked) }
                    />
                <br />
                <button onClick={ _handleApplyFilters } className="btn btn-success">Apply</button>
                <button onClick={ _handleApplyFilters } className="btn btn-success">Apply</button>
        </div>
        </aside>
        </aside>
  );
};

export default ProductFilter;
