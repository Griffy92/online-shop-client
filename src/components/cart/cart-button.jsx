import React from 'react';
import { useState, useEffect } from 'react';
import { Popover } from '@headlessui/react'
import axios from 'axios'
import CardButtonItemGenerator from './cart-button-item-generator'

const CartButton = ({user}) => {
    const [message, setMessage] = useState('')
    const [cart, setCart] = useState(null)
    // const cart = null

    useEffect(() => {
        // Check to see if this is a redirect back from Checkout
        const query = new URLSearchParams(window.location.search);
    
        if (query.get("success")) {
          setMessage("Order placed! You will receive an email confirmation.");
        }
    
        if (query.get("canceled")) {
          setMessage(
            "Order canceled -- continue to shop around and checkout when you're ready."
          );
        }
      }, []);

    const _handleCheckout = () => {
        axios.post('http://localhost:3000/checkouts').then( (response) => {
            console.log(response.data);
            const tempLink = document.createElement('a');
            tempLink.setAttribute('href', response.data.session )
            tempLink.click();
            tempLink.remove();
        })
    }

    const _handleClick = () => {
      console.log('click')
      console.log(user)
      const actOrder = (user.orders.find((e) => e.orderstatus == "active" ))
      if (actOrder) {
        console.log(actOrder)
        setCart(actOrder.products)
      } else (console.log("No Active Orders!"))
    }

    return (
        <Popover>
            <Popover.Button type="button" onClick={_handleClick} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> 
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" /></svg>
                    <span className="sr-only">View Cart</span>
            </Popover.Button>
            <Popover.Panel className="absolute z-10 bg-gray-50 lg:w-1/3 -translate-x-full md:w-1/2 sm:w-full overscroll-none px-2 pt-2">
                <div className="p-2">
                    <table className="table-fixed w-full">
                    {cart !== null ? (
                      <CardButtonItemGenerator cart={cart}/>
                      ) : (
                      <tbody>
                        <tr>
                          <td>Loading Content...</td>
                        </tr>
                      </tbody>
                      )}
                    </table>
                </div>
                <hr />
                <div className='flex justify-center'>
                    <button onClick={ _handleCheckout } className="btn btn-primary btn-wide btn-md">Checkout</button>
                </div>
                {message}
            </Popover.Panel>
      </Popover>
    );
};

export default CartButton;