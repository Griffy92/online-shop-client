import React from "react";
import { Link } from "gatsby";

const DogProductsTemplate = ({ pageContext }) => {
  const { dogProducts } = pageContext;

  return (
    <div>
      <h1>Dog Products</h1>
      <ul>
        {dogProducts.map(product => (
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

export default DogProductsTemplate;
