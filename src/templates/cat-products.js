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
                <h1 
                    className="mb-5 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl dark:text-white" 
                    style={{
                        marginTop: `85px`,
                        color: `#383838`,
                    }}>
                    Cat Products
                </h1>
                <div className="place-content-center grid grid-cols-4 gap-4">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <div key={product.id} className="card card-compact bg-white shadow-2xl p-4">
                            <Link to={`/product/${product.id}`}>
                                <figure className="px-10 pt-10">
                                    <img src={`http://localhost:3000${product.image}`} alt={product.product_name} className="w-full h-60 object-cover product-img" />
                                </figure>
                            </Link>
                            <div className="product-title">
                                <h2 
                                    className="card-title text-black font-poppinsSemi font-semi-bold" 
                                    style={{
                                        fontSize: `13pt`, 
                                        lineHeight: `1.4`,
                                    }}>
                                    { product.product_name }
                                </h2>
                            </div>
                            <div className="w-full mx-auto">
                                <p 
                                    className="badge block mt-3 mb-3 font-poppinsMed font-medium bg-sky-500 text-s" 
                                    style={{
                                        backgroundColor: `#8986FF`, 
                                        color: `white`, 
                                        border: `1px solid transparent`,
                                    }}>
                                    ${ product.retail_price }
                                </p>
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
