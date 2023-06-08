import * as React from 'react';
import { useContext, useEffect } from 'react';
import { UserContext } from '../providers/UserProvider'
import Navbar from './navbar';
import Footer from './footer';
import { UserAPI } from '../services/users'
import FilterList from './FilterList';

const Layout = ( {children} ) => {
    const { user, setUser } = useContext(UserContext);
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (token) {
            UserAPI.getUser(token).then((response) => {
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
        <UserContext.Provider value={{user, setUser}}>
            <Navbar user={user} handleSignOut={ handleSignOut} />
            {/* <FilterList /> */}
            {children}
            <Footer />
        </UserContext.Provider>
    );
};

export default Layout;