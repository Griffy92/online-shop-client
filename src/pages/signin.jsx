import React from 'react';
import ForgotPasswordForm from '../components/ForgotPassword';
import signIn from '../images/Sign-in.jpg';
import { useState, useContext, useEffect } from 'react';
import { navigate, Link } from 'gatsby';
import { UserContext } from '../providers/UserProvider'
import { UserAPI } from '../services/users'

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
                <section
                    style={{
                        backgroundImage: `url(${signIn})`,
                        backgroundSize: `cover`,
                        marginTop: `-5%`
                        }}
                    >
                        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">

                                    {/* Heading */}
                                    <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl">
                                        Sign in to your account
                                    </h1>

                                    <form 
                                        className="space-y-4 md:space-y-6" 
                                        onSubmit={ _handleSubmit } 
                                    >
                                        <p className="text-red-500 italic">{error}</p>

                                        <div>
                                            {/* Email input */}
                                            <label 
                                                htmlFor="email"
                                                className="block mb-2 text-sm font-medium text-gray-900">
                                                    Email
                                            </label>
                                            <input 
                                                name="email" 
                                                value={ email } 
                                                onChange={ (e) => setEmail(e.target.value) } 
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-300 block w-full p-2.5" 
                                                style={{ 
                                                    WebkitTextFillColor: `black`, 
                                                    WebkitBoxShadow: `0 0 0px 1000px white inset` 
                                                }}
                                                placeholder="name@company.com" 
                                                required 
                                            />
                                        </div>

                                        <div>
                                            {/* Password input */}
                                            <label
                                                htmlFor="password"
                                                className="block mb-2 text-sm font-medium text-gray-900">
                                                    Password
                                            </label>
                                            <input 
                                                type="password" 
                                                name="password_digest" 
                                                onChange={ (e) => setPassword(e.target.value) } 
                                                id="password" 
                                                placeholder="••••••••" 
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5" 
                                                required 
                                            />
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div className="flex items-start">
                                                <div className="flex items-center h-5">
                                                    {/* Remember me checkbox */}
                                                    <input 
                                                        id="remember" 
                                                        aria-describedby="remember" 
                                                        type="checkbox" 
                                                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300" 
                                                    />
                                                </div>
                                                <div className="ml-3 text-sm">
                                                    <label className="text-gray-500">Remember me</label>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Sign in button */}
                                        <button 
                                            type="submit" 
                                            className="
                                            w-full text-blue bg-white focus:ring-4 focus:outline-none focus:ring-primary-300 rounded-lg text-sm px-5 py-2.5 text-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white border border-blue-500 hover:border-transparent 
                                           "
                                            >Sign in
                                        </button>
                                    </form>
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400 flex justify-between">
                                        <Link 
                                            to="/signup" 
                                            className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up 
                                        </Link>
                                        <a 
                                            onClick={ () => setForm(!form) } className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                                        > 
                                        
                                        {/* Forgot password */}
                                        <button className="hover:underline" > Forgot your password?</button></a>
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