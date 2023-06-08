import React from 'react';

const CartButtonItem = ( { product } ) => {

  console.log(product)
  
  const { product_name, retail_price } = product

    return (
      <tr>
        <td className="w-1/6">
          <div className="lg:table-cell">
            picture 
          </div>
        </td>
        <td className="w-4/6 text-black"><h2>{product_name}</h2></td>
        <td className="w-1/6 text-center text-black"><p>{retail_price}</p></td>
      </tr>
    );
};

export default CartButtonItem;