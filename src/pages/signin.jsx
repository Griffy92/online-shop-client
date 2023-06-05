import React from 'react';
import { useState } from 'react';
import Layout from '../components/layout'
import axios from 'axios'

const Signin = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

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
        // TODO: Post reqeust to handle login
        // axios.post(`http://localhost:3000/login/`, payload).then( (response) => {
        //     console.log(response.data);
        // });
    };

    return (
        <Layout>
            <form>
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