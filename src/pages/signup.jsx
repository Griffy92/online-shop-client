import React from 'react';
import { useState, useContext } from 'react';
import { UserContext } from '../providers/UserProvider';
import { navigate } from 'gatsby';
import { UserAPI } from '../services/users'
import signIn from '../images/Sign-in.jpg';


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
            class="bg-gray-50 dark:bg-gray-900"
            style={{
                backgroundImage: `url(${signIn})`,
                backgroundSize: `cover`,
                marginTop: `-5%`
                }}>
            <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Create an Account Foo
                        </h1>
                        <form class="space-y-4 md:space-y-6" onSubmit={ _handleUserCreationSubmit} >
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
                                <input name="fullname" value={ name } onChange={ _handleNameChange } class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{ 
                                                    WebkitTextFillColor: `black`, 
                                                    WebkitBoxShadow: `0 0 0px 1000px white inset` 
                                                }}placeholder="Jane Smith" required=""/>
                            </div>
                            <div>
                                <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                <input name="email" value={ email } onChange={ _handleEmailChange } class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" style={{ 
                                                    WebkitTextFillColor: `black`, 
                                                    WebkitBoxShadow: `0 0 0px 1000px white inset` 
                                                }}placeholder="name@company.com" required=""/>
                            </div>
                            <div>
                                <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input name="password_digest" value={ password } onChange={ _handlePasswordChange } placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required=""/>
                            </div>
                            <div class="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="terms" aria-describedby="terms" type="checkbox" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="terms" class="font-light text-gray-500 dark:text-gray-300">I accept the <a class="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                                </div>
                            </div>
                            <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Create an account</button>
                            <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <a href="/signin" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Login here </a>
                                {/* link to? login link */}
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