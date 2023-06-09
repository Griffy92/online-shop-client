import * as React from "react";
import { useLocation } from "@reach/router"
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "gatsby";

const Search = () => {
    const URL = "http://localhost:3000/";

    const location = useLocation();
    // using URLSearchParams to extract query from url 
    const search = new URLSearchParams(location.search).get("query");
    const newSearch = search ? search.toLowerCase() : "";

    const  [ products, setProducts ] = useState([]);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchSearch = async () => {
            try {
                const response = await axios.get(URL+'products');

                const fetchedProducts = response.data;
                console.log(fetchedProducts)
                
                const searchProducts = fetchedProducts.filter((product) => {
                    return (
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

            <h1>Searching for {search}</h1>
            
            <div className="bg-white place-content-center grid grid-cols-4 gap-4">
                {loading ? ( <p>Loading...</p> ) : (
                    products.map(( product ) => (
                        <div key={ product.id }>
                            
                            <Link to={`/product/${product.id}`}>

                                <figure className="px-10 pt-10 w-100 h-100">
                                    <img src={ URL + product.image } alt={ product.product_name }/>
                                </figure>

                                <h2 className="card-title text-black">{ product.product_name }</h2>

                                <p className="badge badge-secondary">${ product.retail_price }</p>

                                <div className="card-actions">
                                    <button className="btn btn-primary">Add to Cart</button>
                                </div>
                            </Link>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
};

export default Search;