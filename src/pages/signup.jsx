import React from 'react';
import { useState, useContext } from 'react';
import { UserContext } from '../providers/UserProvider';
import { navigate } from 'gatsby';
import { UserAPI } from '../services/users'
import accountImage from '../images/create-account.jpeg';


const Signup = () => {
    const { user, setUser } = useContext(UserContext);
    const [ name, setName ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ email, setEmail ] = useState('');

    const _handleNameChange = (e) => {
        setName(e.target.value);
    };

    const _handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const _handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const _handleUserCreationSubmit = (e) => {
        e.preventDefault();

        const payload = {
            user: {
                fullname: name,
                password: password,
                email: email,
            }
        };

        UserAPI.createUser(payload).then( (response) => {
            localStorage.setItem('token', response.data.token)
            setUser(response.data.user);
        });

        navigate('/');

    };
    
    return (
        <>
        <section 
            onSubmit={ _handleUserCreationSubmit } 
            className="bg-gray-50 dark:bg-gray-900"
            style={{
                backgroundImage: `url(${accountImage})`,
                backgroundSize: `cover`,
                marginTop: `-5%`
                }}
        >
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an Account
                        </h1>
                        <form 
                            className="space-y-4 md:space-y-6" 
                            onSubmit={ _handleUserCreationSubmit} 
                        >
                            <div>
                                <label 
                                    for="email" 
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name
                                </label>

                                <input 
                                    name="fullname" 
                                    value={ name } 
                                    onChange={ _handleNameChange } 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{ 
                                            WebkitTextFillColor: `black`, 
                                            WebkitBoxShadow: `0 0 0px 1000px white inset` 
                                    }}
                                    placeholder="Jane Smith" 
                                    required=""
                                />
                            </div>

                            <div>
                                <label 
                                    for="email" 
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Email
                                </label>

                                <input 
                                    name="email" 
                                    value={ email } 
                                    onChange={ _handleEmailChange } 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    style={{ 
                                        WebkitTextFillColor: `black`, 
                                        WebkitBoxShadow: `0 0 0px 1000px white inset` 
                                    }}
                                    placeholder="name@company.com" 
                                    required=""
                                />
                            </div>

                            <div>
                                <label 
                                    for="password" 
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                        Password
                                </label>

                                <input 
                                    name="password_digest" 
                                    value={ password } 
                                    onChange={ _handlePasswordChange } 
                                    placeholder="••••••••" 
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                                    required=""
                                />
                            </div>

                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input 
                                        id="terms" 
                                        aria-describedby="terms" 
                                        type="checkbox" 
                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" 
                                        required=""
                                    />
                                </div>

                                <div className="ml-3 text-sm">
                                    <label 
                                        for="terms" 
                                        className="font-light text-gray-500 dark:text-gray-300">I accept the 
                                            <a 
                                                className="font-medium text-primary-600 hover:underline dark:text-primary-500" 
                                                href="#">Terms and Conditions
                                            </a>
                                    </label>
                                </div>
                            </div>
                            <button 
                                type="submit" 
                                className="w-full text-blue bg-white focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-sm px-5 py-2.5 text-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent">
                                    Create an account
                            </button>

                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? 
                                    <a 
                                        href="/signin" 
                                        className="font-medium text-primary-600 hover:underline dark:text-primary-500">
                                            Login here 
                                    </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Signup;