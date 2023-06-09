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
        <div>
            <h3>Filters</h3>
                <label>
                    Sort by Price:
                    <select
                        value={sortByPrice}
                        onChange={ (e) => setSortByPrice(e.target.value) }
                    >
                        <option value="">All</option>
                        <option value="asc">Low to High</option>
                        <option value="desc">High to Low</option>
                    </select>
                </label>
                <br />
                <label>
                    Sort by Category:
                    <select
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
                </label>
                <br />
                <label>
                    Sort by Newest:
                    <input
                        type="checkbox"
                        checked={sortByNewest}
                        onChange={ (e) => setSortByNewest(e.target.checked) }
                    />
                </label>
                <br />
                <button onClick={ _handleApplyFilters }>Apply</button>
        </div>
  );
};

export default ProductFilter;
