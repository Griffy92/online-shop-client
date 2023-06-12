import React from 'react';

const CartPrice = ({ cartItems }) => {

    const getPrice = (cartItems) => {
        let runningTotal = 0;
        cartItems.forEach(element => {
            runningTotal = runningTotal + (element.quantity * element.product.retail_price)
        });
        return runningTotal.toFixed(2); // Round to 2 decimal places
    };

    const getCount = (cartItems) => {
        let runningTotal = 0;
        cartItems.forEach(element => {
            runningTotal = runningTotal + element.quantity
        });
        return runningTotal
    };


    // this does not re-render yet
    return (  
        <tbody>
            <tr >
                <td className="w-2/6 text-center text-black">
                    <p>Subtotal</p>
                </td>
                <td className="w-4/6 text-black text-center">
                <p>{getCount(cartItems)} item{getCount(cartItems) > 1 ? (<span>s</span>):(<span></span>)}</p>
                </td>
                <td className="w-1/6 text-center text-black">
                    <p>${getPrice(cartItems)}</p>
                </td>
                <td className="w-1/6 text-center">
                </td>
            </tr>
    </tbody>
    )
}

export default CartPrice;      
