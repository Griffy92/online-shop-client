import { Link } from 'gatsby';
import React from 'react';
import { CartAPI } from "../../services/cart";
import { useState } from 'react';

const CartButtonItem = ( props ) => {

  const { product } = props

  const [count, setCount] = useState(0)

  const _handleAddCart = () => {
    console.log("Add-Click")

    const order_id = product.order_id
    const product_id = product.product_id

    const payload = {
        product: {
            product_id: product_id
        },
        order: {
            order_id: order_id
        },
    };
    CartAPI.addProduct( order_id, product_id, payload )
    setCount(count + 1)
};

const countCheck = (count) => {
  const prodCount = product.quantity + count
  if (prodCount > 0) {
    return prodCount
  } else {
    return 0
  };
};

const _handleRemoveCart = () => {
    console.log('Remove-Click')
    const order_id = product.order_id
    const product_id = product.product_id
    const payload = {
        product: {
            product_id: product_id
        },
        order: {
            order_id: order_id
        },
    };
    CartAPI.removeProduct( order_id, product_id, payload )
    setCount(count - 1)
};

    return (
      <tr>
        <td className="w-1/6 text-center text-black">
          <p>{countCheck(count)}x</p>
        </td>
        <td className="w-1/6 h-16">
          <div className="lg:table-cell">
            <img src={`http://localhost:3000${product.product.image}`} alt={product.product.product_name} className='h-16'/>
            <img src={`http://localhost:3000${product.product.image}`} alt={product.product.product_name} className='h-16'/>
          </div>
        </td>
        <td className="w-4/6 text-black">
          <Link to={`/product/${product.product.id}`}><h2>{product.product.product_name}</h2></Link>
        </td>
        <td className="w-1/6 text-center text-black">
          <p>${product.product.retail_price}</p>
        </td>
        <td className="w-1/6 text-center text-black">
          <button className="btn btn-success btn-sm w-5" onClick={_handleAddCart}>+</button>
          <button className="btn btn-error btn-sm w-5" onClick={_handleRemoveCart}>-</button>
        </td>
      </tr>
    );
};

export default CartButtonItem;