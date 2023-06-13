import React from 'react';
import CartButtonItem from "./cart-button-item";

const CardButtonItemGenerator = ( {cartItems} ) => {
    
    return (
        <tbody>
            {cartItems.map((e) => (
                <CartButtonItem product={e} key={Math.random()}/> 
            ))}        
        </tbody>
    );
};

export default CardButtonItemGenerator;