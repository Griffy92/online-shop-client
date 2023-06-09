import React from 'react';
import { useState } from 'react';

const ForgotPasswordForm = ( props ) => {
    const [ email, setEmail ] = useState('');
    const { formDecider } = props;

    const _handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const _handleSubmit = () => {
        // Do something to the backend
        console.log('hi')
    }

    return (
        <>
            <section className="bg-gray-50 dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Forgotten Password?
                                </h1>

                                <form className="space-y-4 md:space-y-6" onSubmit={ _handleSubmit } >
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                        <input name="email" value={ email } onChange={ _handleEmailChange } className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                                    </div>

                                    <div className="flex items-end">
                                        <button onClick = { formDecider }>
                                            <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in?</a>
                                        </button>
                                    </div>

                                    <button type="submit" className="w-full text-blue bg-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign Up</a>
                                    </p>
                                </form>

                            </div>
                        </div>
                    </div>
                </section>
        </>
    )

}

export default ForgotPasswordForm