import React from 'react';
import { useState, useEffect, createContext } from 'react';
import { navigate } from 'gatsby';
import Layout from '../components/layout'
import axios from 'axios'

export const UserStateContext = createContext(null);

const Signin = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');
    const [ user, setUser ] = useState({});
     
    const _handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const _handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const _handleSubmit = (e) => {
        e.preventDefault();

        const payload = {
            user: {
                password: password,
                email: email,
            }
        };
        
        axios.post(`http://localhost:3000/login`, payload).then( (response) => {
            // if (response.data.token ) {
                localStorage.setItem('token', response.data.token);
                setUser(response.data.user)
            // }
            // console.log(response.data);
        }).catch( (response) => {
            setError(response.response.data.error); // returns Invalid Credentials
            // console.log(error)
        });

        // TODO: What if the user was already browsing then signs in? .... try navigate(-1)
        navigate('/');
    };

    return (
        <Layout loggedin={user}>
            <form onSubmit={ _handleSubmit }>
                <h1>Sign In Form</h1>

                <label>Email: </label>
                <input name='email' value={ email } onChange={ _handleEmailChange }/>
                <label>Password: </label>
                <input type="password" name="password_digest" onChange={ _handlePasswordChange } />
                <button>Signin</button>
            </form>
        </Layout>
    )
}

export default Signin;