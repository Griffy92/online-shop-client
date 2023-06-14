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
                <h1 className="mt-10 mb-5 text-3xl font-extrabold font-poppins text-black">Cat Products</h1>
                    <div className="bg-white place-content-center grid grid-cols-4 gap-4">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <div key={product.id} className="card card-compact bg-white shadow-2xl p-4">
                                <Link to={`/product/${product.id}`}>
                                    <figure className="px-10 pt-10">
                                        <img src={`http://localhost:3000${product.image}`} alt={product.product_name} className="w-full h-60 object-cover product-img" />
                                    </figure>
                                </Link>
                                <div className="product-title">
                                    <h2 className="card-title text-black">{ product.product_name }</h2>
                                </div>
                                <div className="w-full mx-auto">
                                    <p className="badge badge-secondary block mt-3 mb-3">${ product.retail_price }</p>
                                    <br></br>
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
