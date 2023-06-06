import React from 'react';
import { useState, createContext, useEffect } from 'react';
import Navbar from './navbar';
import Footer from './footer';
import Sidebar from './sidebar';
import FilterList from './FilterList';
import {container} from './layout.module.css'

import axios from 'axios'

export const UserStateContext = createContext(null);

const Layout = ( {children} ) => {
    const [ user, setUser ] = useState({});

    // fetch user
    useEffect(() => {
        let token = localStorage.getItem('token');
        if(token) {
            axios.get('http://localhost:3000/profile', {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }).then( (response) => {
                setUser(response.data);
            })
        }
    }, [])

    console.log(user);

    return (
        <UserStateContext.Provider value={user}>
            <Navbar />
            {/* <FilterList /> */}s
            {children}
            <Footer />
        </UserStateContext.Provider>
    );
};

export default Layout;