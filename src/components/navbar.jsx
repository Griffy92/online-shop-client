import React, { useState } from 'react';
import { Link, useLocation } from 'gatsby';
import CartButton from './cart/cart-button';
import SearchButton from './search-button';
import logo from '../images/Pocket-Cart-Logo.svg';
import { guestAPI } from '../services/guests';

const Navbar = ( props ) => {
    const [isExpanded, toggleExpansion] = useState(false);

    const { user, handleSignOut } = props;

    if (user === '') {
        if (sessionStorage.getItem("guestCart") == null) {
            console.log('setting session storage cart')
            const defaultCart = guestAPI.defaultCart()
            guestAPI.setGuestCart(defaultCart)
        } else {
            console.log('found Session Storage Cart')
        }
    };

    const _handleBorder = (e) => {
        e.target.style.borderColor = "white";
    };

    const _handleResetBorder = (e) => {
        e.target.style.borderColor = "transparent";
    };

    return (
        <>
        {/* strip on top of website */}
        {/* <div className="header-banner" 
            style={{
                backgroundColor: `#26d36d`,
                padding: `5px`,
                textAlign: `center`,
                color: `white`,
                fontFamily: `sans-serif`,
                }}>Free shipping for orders over $50! 🐶🐱🐭🐦🐹 </div> */}
            {/* nav background color and drop shadow effect */}

            {/* Handles margin-bottom of sticky nav bar  */}


            
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-11"></div>

            {/* Nav Bar */}

                

            <nav 
            
                className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 shadow-lg" 
                style={{backgroundColor: `#01A473`}}>
                <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <Link to="/" className="flex items-center">
                        <img src={ logo } className="h-7 mr-1" alt="Pocket Cart Logo"/>
                        {/* <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span> */}
                    </Link>
                
                    <div className="flex md:order-2">
                        <div className="flex items-center">
                            <SearchButton  />
                            <CartButton user={user}  />
                        
                            { user ? (
                                <>
                                    <button 
                                        onClick={ handleSignOut } 
                                        title="Sign out" 
                                        type="button" 
                                        className="text-white bg-white-700 hover:bg-white hover:bg-opacity-20 hover:border-white-700 hover:border-yellow rounded-lg p-2.5 text-center inline-flex items-center mr-2 shadow border-gray-400 hover:border-white transition duration-200 transition-bg" 
                                        style={{ border: '1px solid transparent' }}
                                        onMouseEnter={ _handleBorder }
                                        onMouseLeave={ _handleResetBorder }
                                    >
                                        <svg 
                                            aria-hidden="true" 
                                            xmlns="http://www.w3.org/2000/svg" 
                                            viewBox="0 0 20 20" 
                                            fill="currentColor" 
                                            className="w-5 h-5">

                                        <path 
                                            fillRule="evenodd" 
                                            d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z" 
                                            clipRule="evenodd" />

                                        <path 
                                            fillRule="evenodd" 
                                            d="M19 10a.75.75 0 00-.75-.75H8.704l1.048-.943a.75.75 0 10-1.004-1.114l-2.5 2.25a.75.75 0 000 1.114l2.5 2.25a.75.75 0 101.004-1.114l-1.048-.943h9.546A.75.75 0 0019 10z" clipRule="evenodd" />
                                        </svg>
                                        
                                        <span className="sr-only">Sign out</span>
                                    
                                    </button>

                                    <button 
                                        type="button" 
                                        className="text-white bg-white-700 hover:bg-white hover:bg-opacity-20 hover:border-white-700 hover:border-yellow rounded-lg p-2.5 text-center inline-flex items-center mr-2 shadow border-gray-400 hover:border-white transition duration-200 transition-bg" 
                                        style={{ border: '1px solid transparent' }}
                                        onMouseEnter={ _handleBorder }
                                        onMouseLeave={ _handleResetBorder }
                                    >

                                        <Link to="/account">
                                            <svg 
                                                aria-hidden="true" 
                                                className="w-5 h-5" 
                                                fill="none" 
                                                stroke="currentColor" 
                                                strokeWidth={1.5} 
                                                viewBox="0 0 24 24" 
                                                xmlns="http://www.w3.org/2000/svg">

                                                <path 
                                                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                                                    strokeLinecap="round" 
                                                    strokeLinejoin="round" />
                                            </svg>
                                            <span className="sr-only">View Profile</span>
                                        </Link>
                                    </button>
                                </>
                            ) : (
                                <>
                                    <button 
                                        type="button" 
                                        title="Sign in" 
                                        className="text-white bg-white-700 hover:bg-white hover:bg-opacity-20 hover:border-white-700 hover:border-yellow rounded-lg p-2.5 text-center inline-flex items-center mr-2 shadow border-gray-400 hover:border-white transition duration-200 transition-bg" 
                                        style={{ border: '1px solid transparent' }}
                                        onMouseEnter={ _handleBorder }
                                        onMouseLeave={ _handleResetBorder }
                                    >

                                            {/* bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded */}

                                        <Link to="/signin">
                                            <svg 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                viewBox="0 0 20 20" 
                                                fill="currentColor" 
                                                className="w-5 h-5">

                                                <path 
                                                    fillRule="evenodd" 
                                                    d="M3 4.25A2.25 2.25 0 015.25 2h5.5A2.25 2.25 0 0113 4.25v2a.75.75 0 01-1.5 0v-2a.75.75 0 00-.75-.75h-5.5a.75.75 0 00-.75.75v11.5c0 .414.336.75.75.75h5.5a.75.75 0 00.75-.75v-2a.75.75 0 011.5 0v2A2.25 2.25 0 0110.75 18h-5.5A2.25 2.25 0 013 15.75V4.25z"
                                                    clipRule="evenodd" />

                                                <path 
                                                    fillRule="evenodd" 
                                                    d="M6 10a.75.75 0 01.75-.75h9.546l-1.048-.943a.75.75 0 111.004-1.114l2.5 2.25a.75.75 0 010 1.114l-2.5 2.25a.75.75 0 11-1.004-1.114l1.048-.943H6.75A.75.75 0 016 10z" 
                                                    clipRule="evenodd" />
                                            </svg>
                                        </Link>
                                        <span className="sr-only">Sign in</span>
                                    </button>

                                    <button 
                                        type="button" 
                                        title="Sign up" 
                                        className="text-white bg-white-700 hover:bg-white hover:bg-opacity-20 hover:border-white-700 hover:border-yellow rounded-lg p-2.5 text-center inline-flex items-center mr-2 shadow border-gray-400 hover:border-white transition duration-200 transition-bg" 
                                        style={{ border: '1px solid transparent' }}
                                        onMouseEnter={ _handleBorder }
                                        onMouseLeave={ _handleResetBorder }
                                    >
                                            
                                        <Link to="/signup">
                                            <svg 
                                                xmlns="http://www.w3.org/2000/svg" 
                                                viewBox="0 0 20 20" 
                                                fill="currentColor" 
                                                className="w-5 h-5">

                                                <path 
                                                    d="M11 5a3 3 0 11-6 0 3 3 0 016 0zM2.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 018 18a9.953 9.953 0 01-5.385-1.572zM16.25 5.75a.75.75 0 00-1.5 0v2h-2a.75.75 0 000 1.5h2v2a.75.75 0 001.5 0v-2h2a.75.75 0 000-1.5h-2v-2z" />
                                            </svg>
                                        </Link>
                                        <span className="sr-only">Sign up</span>
                                    </button>
                                </> 
                            )}
                        </div>

                        <button 
                            onClick={() => toggleExpansion(!isExpanded)} 
                            data-collapse-toggle="navbar-sticky" 
                            type="button" 
                            className="inline-flex items-center p-2 text-sm text-white rounded-lg md:hidden" 
                            style={{ border: '1px solid white' }} 
                            aria-controls="navbar-sticky" 
                            aria-expanded="false">

                            <span className="sr-only">Open menu</span>

                            <svg 
                                className="w-6 h-6" 
                                aria-hidden="true" 
                                fill="currentColor" 
                                viewBox="0 0 20 20" 
                                xmlns="http://www.w3.org/2000/svg">
                                
                                <path 
                                    fillRule="evenodd" 
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" 
                                    clipRule="evenodd">
                                </path>
                            </svg>
                        </button>
                    </div>
              
                     <div className={`items-center justify-between ${isExpanded ? 'inline-block' : 'hidden'} w-full md:flex md:w-auto md:order-1`}>

                        <ul 
                            className="font-poppinsSemi font-semi-bold flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white " 
                            style={{ 
                                backgroundColor: `#01A473`, 
                                color:`#01a473`
                            }}>
                                
                            <li>
                                <Link 
                                    to="/products" 
                                    className="block py-2 pl-2 pr-2 text-white rounded md:hover:bg-transparent hover:bg-white hover:bg-opacity-10 hover:bg-sky-700"
                                    id="nav-effect">
                                        <span>Products</span>
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/dog-products" 
                                    className="block py-2 pl-2 pr-2 text-white rounded md:hover:bg-transparent hover:bg-white hover:bg-opacity-10"
                                    id="nav-effect">
                                        <span>Dog</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/cat-products" 
                                    className="block py-2 pl-2 pr-2 text-white rounded md:hover:bg-transparent hover:bg-white hover:bg-opacity-10"
                                    id="nav-effect">
                                        <span>Cat</span>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/reptile-products" 
                                    className="block py-2 pl-2 pr-2 text-white rounded md:hover:bg-transparent hover:bg-white hover:bg-opacity-10"
                                    id="nav-effect">
                                        <span>Reptile</span>
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/bird-products" 
                                    className="block py-2 pl-2 pr-2 text-white rounded md:hover:bg-transparent hover:bg-white hover:bg-opacity-10"
                                    id="nav-effect">
                                        <span>Bird</span>
                                </Link>
                            </li>
                            <li>
                                <Link 
                                    to="/smallpet-products" 
                                    className="block py-2 pl-2 pr-2 text-white rounded md:hover:bg-transparent hover:bg-white hover:bg-opacity-10"
                                    id="nav-effect">
                                        <span>Small Pets</span>
                                </Link>
                            </li>

                                { user.admin && 
                                    <Link
                                        to="/admin" 
                                        className="block py-2 pl-2 pr-2 text-white rounded md:hover:bg-transparent hover:bg-white hover:bg-opacity-10" 
                                        id="nav-effect">
                                            <span>Admin</span>
                                    </Link>
                                }

                     
        
                        </ul>


                        
                    </div>
                </div>
                {/* </div> */}
            </nav>


            
                                
        </>
    );
};

export default Navbar;
