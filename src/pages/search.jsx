import * as React from "react";
import { useLocation } from "@reach/router"
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "gatsby";
import ProductControls from "../components/product-controls";

const Search = () => {
    const URL = "http://localhost:3000/"; 

    const location = useLocation();
    // using URLSearchParams to extract query from url 
    const search = new URLSearchParams(location.search).get("query");
    const newSearch = search ? search.toLowerCase() : "";
    
    const  [ products, setProducts ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const fetchSearch = async () => {
            try {
                const response = await axios.get(URL+'products');

                const fetchedProducts = response.data;
                console.log(fetchedProducts)
                
                const searchProducts = fetchedProducts.filter((product) => {
                    return (
                        product.animal_category.toLowerCase().includes(newSearch) ||
                        product.product_name.toLowerCase().includes(newSearch) ||
                        product.product_description.toLowerCase().includes(newSearch)
                    );
                });
                setProducts(searchProducts);
                setLoading(false);
            } catch (error) {
                console.error("ERROR", error);
            }
        };

        fetchSearch();
    }, [newSearch]);
      
    
    return (
        <div className="container mx-auto" pageTitle="search">
            <div className="ml-64">
                <h1 className="mt-10 mb-5 text-3xl font-extrabold font-poppins text-black">
                        Searching for <span style={{ color: '#ffbd23' }}>{search}</span>
                    </h1>
                    <div className="place-content-center grid grid-cols-4 gap-4">
                        {loading ? ( <h2>No Items Found</h2> ) : (
                            products.map(( product ) => (
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
                                        <h2 className="card-title text-black">{ product.product_name }</h2>
                                    </div>

                                    <div className="w-full mx-auto">
                                        <p className="badge badge-secondary block mt-3 mb-3">${ product.retail_price }</p>
                                        <br></br>
                                            <ProductControls product={product}/>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>
            </div>
        </div>
    );
};

export default Search;