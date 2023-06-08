import React from "react";
import { Link } from "gatsby";

const ReptileProductsTemplate = ({ pageContext }) => {
  const { reptileProducts } = pageContext;

  return (
    <div>
      <h1>Reptile Products</h1>
      <ul>
        {reptileProducts.map(product => (
          <li key={product.id}>
            <Link to={`/product/${product.id}`}>
              <img src={`http://localhost:3000${product.image}`} alt={product.product_name} />
              {product.product_name} <br></br>
              ${ product.retail_price }

            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReptileProductsTemplate;
