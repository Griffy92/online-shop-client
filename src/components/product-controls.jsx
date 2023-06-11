import React from "react";
import { useContext } from 'react';
import { UserContext } from '../providers/UserProvider'
import { CartAPI } from "../services/cart";
import { UserAPI } from "../services/users";


const ProductControls = ({product}) => {
    const { user, setUser } = useContext(UserContext);
    const token = localStorage.getItem('token');


    const getActiveOrder = () => {
        const actOrder = (user.orders.find((e) => e.orderstatus === "active" ))

        if (actOrder ) {
            return actOrder
        }
    };

    const checkActiveOrder = () => {
        if (user.orders.find((e) => e.orderstatus === "active" ) == null) {
            console.log('makeing new order for ' + user.id)
            const user_id = user.id
            CartAPI.newOrder( user_id )
        } 
    };

    const _handleAddCart = () => {
        console.log("Add-Click")
        checkActiveOrder()

        const order_id = getActiveOrder().id
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
        UserAPI.getUser(token).then((response) => {
            setUser(response.data)})
    };

    const _handleRemoveCart = () => {
        console.log('Remove-Click')
        const order_id = getActiveOrder().id
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
        UserAPI.getUser(token).then((response) => {
            setUser(response.data)})
    };

    return (
        <div className="w-full mx-auto">
            <button className="btn btn-success" onClick={_handleAddCart}>Add to Cart</button>
            <button className="btn btn-error" onClick={_handleRemoveCart}>Remove From Cart</button>
        </div>
    )
};

export default ProductControls;