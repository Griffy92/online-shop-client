<<<<<<< HEAD
import * as React from 'react';
import { useState, useContext, useEffect } from 'react';
import {container} from './layout.module.css'
import { UserContext } from '../providers/UserProvider'
=======
import React from 'react';
import { useState, createContext, useEffect } from 'react';
>>>>>>> 2975514 (Signout button complete. Moving user state to layout incomplete)
import Navbar from './navbar';
import Footer from './footer';
import Sidebar from './sidebar';
import FilterList from './FilterList';
<<<<<<< HEAD
import axios from 'axios';

const Layout = ( {children} ) => {
    const { user, setUser } = useContext(UserContext);

    let token = localStorage.getItem('token');
    // fetch user
    useEffect(() => {
        if (token) {
=======
import {container} from './layout.module.css'

import axios from 'axios'

export const UserStateContext = createContext(null);

const Layout = ( {children} ) => {
    const [ user, setUser ] = useState({});

    // fetch user
    useEffect(() => {
        let token = localStorage.getItem('token');
        if(token) {
>>>>>>> 2975514 (Signout button complete. Moving user state to layout incomplete)
            axios.get('http://localhost:3000/profile', {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }).then( (response) => {
                setUser(response.data);
            })
<<<<<<< HEAD
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
=======
        }
    }, [])

    console.log(user);

    return (
        <UserStateContext.Provider value={user}>
>>>>>>> 2975514 (Signout button complete. Moving user state to layout incomplete)
            <Navbar />
>>>>>>> 55dba9e (Create User speaking to backend. Helper API file broken.)
            {/* <FilterList /> */}
            {children}
            <Footer />
<<<<<<< HEAD
        </UserContext.Provider>
=======
        </UserStateContext.Provider>
>>>>>>> 2975514 (Signout button complete. Moving user state to layout incomplete)
    );
};

export default Layout;