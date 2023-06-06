import React from "react";
import Layout from "../components/layout";
import {useLocation} from "@reach/router"

const Search = () => {
    const location = useLocation();
    // using URLSearchParams to extract query from url 
    const search = new URLSearchParams(location.search).get("query");
    const products = [
        {
          id: 1,
          name: "Check Textured Coat",
          description: "A stylish check textured coat for all seasons.",
          image: "http://placekitten.com/300/300"
        },
        {
          id: 2,
          name: "Denim Jeans",
          description: "Classic denim jeans for a casual look.",
          image: "http://placekitten.com/300/300"
        },
        {
          id: 3,
          name: "Leather Shoulder Bag",
          description: "Elegant leather shoulder bag with multiple compartments.",
          image: "http://placekitten.com/300/300"
        },
        {
          id: 4,
          name: "Striped T-Shirt",
          description: "Comfortable striped t-shirt for everyday wear.",
          image: "http://placekitten.com/300/300"
        },
        {
          id: 5,
          name: "Sneakers",
          description: "Sporty sneakers with excellent cushioning and support.",
          image: "http://placekitten.com/300/300"
        }
      ];

    return (
        <Layout>
            <h1>Searching for {search}</h1>

        </Layout>

    )
}

export default Search;