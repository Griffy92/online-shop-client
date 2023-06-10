import React from "react";
import { useContext } from 'react';
import { UserContext } from '../providers/UserProvider'
import { CartAPI } from "../services/cart";


const ProductControls = ({product}) => {
    const { user } = useContext(UserContext);

    const checkActiveOrder = () => {
        const actOrder = (user.orders.find((e) => e.orderstatus === "active" ))
        if (actOrder) {
            return actOrder
        };
    };

    const _handleAddCart = () => {
        console.log("Add-Click")
        const order_id = checkActiveOrder().id
        const product_id = product.id
        const payload = {
            product: {
                product_id: product.id
            },
            order: {
                order_id: order_id
            },
        };
        CartAPI.addProduct( order_id, product_id, payload )
    };

    const _handleRemoveCart = () => {
        console.log('Remove-Click')
        const order_id = checkActiveOrder().id
        const product_id = product.id
        const payload = {
            product: {
                product_id: product.id
            },
            order: {
                order_id: order_id
            },
        };
        CartAPI.removeProduct( order_id, product_id, payload )
    };

    return (
        <div className="w-full mx-auto" >
            <button className="btn btn-success" onClick={_handleAddCart}>Add to Cart</button>
            <button className="btn btn-error" onClick={_handleRemoveCart}>Remove From Cart</button>
        </div>
    )
};

export default ProductControls;