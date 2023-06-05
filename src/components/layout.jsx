import React from 'react';
import Navbar from './navbar';
import {
    container,
    header
} from './layout.module.css'

const Layout = ( {children} ) => {
    return (
        <div className={container}>
            <Navbar />
            {children}
            <footer>Footer</footer>
        </div>
    );
};

export default Layout;