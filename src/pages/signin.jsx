import React from 'react';
import { useState, useContext, useEffect } from 'react';
import { navigate, Link } from 'gatsby';
import { UserContext } from '../providers/UserProvider'
import { UserAPI } from '../services/users'
import ForgotPasswordForm from '../components/ForgotPassword';


const Signin = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');
    const { setUser } = useContext(UserContext);
    const [ form, setForm ] = useState(true);

    useEffect( () => {
        setForm(true);
    }, [])

    const _handleSubmit = (e) => {
        e.preventDefault();

        // login details
        const payload = {
            user: {
                password: password,
                email: email,
            }
        };
        
        UserAPI.signIn(payload).then( (response) => {
            if (response.data.token ) {
                localStorage.setItem('token', response.data.token);
                setUser(response.data.user)
            }
            setError(null);
            navigate(-1);
        }).catch( (response) => {
            setError(response.response.data.error);
        });

    };

    return (
        <>
            { form ? 
                <section className="bg-gray-50 dark:bg-gray-900">
                        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                    <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                        Sign in to your account
                                    </h1>
                                    <form className="space-y-4 md:space-y-6" onSubmit={ _handleSubmit } >
                                        <p className="text-red-500 italic">{error}</p>
                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                            <input name="email" value={ email } onChange={ (e) => setEmail(e.target.value) } className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                                        </div>

                                        <div>
                                            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                            <input type="password" name="password_digest" onChange={ (e) => setPassword(e.target.value) } id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label className="text-gray-500 dark:text-gray-300">Remember me</label>
                                                </div>
                                            </div>
                                        </div>

                                        <button type="submit" className="w-full text-blue bg-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                                    </form>
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400 flex justify-between">
                                        <Link to="/signup" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign Up </Link>
                                        <a onClick={ () => setForm(!form) } className="font-medium text-primary-600 hover:underline dark:text-primary-500"> <button className="hover:underline" > Forgot your password?</button></a>
                                    </p>

                                </div>
                            </div>
                        </div>
                </section>
                :
                <ForgotPasswordForm formDecider={ () => setForm(!form) } />                
            }
        </>
    )
}

export default Signin;