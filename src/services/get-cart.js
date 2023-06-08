import { useEffect, useState } from "react";
import axios from 'axios';

let token = localStorage.getItem('token');

const baseURL = 'http://localhost:3000/orders/';

const handleError = (fn) => (...params) =>
    fn(...params).catch((error) => {
        console.error(error); 
    });

export const cartAPI = {
    getCart: handleError(async (id) => {
        const res = await axios.get(baseURL, {headers: {"Authorization": `Bearer ${token}`}});
        const resData = res.data;
        return resData
    })
}; 
