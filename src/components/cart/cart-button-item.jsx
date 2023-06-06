import React from 'react';
import { Link } from 'gatsby';
import { Popover } from '@headlessui/react'

const CartButtonItem = () => {
    return (
      <tr>
        <td className="w-1/4">
          <div className="lg:table-cell">
            <img src="http://placekitten.com/75/75"/>  
          </div>
        </td>
        <td className="w-1/4"><h2>Item</h2>Description</td>
        <td className="w-1/4 text-center"><p>$30.50</p></td>
      </tr>
    );
};

export default CartButtonItem;