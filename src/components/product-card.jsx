import React from 'react';
import { Link } from 'gatsby';

const ProductCard = (props) => {

    console.log(props)

    // const { item, description, bgcol, url } = props;


    // let colstring = "card w-96 bg-" + props.props.bgcol + "-900 shadow-xl"
    // console.log(colstring)

    return (
        <div className="card w-96 bg-white shadow-xl">
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

export default ProductCard;