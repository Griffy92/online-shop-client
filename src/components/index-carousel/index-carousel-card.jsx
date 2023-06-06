import React from 'react';
import { Link } from 'gatsby';

const IndexCarouselCard = (props) => {

    return (
        <div className="card bg-white shadow-xl">
            <figure><img src={props.props.url} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-black">
                {props.props.item}
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <p className="text-black">{props.props.description}</p>
                <div className="card-actions justify-end">
                <div className="badge badge-outline text-black">{props.props.bgcol}</div> 
                </div>
            </div>
        </div>
    );
};

export default IndexCarouselCard;