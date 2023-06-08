import React from 'react';
import { Link } from 'gatsby';
import CartButton from './cart/cart-button';
import SearchButton from './search-button';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Navbar = ( props ) => {

    const { user, handleSignOut } = props;
    console.log(user)

    return (
        <>
        {/* strip on top of website */}
        <div className="header-banner" 
            style={{
                backgroundColor: `#26d36d`,
                padding: `5px`,
                textAlign: `center`,
                color: `white`,
                fontFamily: `sans-serif`,
                }}>Free shipping for orders over $50! 🐶🐱🐭🐦🐹 </div>

            <nav className="flex items-center justify-between flex-wrap" 
                style={{
                    backgroundColor: `white`, 
                    boxShadow: '0 5px 10px rgba(0,0,0,0.1)',
                    }}>

                <div className="flex items-center flex-shrink-0 text-black mr-6 p-4">
                    <button>
                        <span className="font-semibold text-xl tracking-tight">
                            <Link to="/">Pocket Cart</Link>
                        </span>
                    </button>
                </div>
                <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                    <div className="text-sm lg:flex-grow">
                    <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" to="/products">Products</Link>
                    <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" to="/dog-products">Dog</Link>
                    <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" to="/cat-products">Cat</Link>
                    <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" to="/reptile-products">Reptile</Link>
                    <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" to="/bird-products">Bird</Link>
                    <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4" to="/smallpet-products">Small Pet</Link>

                    <a className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
                        Blog
                    </a>
                    { user.admin && 
                        <Link className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white" to="/admin">Admin</Link>
                    }
                </div>
            </div>

            <SearchButton />
            <CartButton user={user} />

            { user ? (
                <>
                    <button onClick={ handleSignOut } title="Sign out" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z" clipRule="evenodd" />
                        </svg>
                        <span className="sr-only">Sign out</span>
                    </button>
                    <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <Link to="/account">
                        <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <span className="sr-only">View Profile</span>
                        </Link>
                        <span className="sr-only">View Profile</span>
                    </button>
                </>
            ) : (
                <>
                    <button type="button" title="Sign in" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <Link to="/signin">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path fillRule="evenodd" d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z" clipRule="evenodd" />
                            <path fillRule="evenodd" d="M6 10a.75.75 0 01.75-.75h9.546l-1.048-.943a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 11-1.004-1.114l1.048-.943H6.75A.75.75 0 016 10z" clipRule="evenodd" />
                        </svg>
                        </Link>
                        <span className="sr-only">Sign in</span>
                    </button>
                    <button type="button" title="Sign up" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <Link to="/signup">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                            <path d="M11 5a3 3 0 11-6 0 3 3 0 016 0zM2.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 018 18a9.953 9.953 0 01-5.385-1.572zM16.25 5.75a.75.75 0 00-1.5 0v2h-2a.75.75 0 000 1.5h2v2a.75.75 0 001.5 0v-2h2a.75.75 0 000-1.5h-2v-2z" />
                        </svg>
                        </Link>
                        <span className="sr-only">Sign up</span>
                    </button>
                </> 
            )}
            <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg aria-hidden="true" fill="none" className="w-5 h-5" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span className="sr-only">Menu</span>
            </button>

            </nav>
        </>
    );
};

export default Navbar;

