import React from "react";
import { useEffect } from 'react';

const Confirmation = () => {

    useEffect( () => {
        sessionStorage.clear();
    }, []);
    
    return (
        <h1>Successful checkout</h1>
    )
}

export default Confirmation;