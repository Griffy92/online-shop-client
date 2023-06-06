import React from 'react';
import { useState, useContext } from 'react';
import { navigate } from 'gatsby';
import { UserContext } from '../providers/UserProvider'
import axios from 'axios'


const Signin = () => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [ error, setError ] = useState('');
    const { user, setUser } = useContext(UserContext);
     
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
            console.log(user);
        }).catch( (response) => {
            setError(response.response.data.error); // returns Invalid Credentials
        });

        // TODO: What if the user was already browsing then signs in? .... try navigate(-1)
        navigate('/');
    };

    return (
        <>
            <form onSubmit={ _handleSubmit }>
                <h1>Sign In Form</h1>

                <label>Email: </label>
                <input name='email' value={ email } onChange={ _handleEmailChange }/>
                <label>Password: </label>
                <input type="password" name="password_digest" onChange={ _handlePasswordChange } />
                <button>Signin</button>
            </form>
        </>
    )
}

export default Signin;