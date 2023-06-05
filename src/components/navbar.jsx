import React from 'react';
import { Link } from 'gatsby'

const Navbar = () => {
    
    return (
            <nav>
                <Link to="/">Home </Link>
                <Link to="/signup">Signup </Link>
            </nav>
    );
};

export default Navbar;