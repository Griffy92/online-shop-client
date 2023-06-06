import React from 'react';
import { useState, useEffect } from 'react';
import Layout from '../components/layout'
import axios from 'axios'

const Signin = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');
    const [ user, setUser ] = useState({});

    useEffect(() => {
        let token = localStorage.getItem('token');
        if(token) {
            axios.get('http://localhost:3000/profile', {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }).then( (response) => {
                setUser(response.data);
            })
        }
    }, [])
     
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
            if (response.data.token ) {
                localStorage.setItem('token', response.data.token);
                setUser(response.data.user)
            }
            // console.log(response.data);
        }).catch( (response) => {
            setError(response.response.data.error); // returns Invalid Credentials
            // console.log(error)
        });
        
    };

    return (
        <Layout>
            <form onSubmit={ _handleSubmit }>
                <h1>Sign In Form</h1>
                <p>{user.fullname}</p>
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