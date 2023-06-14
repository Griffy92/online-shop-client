import React, { useState, useEffect, useContext, useRef, useMemo} from 'react';
import axios from 'axios';
import CardButtonItemGenerator from './cart-button-item-generator';
import { Popover } from '@headlessui/react';
import { UserContext } from '../../providers/UserProvider';
import { CartAPI } from '../../services/cart';
import { guestAPI } from '../../services/guests';
import { UserAPI } from '../../services/users';
import CartPrice from './price-calc';

const CartButton = () => {
  const [message, setMessage] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const { user, setUser, guestStatus, cartStatus } = useContext(UserContext);
  const token = localStorage.getItem('token');
  const cartButtonRef = useRef(null); 

  useEffect(() => {
      // Check to see if this is a redirect back from Checkout
      const query = new URLSearchParams(window.location.search);
  
      if (query.get("canceled")) {
      setMessage("Order canceled -- continue to shop around and checkout when you're ready.");
      };
  }, []);

  // Saves result of .find() into memory. Used for performance as made updating cart feel more responsive.
  const orderMemo = useMemo(() => {
    if ((Object.entries(user).length) > 0){
      if (user.orders.length > 0) {
        return user.orders.find((e) => e.orderstatus === "active")
      };
    };
  }, [user]);

	const createStripePayload = () => {
		const payload = {
			lineItem: [],
			metadata: {
				order_id: user ? orderMemo.id : 'None'
			}
		};
		
		cartItems.forEach( (item) => {
			payload.lineItem.push({
				name: item.product.product_name,
				price: item.product.retail_price,
				quantity: item.quantity,
				image: `${ 'http://localhost:3000/' + item.product.image }`,
			});
		});

		return payload;
	};
  
	// Redirect buyer to stripe checkout
	const _handleCheckout = () => {
		const payload = createStripePayload();
		if ( payload.lineItem.length === 0 ) return; // exit if cart is empty

		// initiates a checkout session and gets back a redirect to stripe checkout
        axios.post('http://localhost:3000/checkouts', payload).then( (response) => {
            const tempLink = document.createElement('a');
            tempLink.setAttribute('href', response.data.session )
            tempLink.click();
            tempLink.remove();
        });
    };

  // This handles the loading of the cart when the cart button is clicked
	const _handleClick = () => {

		// if User
		if (!guestStatus) {

      // CartItems is sent to components below
			CartAPI.getOrder(orderMemo.id).then((response) => {
				setCartItems(response.data.cart_items);
			});
		};

		// if Guest
		if (guestStatus) {
		setCartItems(guestAPI.getGuestCart().order.cart_items);
		};
	};

  const _handleBorder = (e) => {
    e.target.style.borderColor = "white";
  };

  const _handleResetBorder = (e) => {
    e.target.style.borderColor = "transparent";
  };

  // CartStatus state is changed when product is added or removed from cart
  // That triggers this useEffect to update the CartItems object, which is a prop passed down to the children components
  // That in turn triggers the re-rendering of the dropdown
  useEffect(() => {
    if (guestStatus) {
      if (guestAPI.getGuestCart() !== null) {
        let cartState = guestAPI.getGuestCart().order.cart_items;
        setCartItems(cartState);
      }
    };

    if (!guestStatus) {
			CartAPI.getOrder(orderMemo.id).then((response) => {
				setCartItems(response.data.cart_items)
			});
    };
  }, [cartStatus]);

  return (
    <Popover>
      <Popover.Button 
        ref={cartButtonRef} 
        type="button" 
        onClick={_handleClick} 
        className="text-white bg-white-700 hover:bg-white hover:bg-opacity-20 hover:border-white-700 hover:border-yellow rounded-lg p-2.5 text-center inline-flex items-center mr-2 shadow border-gray-400 hover:border-white transition duration-200 transition-bg" 
        style={{ border: '1px solid transparent' }}
        onMouseEnter={ _handleBorder }
        onMouseLeave={ _handleResetBorder }
        >
          <svg 
            aria-hidden="true" 
            className="w-5 h-5" 
            fill="currentColor" 
            viewBox="0 0 20 20" 
            xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
          <span className="sr-only">View Cart</span>
      </Popover.Button>

      <Popover.Panel className="absolute z-10 bg-gray-50 lg:w-1/3 -translate-x-full md:w-1/2 sm:w-full overscroll-none px-2 pt-2">
          <div className="p-2">
              <table className="table-fixed w-full">
              {cartItems.length > 0 ? (
                <CardButtonItemGenerator cartItems={cartItems} />
                ) : (
                <tbody>
                  <tr>
                    <td>Cart is empty</td>
                  </tr>
                </tbody>
                )}
              </table>
            </div>
          <hr />
            {cartItems.length > 0 ? (
              <div className="p-2">
                <table className="table-fixed w-full">
                  <CartPrice cartItems={cartItems}/>
                </table>
              </div>
            ) : (
            <div></div>
            )}
            <div>
              <hr />
                <div className='flex justify-center p-2'>
                  <button onClick={ _handleCheckout } className="btn btn-primary btn-wide btn-md">Checkout</button>
                </div>
            </div>
          {message}
      </Popover.Panel>
    </Popover>
  );


};

export default CartButton;