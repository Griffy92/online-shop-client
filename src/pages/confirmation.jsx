import React from "react";
import { useEffect } from 'react';

const Confirmation = () => {

    useEffect( () => {
        sessionStorage.clear();
    }, []);
    
    return (
        <div className="ml-64">
            <h1 className="mt-10 mb-5 text-3xl font-extrabold font-poppins text-black">Successful checkout</h1>
            
        </div>
    )
}

export default Confirmation;