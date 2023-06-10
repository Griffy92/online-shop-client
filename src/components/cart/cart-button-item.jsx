import { Link } from 'gatsby';
import React from 'react';

const CartButtonItem = ( cart_item ) => {
  
  const { product } = cart_item

  console.log(product.product)

  // const { product_name, retail_price } = product

    return (
      <tr>
        <td className="w-1/6 text-center text-black">
          <p>{product.quantity}x</p>
        </td>
        <td className="w-1/6 h-16">
          <div className="lg:table-cell">
            <img src={`http://localhost:3000${product.product.image}`} alt={product.product.product_name} className='h-16'/>
          </div>
        </td>
        <td className="w-4/6 text-black">
          <Link to={`/product/${product.product.id}`}><h2>{product.product.product_name}</h2></Link>
        </td>
        <td className="w-1/6 text-center text-black">
          <p>${product.product.retail_price}</p>
        </td>
      </tr>
    );
};

export default CartButtonItem;