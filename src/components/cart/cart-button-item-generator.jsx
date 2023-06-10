import React from 'react';
import CartButtonItem from "./cart-button-item";

const CardButtonItemGenerator = ( cartProducts ) => {
    
    const { cart } = cartProducts

    console.log('this is the current cart array')
    console.log(cart)

    return (
        <tbody>
            {cart.map((e) => (
                <CartButtonItem product={e} key={Math.random()}/> 
            ))}        
        </tbody>
    )
}

export default CardButtonItemGenerator