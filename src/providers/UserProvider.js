import React from 'react';
import { useState } from 'react';

export const UserContext = React.createContext();

export const UserProvider = ( {children} ) => {
    const [ user, setUser ] = useState({});
    const [ guestStatus, setGuestStatus ] = useState(true);

    
    return (
        <UserContext.Provider value={{user, setUser, guestStatus, setGuestStatus}}>
            {children}
        </UserContext.Provider>
    )
}