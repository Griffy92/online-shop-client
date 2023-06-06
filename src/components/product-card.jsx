import React from 'react';
import { Link } from 'gatsby';

const ProductCard = ( { product } ) => {

    console.log(product)

    const { item, description, bgcol, url } = product

    console.log(item)

    return (
        <div className='overflow-hidden p-4'>
            <div className="card card-compact bg-white shadow-xl ">
                <figure><img src={url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-black">
                    {item}
                    </h2>
                    <p className="text-black">{description}</p>
                    <div className="card-actions justify-end">
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;