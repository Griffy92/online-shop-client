import React from 'react';
import CartButtonItem from "./cart-button-item";

// this components takes the full array of cartItems, passed to it and generates a table row for each item

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