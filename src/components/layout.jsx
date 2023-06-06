import React from 'react';
import { useState, createContext, useEffect } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Sidebar from './sidebar';
import FilterList from './FilterList';
import {container} from './layout.module.css'

import axios from 'axios';

export const UserStateContext = createContext(null);

const Layout = ( {children} ) => {
    const [ user, setUser ] = useState({});

    let token = localStorage.getItem('token');
    // fetch user
    useEffect(() => {
        if (token) {
            axios.get('http://localhost:3000/profile', {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }).then( (response) => {
                setUser(response.data);
            })
        } else {
            setUser('');
        }
    }, [token])

    console.log('hit me baby one more time', user);

    return (
        // <UserStateContext.Provider value={user}>
        <div>
            <Navbar user={user} />
            {/* <FilterList /> */}
            {children}
            <Footer />
        </div>
        // </UserStateContext.Provider>
    );
};

export default Layout;