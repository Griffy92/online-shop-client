import React from "react";
import { useContext } from 'react';
import { UserContext } from '../providers/UserProvider'
import { CartAPI } from "../services/cart";
import { UserAPI } from "../services/users";
import { guestAPI } from "../services/guests";


const ProductControls = ({product}) => {
    const { user, setUser, guestStatus } = useContext(UserContext);
    const token = localStorage.getItem('token');

    const getActiveOrder = () => {
        if (!guestStatus) {
            const actOrder = (user.orders.find((e) => e.orderstatus === "active" ))
            if (actOrder) {
                return actOrder
            }
        }
    };

    const checkActiveOrder = () => {
        if (guestStatus) {
            return guestAPI.getGuestCart()
        }
        if (!guestStatus) {
            if (user.orders.find((e) => e.orderstatus === "active" ) == null) {
                console.log('making new order for user id: ' + user.id)
                const user_id = user.id
                CartAPI.newOrder( user_id )
            }
        }
    };

    const _handleAddCart = () => {
        console.log("Add-Click")

        if (!guestStatus) {
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

        if (guestStatus) {
            const sessionObj = guestAPI.getGuestCart()
            const guestCart = sessionObj.order.cart_items

            if (guestCart.length === 0) {
                guestCart.push({quantity: 1, product: product})
                guestAPI.setGuestCart(sessionObj)
                return
            } if ((guestCart.length !== 0) && (!guestCart.find(i => i.product.id === product.id))) {
                guestCart.push({quantity: 1, product: product})
                sessionObj.order.cart_items = guestCart
                guestAPI.setGuestCart(sessionObj)

                return
            } else {
                guestCart.map(function(e){
                    if (e.product.id === product.id){
                        console.log(e.quantity)
                        e.quantity = e.quantity + 1
                    }})
                sessionObj.order.cart_items = guestCart
                guestAPI.setGuestCart(sessionObj)
                return
            }
        }
    };

    // const _handleRemoveCart = () => {
    //     console.log('Remove-Click')
    //     const sessionObj = guestAPI.getGuestCart()
    //     const guestCart = sessionObj.order.cart_items

    //     if (!guestStatus) {
    //         const order_id = getActiveOrder().id
    //         const product_id = product.id
    //         const payload = {
    //             product: {
    //                 product_id: product.id
    //             },
    //             order: {
    //                 order_id: order_id
    //             },
    //         };
    //         CartAPI.removeProduct( order_id, product_id, payload )
    //         UserAPI.getUser(token).then((response) => {
    //             setUser(response.data)})
    //     };

    //     if (guestStatus) {
    //         if (!guestCart.find((e) => e.product.id === product.id)) {
    //             console.log("Not in Cart")
    //             return
    //         } if (guestCart.find((e) => e.product.id === product.id).quantity > 1) {
    //             console.log("option 1")

    //             guestCart.map(function(e){
    //                 if (e.product.id === product.id){
    //                     console.log(e.quantity)
    //                     e.quantity = e.quantity - 1
    //                 }})
    //             sessionObj.order.cart_items = guestCart
    //             guestAPI.setGuestCart(sessionObj)
    //             return
    //         } if (guestCart.find((e) => e.product.id === product.id).quantity <= 1) {
    //             console.log("option 2")
    //             guestCart.splice(guestCart.indexOf(guestCart.find((e) => e.product.id === product.id)))              
    //             sessionObj.order.cart_items = guestCart
    //             guestAPI.setGuestCart(sessionObj)
    //             return
    //         }
    //     }
    // };

    return (
        <div className="w-full mx-auto">
            <button 
                className="font-poppinsSemi font-semi-bold py-4 px-8 text-white font-bold text-sm rounded-lg outline-white hover:text-gray-950 w-full bg-sky-400 hover:bg-sky-500 duration-500" 
                style={{
                    // border: `2px solid #A8D8FA`, 
                    color: `white`,
                    // backgroundColor: `#A8D8FA`
                }} 
                onClick={_handleAddCart}
                >Add to Cart</button>
            {/* <button className="btn btn-error" onClick={_handleRemoveCart}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
            </button> */}
        </div>
    )
};

export default ProductControls;