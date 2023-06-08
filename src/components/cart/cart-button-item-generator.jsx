import React from 'react';
import CartButtonItem from "./cart-button-item";

const CardButtonItemGenerator = ( cartProducts ) => {
    
    const { cart } = cartProducts
    const { products } = cart
    
    return (
        <tbody>
            {products.map((e) => (
                <CartButtonItem product={e}/> 
            ))}        
        </tbody>
    )
}

export default CardButtonItemGenerator