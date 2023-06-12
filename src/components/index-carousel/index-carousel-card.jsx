import React from 'react';
import { Link } from 'gatsby';

const IndexCarouselCard = ({props}) => {

    return (
        <div className="card bg-white shadow-x h-1/2 min-h-96">
            <Link to={`/product/${props.id}`} >
            <figure><img src={ "http://localhost:3000" + props.image } alt={ props.product_name } className='mx-auto max-h-80'/></figure>
            <div className="card-body">
            <div className="badge badge-secondary">NEW</div>
                <div className='h-12'>
                <h2 className="card-title text-black text-ellipsis overflow-hidden">
                {props.product_name}
                </h2></div>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline text-black">{props.product_category}</div> 
                </div>
                <p>${props.retail_price}</p>
            </div>
            </ Link>
        </div>
    );
};

export default IndexCarouselCard;