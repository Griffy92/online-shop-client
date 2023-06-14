import React from 'react';
import { useState } from 'react';

export const UserContext = React.createContext();

export const UserProvider = ( {children} ) => {
    const [ user, setUser ] = useState({});
    const [ guestStatus, setGuestStatus ] = useState(true);
    const [ cartStatus, setCartStatus ] = useState(0);

    return (
        <UserContext.Provider value={{user, setUser, guestStatus, setGuestStatus, cartStatus, setCartStatus}}>
            {children}
        </UserContext.Provider>
    )
}