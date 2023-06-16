import * as React from 'react';
import Navbar from './navbar';
import Footer from './footer';
import { useContext, useEffect } from 'react';
import { UserContext } from '../providers/UserProvider'
import { UserAPI } from '../services/users'

const Layout = ( {children} ) => {
    const { user, setUser, setGuestStatus } = useContext(UserContext);
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (token) {
            UserAPI.getUser(token).then((response) => {
                setUser(response.data);
                setGuestStatus(false);
            })
        } else {
            setUser('');
            setGuestStatus(true);
        }
    }, [token])

    const handleSignOut = () => {
        setUser({});
        localStorage.clear();
        setGuestStatus(true)
    };

    return (
        <>
            <Navbar user={user} handleSignOut={ handleSignOut} />
            {children}
            <Footer />
        </>
    );
};

export default Layout;