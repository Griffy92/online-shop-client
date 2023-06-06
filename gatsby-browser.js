import './src/styles/global.css';
import React from 'react';
import Layout from './src/components/layout';
import { UserProvider } from './src/providers/UserProvider';

export const wrapPageElement = ({ element, props }) => {
    return (
        <Layout {...props}>{element}</Layout>
    )
}

export const wrapRootElement = ({ element }) => {
    return (
        <UserProvider>{element}</UserProvider>
    )
}

