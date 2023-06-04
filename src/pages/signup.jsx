import React, { useState } from 'react';
import Layout from '../components/layout'


const Signup = () => {
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
    
    return (
        <Layout>
            <h1>Sign up here foo</h1>
            <form>
                <label>Name: </label>
                <input name="fullname" value={name} onChange={_handleNameChange} />
                <label>Password: </label>
                <input type="email" onChange={_handleEmailChange}/>
                <button>Signup!</button>
                <input type="password" onChange={_handlePasswordChange} />
                <label>Email: </label>
            </form>
        </Layout>
    )
}

export default Signup;