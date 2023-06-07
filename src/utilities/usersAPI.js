import axios from 'axios';

const baseURL = 'http://localhsot:3000/users/';

const handleError = (fn) => (...params) => 
    fn(...params).catch( (error) => {
        console.error(error);
    });

export const api = {
    createUser: handleError(async (payload) => {
        const res = await axios.post(baseURL, payload);
        return res.data;
    })
}