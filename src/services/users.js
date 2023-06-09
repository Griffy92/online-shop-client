import axios from 'axios';

const baseURL = 'http://localhost:3000/';

export const UserAPI = {
    createUser: function (payload) {
        return axios.post( baseURL + 'users', payload );
    },
    getUser: function (token) {
        return axios.get(baseURL + 'profile', {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
    },
    signIn: function (payload) {
        return axios.post( baseURL + 'login', payload );
    },
    forgotPassword: function ( email ) {
        return axios.post( baseURL + 'password/forgot', {
            email: email,
        });
    },
    resetPassword: function (token, password) {
        return axios.post( baseURL + 'password/reset', {
            token: token, 
            password: password
        });
    },
}
