import axios from 'axios';

const baseURL = 'http://localhost:3000/products/';

// You are not expected to understand this (yet)
const handleError = (fn) => (...params) =>
    fn(...params).catch((error) => {
        console.error(error); // TODO: make this look nicer
    });

export const productApi = {
    getProduct: handleError(async (id) => {
        const res = await axios.get(baseURL + id);
        return res.data;
    }),
    getProducts: handleError(async () => {
        const res = await axios.get(baseURL)
        console.log(res.data)
        return res.data;
    })
}; 

export async function getKat() {
    const res = await axios.get(baseURL)
    console.log(res.data)
};