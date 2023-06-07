import axios from 'axios';

const baseURL = 'http://localhost:3000/users/';

export const UserAPI = {
    createUser: function ( payload ) {
        return axios.post(baseURL + payload);
    },
    getUsers() {
        return axios.get(baseURL);
    }
}
