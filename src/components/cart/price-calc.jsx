import React from 'react';

const CartPrice = ({ cartItems }) => {

    // Gets price of all items in cart
    const getPrice = (cartItems) => {
        let runningTotal = 0;
        cartItems.forEach(element => {
            runningTotal = runningTotal + (element.quantity * element.product.retail_price)
        });
        return runningTotal.toFixed(2); // Round to 2 decimal places
    };

    // Gets quantity of all items in cart
    const getCount = (cartItems) => {
        let runningTotal = 0;
        cartItems.forEach(element => {
            runningTotal = runningTotal + element.quantity
        });
        return runningTotal.toFixed(0)
    };

    // Re-render is triggered in parent component by change in CartItems
    return (  
        <tbody>
            <tr >
                <td className="w-2/6 text-center text-black">
                    <p>Subtotal</p> 
                </td>
                <td className="w-4/6 text-center text-black">
                 <p>{getCount(cartItems)} item{getCount(cartItems) > 1 ? (<span>s</span>):(<span></span>)}</p> {/* ternary used to make item(s) display correctly */}
                </td>
                <td className="w-1/6 text-center text-black">
                    <p>${Intl.NumberFormat("en-US").format(getPrice(cartItems))}</p>
                </td>
                <td className="w-1/6 text-center text-black">
                </td>
            </tr>
    </tbody>
    )
}

export default CartPrice;      
