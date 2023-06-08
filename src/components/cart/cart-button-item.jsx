import React from 'react';
import { Link } from 'gatsby';

const CartButtonItem = ( { product } ) => {
  
  const { item, description, bgcol, url } = product

    return (
      <tr>
        <td className="w-1/6">
          <div className="lg:table-cell">
            <img src={url}/>  
          </div>
        </td>
        <td className="w-4/6 text-black"><h2>{item}</h2>{description}</td>
        <td className="w-1/6 text-center text-black"><p>$30.50</p></td>
      </tr>
    );
};

export default CartButtonItem;