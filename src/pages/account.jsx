import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../providers/UserProvider'
import UserOrders from '../components/ UserOrderHistory';
import { useEffect } from 'react';


const Account = () => {
    const { user } = useContext(UserContext);

    useEffect( () => {

    })

    return (
        <>  
            <div className="container mx-auto"> 
                <div className="mt-10 mb-5 text-3xl font-extrabold font-poppins text-black">
                    <h1>My Account</h1>
                </div>
                <div className="flex justify-around">
                    <div>
                        <h2>Account Details</h2>
                        <ul>
                            <li>Name: {user.fullname}</li>
                            <li>Email: {user.email} </li>
                            <li>Address: {user.address} </li>
                            <li>Contact Number: {user.contact_number}</li>
                        </ul>
                    </div>
                    <div>
                        <UserOrders />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Account;