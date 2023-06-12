import React , { useState } from "react";
import { Link } from "gatsby";
import ProductFilter from "../components/product-filter";
import ProductControls from "../components/product-controls";

const CatProductsTemplate = ({ pageContext }) => {
    const { catProducts } = pageContext;

    const [filteredProducts, setFilteredProducts] = useState(catProducts);

    const applyFilters = (updatedProducts) => {
        setFilteredProducts(updatedProducts);
    };

    return (
        <div className="container mx-auto">
            <ProductFilter products={catProducts} onApplyFilters={applyFilters} />
            <div className="ml-64">
                <div className="bg-white place-content-center grid grid-cols-4 gap-4">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <div key={product.id} className="card card-compact bg-white shadow-xl p-4">
                            <Link to={`/product/${product.id}`}>
                                <figure className="px-10 pt-10 w-100 h-100">
                                    <img src={`http://localhost:3000${product.image}`} alt={product.product_name} className="w-full h-60 object-cover" />
                                </figure>
                            </Link>
                            <h2 className="card-title text-black">{ product.product_name }</h2>
                            <p className="badge badge-secondary">${ product.retail_price }</p>
                            <div className="w-full mx-auto">
                                    <ProductControls product={product}/>
                            </div>
                        </div>
                    ))
                ) : (
                    <h2>No Items Found</h2>
                )}

                </div>
            </div>
        </div>
    );
};

export default CatProductsTemplate;
