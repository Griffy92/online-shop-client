import React, { useContext } from 'react';
import { Link } from 'gatsby';
import { UserContext } from '../../providers/UserProvider';
import { CartAPI } from "../../services/cart";
import { guestAPI } from "../../services/guests";

// this component handles the logic for adding / removing items from cart as well as rendering the individual table rows
const CartButtonItem = ( props ) => {
	const { guestStatus, setCartStatus } = useContext(UserContext);
	const { product } = props;

  	const _handleAddCart = () => {
		if (!guestStatus) {
			const order_id = product.order_id;
			const product_id = product.product_id;
			const payload = {
				product: {
					product_id: product_id
				},
				order: {
					order_id: order_id
				},
			};
			// Setting cartState triggers re-render of cart dropdown / popover. Dependant on adding to cart to enforce order
			// Without '.then()' cart dropdown would occassionally re-render before AddProduct request had been finished 
			CartAPI.addProduct(order_id, product_id, payload).then((e) => {
			setCartStatus(e.status * Date.now())});
		};
		if (guestStatus) {
			const sessionObj = guestAPI.getGuestCart();
			const guestCart = sessionObj.order.cart_items; 
		
			guestCart.map(function(e){
				if (e.product.id === product.product.id){
					e.quantity = e.quantity + 1
				};
			});
		sessionObj.order.cart_items = guestCart;
		guestAPI.setGuestCart(sessionObj); // This updates SessionStorage
		setCartStatus(Math.random);
		return;
		};
	};

	// Functionally very similar to _handleAddCart
	const _handleRemoveCart = () => {
		if (!guestStatus) {
			const order_id = product.order_id;
			const product_id = product.product_id;
			const payload = {
				product: {
					product_id: product_id
				},
				order: {
					order_id: order_id
				},
			};
		CartAPI.removeProduct(order_id, product_id, payload).then((e) => {
			setCartStatus(e.status * Date.now())});
		};

		if (guestStatus) {
			const sessionObj = guestAPI.getGuestCart();
			const guestCart = sessionObj.order.cart_items;
			
			if (product.quantity < 2) {
				guestCart.splice(guestCart.indexOf(guestCart.find((e) => e.product.id === product.id)));              
				sessionObj.order.cart_items = guestCart;
				guestAPI.setGuestCart(sessionObj);
				setCartStatus(Math.random);
			} else {
				guestCart.map(function(e){
					if (e.product.id === product.product.id){
						e.quantity = e.quantity - 1;
					}
				});
				sessionObj.order.cart_items = guestCart;
				guestAPI.setGuestCart(sessionObj);
				setCartStatus(Math.random);
				return
			};
		};
	};

  return (
	<tr >
		<td className="w-1/6 text-center text-black">
			<p>{product.quantity}x</p>
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
			<button className="btn btn-success btn-sm w-5 text-white font-bold rounded hover:text-gray-950 sameasbg-color no-animation" onClick={_handleAddCart}>+</button>
			<button className="btn btn-error btn-sm w-5 h-5 text-white font-bold rounded hover:text-gray-950 no-animation" onClick={_handleRemoveCart}>-</button>
		</td>
	</tr>
  )
};

export default CartButtonItem;