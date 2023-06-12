import React, { useEffect } from "react";
import { useContext, useState } from 'react';
import { UserContext } from '../providers/UserProvider'
import { CartAPI } from "./cart";
import { UserAPI } from "./users";
import { guestAPI } from "./guests";

const token = localStorage.getItem('token');

const getActiveOrder = (user) => {
    const actOrder = (user.orders.find((e) => e.orderstatus === "active" ))
    if (actOrder) {
        return actOrder
    }
};

const checkActiveOrder = (user) => {
    if (user.orders.find((e) => e.orderstatus === "active" ) == null) {
        console.log('makeing new order for user id: ' + user.id)
        const user_id = user.id
        CartAPI.newOrder( user_id )
    }
};

export const CartControls = {
    addCart: ({product, user}) => {
        checkActiveOrder(user)
        const order_id = getActiveOrder(user).id
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
    },

    addCartGuest: ({product}) => {
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
    },

    removeCart: ({product, user}) => {
        checkActiveOrder(user)
        const order_id = getActiveOrder(user).id
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
    },

    removeGuestCart: ({product}) => {
        const sessionObj = guestAPI.getGuestCart()
        const guestCart = sessionObj.order.cart_items

        if (!guestCart.find((e) => e.product.id === product.id)) {
            console.log("Not in Cart")
            return
        } if (guestCart.find((e) => e.product.id === product.id).quantity > 1) {
            console.log("option 1")

            guestCart.map(function(e){
                if (e.product.id === product.id){
                    console.log(e.quantity)
                    e.quantity = e.quantity - 1
                }})
            sessionObj.order.cart_items = guestCart
            guestAPI.setGuestCart(sessionObj)
            return
        } if (guestCart.find((e) => e.product.id === product.id).quantity <= 1) {
            console.log("option 2")
            guestCart.splice(guestCart.indexOf(guestCart.find((e) => e.product.id === product.id)))              
            sessionObj.order.cart_items = guestCart
            guestAPI.setGuestCart(sessionObj)
            return
        }
        
    },
}