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
}
