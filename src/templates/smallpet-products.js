import React from "react";
import { Link } from "gatsby";

const SmallpetProductsTemplate = ({ pageContext }) => {
  const { smallpetProducts } = pageContext;

  return (
    <div>
      <h1>Small Pet Products</h1>
      <ul>
        {smallpetProducts.map(product => (
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

export default SmallpetProductsTemplate;
