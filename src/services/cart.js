import axios from 'axios';

const baseURL = 'http://localhost:3000/';

export const CartAPI = {
    getProducts: function () {
        return axios.get(baseURL + 'products');
    },
    addProduct: function (order_id, product_id, payload) {
        return axios.put(baseURL + 'addcart/' + order_id + '/' + product_id, payload);
    },
    removeProduct: function (order_id, product_id, payload) {
        return axios.put(baseURL + 'removecart/' + order_id + '/' + product_id, payload);
    },
    newOrder: function (user_id) {
        return axios.get(baseURL + 'users/' + user_id +'/orders/new');
    },
    guestCheckout: function (payload) {
        return axios.get(baseURL + 'guestcheckout/', payload);
    },
    getOrder: function (order_id) {
        return axios.get(baseURL + 'orders/' + order_id);
    },
    this: function () {
        console.log(this)
        return
    }
}