import React from 'react';
import { useState } from 'react'
import { UserAPI } from '../services/users';
import { Link } from 'gatsby';

const ResetPasswordForm = ( props ) => {
    const [ token, setToken ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ error, setError ] = useState("");
    const [ success, setSuccess ] = useState(null);
    const { formDecider } = props;

    const _handleTokenChange = (e) => {
        setToken(e.target.value);
    };

    const _handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const _handleSubmit = (e) => {
        e.preventDefault();
        UserAPI.resetPassword(token, password).then((response) => {
            setSuccess('Password Reset! Please sign in with new password.')
        }).catch( (error) => console.log(error) );
    };


    return (
        <>
            { success === null ? 
                <section className="bg-gray-50 dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Set new password
                                </h1>

                                { error !== null ? <p>{error}</p> : <p></p> }
                                
                                <form onSubmit={ _handleSubmit } className="space-y-4 md:space-y-6">
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Token</label>
                                        <input onChange={ _handleTokenChange } className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    </div>
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">New Password</label>
                                        <input onChange={ _handlePasswordChange }type="password" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                    </div>

                                    <p>Please check your spam folder otherwise click <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">here</a> to generate another email</p>
                                    <button type="submit" className="w-full text-blue bg-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                        Update Password
                                    </button>
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    <Link to="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign Up </Link>
                                    Or
                                    <a onClick={ formDecider }className="font-medium text-primary-600 hover:underline dark:text-primary-500"> Sign In</a>
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                :
                <section className="bg-gray-50 dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Password reset! Please sign in with the new password.
                                </h1>
                                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                    <Link to="/signin" className="font-medium text-primary-600 hover:underline dark:text-primary-500"> Sign In</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default ResetPasswordForm;