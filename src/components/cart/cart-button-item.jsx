import { Link } from 'gatsby';
import React from 'react';
import { UserContext } from '../../providers/UserProvider';
import { CartAPI } from "../../services/cart";
import { guestAPI } from "../../services/guests";
import { useState, useContext } from 'react';
import CartPrice from './price-calc';

const CartButtonItem = ( props ) => {
  const { guestStatus, cartStatus, setCartStatus } = useContext(UserContext);
  const { product } = props
  const [count, setCount] = useState(0)

  const _handleAddCart = () => {
    console.log("Add-Click")

    if (!guestStatus) {
      const order_id = product.order_id
      const product_id = product.product_id

      const payload = {
          product: {
              product_id: product_id
          },
          order: {
              order_id: order_id
          },
      };
      CartAPI.addProduct( order_id, product_id, payload )
      setCount(count + 1)
      setCartStatus(Math.random)
    };

    if (guestStatus) {
      const sessionObj = guestAPI.getGuestCart()
      const guestCart = sessionObj.order.cart_items
      
      guestCart.map(function(e){
        if (e.product.id === product.product.id){
            e.quantity = e.quantity + 1
        }})
      sessionObj.order.cart_items = guestCart
      guestAPI.setGuestCart(sessionObj)
      setCount(count + 1);
      setCartStatus(Math.random)
      return
    };
  };

  const countCheck = (count) => {
    const prodCount = product.quantity + count
    if (prodCount > 0) {
      return prodCount
    } else {
      return 0
    };
  };

  const _handleRemoveCart = () => {
    if (!guestStatus) {
      console.log('Remove-Click')
      const order_id = product.order_id
      const product_id = product.product_id
      const payload = {
          product: {
              product_id: product_id
          },
          order: {
              order_id: order_id
          },
      };
      CartAPI.removeProduct( order_id, product_id, payload )
      setCount(count - 1)
      setCartStatus(Math.random)
    }

    if (guestStatus) {
      const sessionObj = guestAPI.getGuestCart()
      const guestCart = sessionObj.order.cart_items
      
      if (product.quantity < 2) {
        console.log("not enough")
        guestCart.splice(guestCart.indexOf(guestCart.find((e) => e.product.id === product.id)))              
        sessionObj.order.cart_items = guestCart
        guestAPI.setGuestCart(sessionObj)
        setCount(count - 1)
        setCartStatus(Math.random)

      } else {
        guestCart.map(function(e){
          if (e.product.id === product.product.id){
              e.quantity = e.quantity - 1
          }})
        sessionObj.order.cart_items = guestCart
        guestAPI.setGuestCart(sessionObj)
        setCount(count - 1)
        setCartStatus(Math.random)
        return
      }
    }
  };

    return (
      <tr>
        <td className="w-1/6 text-center text-black">
          <p>{countCheck(count)}x</p>
        </td>
        <td className="w-1/6 h-16">
          <div className="lg:table-cell">
            <img src={`http://localhost:3000${product.product.image}`} alt={product.product.product_name} className='h-16'/>
          </div>
        </td>
        <td className="w-4/6 text-black">
          <Link to={`/product/${product.product.id}`}><h2>{product.product.product_name}</h2></Link>
        </td>
        <td className="w-1/6 text-center">
          <p className='text-black'>${product.product.retail_price}</p><span>(each)</span>
        </td>
        <td className="w-1/6 text-center text-black">
          <button className="btn btn-success btn-sm w-5" onClick={_handleAddCart}>+</button>
          <button className="btn btn-error btn-sm w-5" onClick={_handleRemoveCart}>-</button>
        </td>
      </tr>
    )
};

export default CartButtonItem;