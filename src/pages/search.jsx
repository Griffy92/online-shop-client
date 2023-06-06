import React from "react";
import Layout from "../components/layout";
import {useLocation} from "@reach/router"

const Search = () => {
    const location = useLocation();
    // using URLSearchParams to extract query from url 
    const search = new URLSearchParams(location.search).get("query");
    const newSearch = search.toLowerCase();
    const products = [
        {
            id: 1,
            name: "Check Textured Coat",
            description: "A stylish check textured coat for all seasons.",
            image: "http://placekitten.com/300/305"
        },
        {
            id: 2,
            name: "Denim Jeans",
            description: "Classic denim jeans for a casual look.",
            image: "http://placekitten.com/300/310"
        },
        {
            id: 3,
            name: "Leather Shoulder Bag",
            description: "Elegant leather shoulder bag with multiple compartments.",
            image: "http://placekitten.com/300/315"
        },
        {
            id: 4,
            name: "Striped T-Shirt",
            description: "Comfortable striped t-shirt for everyday wear.",
            image: "http://placekitten.com/300/320"
        },
        {
            id: 5,
            name: "Sneakers",
            description: "Sporty sneakers with excellent cushioning and support.",
            image: "http://placekitten.com/300/330"
        }
    ];

    const searchProducts = products.filter((product) => { 
        if (
            product.name.toLowerCase().includes(newSearch) ||
            product.description.toLowerCase().includes(newSearch)
        ) {
            return product;
        }
    });
      
    return (
        <Layout>
            <h1>Searching for {search}</h1>
            {searchProducts.map((product) => (
                <div key={product.id} >
                <h1>{product.name}</h1>
                <p>{product.description}</p>
                <img src={product.image} alt={product.name} />
                </div>
            ))}
        </Layout>

    )
}

export default Search;