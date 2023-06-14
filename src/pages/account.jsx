import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../providers/UserProvider'


const Account = () => {
    const { user } = useContext(UserContext);
    console.log(user)

    return (
        <>
            <div>
                <h2>Order History Coming</h2>
            </div>
            <div>
                <h2>Account Details</h2>
                <ul>
                    <li>Name: {user.fullname}</li>
                    <li>email: {user.email} </li>
                    <li>address: {user.address} </li>
                    <li>contact number: {user.contact_number}</li>
                </ul>
            </div>
        </>
    )
}

export default Account;