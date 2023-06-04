import React from 'react';
import Navbar from './navbar';

const Layout = ( {children} ) => {
    return (
        <div>
            <Navbar />
            {children}
            <footer>Footer</footer>
        </div>
    );
};

export default Layout;