import React from "react";
import { Link } from "gatsby";

const AllProductsTemplate = ({ pageContext }) => {
  const { allProducts } = pageContext;

  return (
    <div>
      <h1>All Products</h1>
      <ul>
        {allProducts.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.product_code}`}>{product.product_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AllProductsTemplate;
