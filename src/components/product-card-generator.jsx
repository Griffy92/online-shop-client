import React from 'react';
import { Link } from 'gatsby';
import ProductCard from './product-card';

const ProductCardGenerator = ( { productArray } ) => {

    console.log(productArray)

    return (
        <div>
            <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2'>
                {productArray.map((e) => (
                    <ProductCard product={e}/> 
                ))}    
            </div>
        </div>
    );
};

export default ProductCardGenerator;