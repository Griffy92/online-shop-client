import * as React from "react";
import axios from "axios";
import ProductControls from "../components/product-controls";
import ProductFilter from "../components/product-filter";
import { useLocation } from "@reach/router"
import { useEffect, useState } from "react";
import { Link } from "gatsby";
import NoItemsFound from '../images/no-items-found.png';

const Search = () => {
    const URL = "http://localhost:3000/"; 

    const location = useLocation();
    // using URLSearchParams to extract query from url 
    const search = new URLSearchParams(location.search).get("query");
    const newSearch = search ? search.toLowerCase() : "";
    
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filteredProducts, setFilteredProducts] = useState([]);
      
    useEffect(() => {
        const fetchSearch = async () => {
            try {
                const response = await axios.get(URL+'products');
                const fetchedProducts = response.data;
                const searchProducts = fetchedProducts.filter((product) => {
                    return (
                        product.animal_category.toLowerCase().includes(newSearch) ||
                        product.product_name.toLowerCase().includes(newSearch) ||
                        product.product_description.toLowerCase().includes(newSearch)
                    );
                });
                setProducts(searchProducts);
                setFilteredProducts(searchProducts);
                setLoading(false);
            } catch (error) {
                console.error("ERROR", error);
            }
        };

        fetchSearch();
    }, [newSearch]);
      
    const ApplyFilters = (updatedProducts) => {
        setFilteredProducts(updatedProducts);
    };
    
    return (
        <div 
            className="container mx-auto bg-cover bg-center" 
            pageTitle="search"
            style={{
                backgroundImage: `url(${ NoItemsFound })`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                minHeight: "90vh",
                padding: "2rem", 
            }}
        >
            {filteredProducts.length > 0 && (
            <ProductFilter products={products} onApplyFilters={ApplyFilters} />
            )}
            <div className="ml-64">
                <h1 
                    className="mb-5 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-5xl dark:text-white"  
                    style={{
                        marginTop: `85px`,
                        color: `#383838`,
                    }}
                    >Searching for <span style={{ color: '#ffbd23' }}>{search}</span>
                </h1>
                <div className="place-content-center grid grid-cols-4 gap-4">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(( product ) => (
                            <div 
                                key={ product.id }
                                className="card card-compact bg-white shadow-2xl p-4"
                            >
            
                                <Link to={`/product/${product.id}`}>
                                    <figure className="px-10 pt-10">
                                        <img 
                                            src={ URL + product.image } 
                                            alt={ product.product_name }
                                            className="h-60 object-cover product-img"
                                        />
                                    </figure>
                                </Link>

                                <div className="product-title">
                                    <h2 
                                        className="card-title text-black font-poppinsSemi font-semi-bold" 
                                        style={{
                                            fontSize: `13pt`, 
                                            lineHeight: `1.4`}}>
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
                                        ${ product.retail_price }</p>
                                    <br></br>
                                        <ProductControls product={product}/>
                                </div>
                            </div>
                        ))
                    ) : (
                        <h1><strong>No Items Found</strong></h1>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Search;