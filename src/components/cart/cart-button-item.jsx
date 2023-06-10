import { Link } from 'gatsby';
import React from 'react';

const CartButtonItem = ( { product } ) => {
  
  const { product_name, retail_price } = product

    return (
      <tr>
        <td className="w-1/6 h-16">
          <div className="lg:table-cell">
            <img src={`http://localhost:3000${product.image}`} alt={product.product_name} className='h-16'/>
          </div>
        </td>
        <td className="w-4/6 text-black">
          <Link to={`/product/${product.id}`}><h2>{product_name}</h2></Link>
        </td>
        <td className="w-1/6 text-center text-black">
          <p>${retail_price}</p>
        </td>
      </tr>
    );
};

export default CartButtonItem;