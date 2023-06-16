import React from 'react';
import UserOrders from '../components/ UserOrderHistory';
import headerImage from '../images/header.png';
import { useContext } from 'react';
import { UserContext } from '../providers/UserProvider'
import { useEffect } from 'react';
import { navigate} from 'gatsby'


const Account = () => {
    const { user } = useContext(UserContext);
    console.log(user)
    useEffect( () => {
        if (user.length === 0 ) {
            navigate('/')
        };
    });

    return (
        <>  
            <div className="bg-cover bg-center text-white h-[20vh] flex items-center" style={{
                backgroundImage: `url(${headerImage})`,
            }}>
                <h1 
                    className="ml-20 text-4xl font-extrabold tracking-tight leading-none md:text-5xl lg:text-6xl dark:text-white" 
                    style={{
                    color: '#01a473'
                    }}>
                    My Account
                </h1>
            </div>
            <div className="lg:h-[80vh] container mx-auto py-8 px-4 max-w-screen-xl h-screen lg:py-10 lg:px-12"> 
                <div className="flex flex-col lg:flex-row justify-between">
                    <div className="lg:w-1/2 mr-8 text-center rounded-lg bg-gray-200 p-8 flex-grow">
                        <h2 className="mb-1 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">Account Details</h2>
                        <table className="mt-4">
                            <tbody>
                                <tr className='border-b dark:bg-gray-800 dark:border-gray-700'>
                                    <td className='px-6 py-4 text-left text-slate-800'>Name: </td>
                                    <td className='px-2 py-4 text-left text-slate-800'>{user.fullname}</td>
                                </tr>
                                <tr className='border-b dark:bg-gray-800 dark:border-gray-700'>
                                    <td className='px-6 py-4 text-left text-slate-800'>Email: </td>
                                    <td className='px-2 py-4 text-left text-slate-800'>{user.email}</td>
                                </tr>
                                <tr className='border-b dark:bg-gray-800 dark:border-gray-700'>
                                    <td className='px-6 py-4 text-left text-slate-800'>Address: </td>
                                    <td className='px-2 py-4 text-left text-slate-800'>{user.address}</td>
                                </tr>
                                <tr className='border-b dark:bg-gray-800 dark:border-gray-700'>
                                    <td className='px-6 py-4 text-left text-slate-800'>Contact Number: </td>
                                    <td className='px-2 py-4 text-left text-slate-800'>{user.contact_number}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className="lg:h-[70vh] overflow-y-auto lg:w-1/2 text-center rounded-lg bg-gray-200 p-8 flex-grow">
                        <h1 className="text-center mb-5 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white">Historical Orders</h1>
                        <div>
                            <UserOrders />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Account;