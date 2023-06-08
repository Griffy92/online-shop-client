import React from 'react';
import { Link } from 'gatsby';
import ProductPage from '../pages/product';

const ProductCard = ( { product } ) => {

    const productObj = product

    const { product_name, product_description, image, url, id } = product

    return (
        <div className='overflow-hidden'>
        <div className="card card-compact bg-white shadow-xl h-64">
            <figure><img src={image} alt="Shoes"/></figure>
            <div className="card-body">
                <h2 className="card-title text-black">
                    <Link to={`../product/${product.id}`}>{product.product_name}</Link>
                </h2>
                <div className="card-actions justify-end">
                </div>
            </div>
        </div>
        </div>
    );
};

export default ProductCard;

