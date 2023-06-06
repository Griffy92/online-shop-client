import React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Sidebar from './sidebar';
import FilterList from './FilterList';
import {container} from './layout.module.css'


const Layout = ( {children} ) => {
    return (
        <div >
            <Navbar />
            {/* <FilterList /> */}
            {children}
            <Footer />

        </div>
    );
};

export default Layout;