import React from 'react';
import CartButtonItem from "./cart-button-item";

const CardButtonItemGenerator = ( cartProducts ) => {
    
    const { cart } = cartProducts
    
    return (
        <tbody>
            {cart.map((e) => (
                <CartButtonItem product={e} key={Math.random()}/> 
            ))}        
        </tbody>
    )
}

export default CardButtonItemGenerator