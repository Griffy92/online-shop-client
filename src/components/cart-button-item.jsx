import React from 'react';
import { Link } from 'gatsby';
import { Popover } from '@headlessui/react'

const CartButtonItem = () => {
    return (
      <tr>
        <td class="w-1/4"><img src="http://placekitten.com/75/75"/></td>
        <td class="w-1/4"><h2>Item</h2>Description</td>
        <td class="w-1/4"><p>$30.50</p></td>
      </tr>
    );
};

export default CartButtonItem;