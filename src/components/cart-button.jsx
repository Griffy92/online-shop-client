import React from 'react';
import { Link } from 'gatsby';
import { Popover } from '@headlessui/react'
import CartButtonItem from './cart-button-item';

const CartButton = () => {
    return (
        <Popover>
            <Popover.Button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"> 
                    <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M1 1.75A.75.75 0 011.75 1h1.628a1.75 1.75 0 011.734 1.51L5.18 3a65.25 65.25 0 0113.36 1.412.75.75 0 01.58.875 48.645 48.645 0 01-1.618 6.2.75.75 0 01-.712.513H6a2.503 2.503 0 00-2.292 1.5H17.25a.75.75 0 010 1.5H2.76a.75.75 0 01-.748-.807 4.002 4.002 0 012.716-3.486L3.626 2.716a.25.25 0 00-.248-.216H1.75A.75.75 0 011 1.75zM6 17.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" /></svg>
                    <span className="sr-only">View Cart</span>
            </Popover.Button>
            <Popover.Panel className="absolute z-10 bg-gray-50 lg:w-1/3 -translate-x-full md:w-1/2 sm:w-full overscroll-none">
                <div className="p-2">
                    <table className="table-fixed w-full">
                        <tbody>
                            <CartButtonItem />
                        </tbody>
                    </table>
                </div>
                <hr />
                <button>Checkout</button>
            </Popover.Panel>
      </Popover>
    );
};

export default CartButton;