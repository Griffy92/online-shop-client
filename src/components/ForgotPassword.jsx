import React from 'react';
import { useState, useEffect } from 'react';
import { UserAPI } from '../services/users';
import ResetPasswordForm from './ResetPassword';
import signIn from '../images/Sign-in.jpg';

const ForgotPasswordForm = ( props ) => {
    const { formDecider } = props;
    const [ email, setEmail ] = useState('');
    const [ error, setError ] = useState('');
    const [ resetPW, setResetPW ] = useState(false);

    useEffect(() => {
        setResetPW(false);
    },[]);

    const _handleSubmit = (e) => {
        e.preventDefault();
        UserAPI.forgotPassword(email).then( (response) => {
            console.log('forgotPW Test', response.data);
            setResetPW(!resetPW);
        }).catch( (error) => setError(error.response.data.status) )
    }

    return (
        <>
            { !resetPW ? 
                <section style={{
                    backgroundImage: `url(${signIn})`,
                    backgroundSize: `cover`,
                    marginTop: `-5%`
                    }}>
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                            <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0">
                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-2xl font-bold leading-tight tracking-tight text-gray-900 md:text-3xl">
                                    Forgotten Password?
                                </h1>

                                { error !== null ? <p>{error}</p> : <p></p>}

                                <form className="space-y-4 md:space-y-6" onSubmit={ _handleSubmit } >
                                    <div>
                                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                                        <input name="email" value={ email } onChange={ (e) => setEmail(e.target.value) } className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                                    </div>

                                    <div className="flex items-end">
                                        <button onClick = { formDecider }>
                                            <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in?</a>
                                        </button>
                                    </div>

                                    <button type="submit" className="w-full text-blue bg-white hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                                        Request Password Reset Email
                                    </button>
                                    <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                        Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign Up</a>
                                    </p>
                                </form>

                            </div>
                        </div>
                    </div>
                </section>
                :
                <ResetPasswordForm formDecider={ formDecider }/>
            }
        </>
    )

}

export default ForgotPasswordForm