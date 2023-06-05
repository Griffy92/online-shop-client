import * as React from 'react';
import { useState, useContext, useEffect } from 'react';
import {container} from './layout.module.css'
import { UserContext } from '../providers/UserProvider'
import Navbar from './navbar';
import Footer from './footer';
import Sidebar from './sidebar';
import FilterList from './FilterList';
import axios from 'axios';

const Layout = ( {children} ) => {
    const { user, setUser } = useContext(UserContext);

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

    const handleSignOut = () => {
        setUser({});
        localStorage.clear();
    };

    return (
<<<<<<< HEAD
        <UserContext.Provider value={{user, setUser}}>
            <Navbar user={user} handleSignOut={ handleSignOut} />
=======
        <div className={container}>
            <Navbar />
>>>>>>> 55dba9e (Create User speaking to backend. Helper API file broken.)
            {/* <FilterList /> */}
            {children}
            <Footer />
        </UserContext.Provider>
    );
};

export default Layout;