import React from 'react';
import Navbar from './navbar';
import FilterList from './FilterList';

const Layout = ( {children} ) => {
    return (
        <div>
            <Navbar />
            <FilterList />
            {children}
            <footer>Footer</footer>
        </div>
    );
};

export default Layout;