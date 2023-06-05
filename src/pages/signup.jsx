import React from 'react';
import { useState } from 'react';
import  UserAPI from '../utilities/usersAPI'
import Layout from '../components/layout'
import axios from 'axios'


const Signup = () => {
    const [ user, setUser ] = useState({});
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

        axios.post(`http://localhost:3000/users/`, payload).then( (response) => {
            console.log(response.data);
        });

        // TODO: redirect to somewhere and fetch JWT token and setState?

    };
    
    return (
        <Layout>
            <h1>Sign up here foo</h1>
            <form onSubmit={ _handleUserCreationSubmit} >
                <label>Name: </label>
                <input name="fullname" value={name} onChange={_handleNameChange} />
                <label>Email: </label>
                <input type="email" value={email} onChange={_handleEmailChange}/>
                <label>Password: </label>
                <input type="password_digest" value={password} onChange={_handlePasswordChange} />
                <button>Signup!</button>
            </form>
        </Layout>
    )
}

export default Signup;