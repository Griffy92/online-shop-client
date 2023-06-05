import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Sidebar from './sidebar';

const Layout = ( {children} ) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footer />

        </div>
    );
};

export default Layout;