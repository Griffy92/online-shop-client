import axios from 'axios';

const baseURL = 'http://localhost:3000/';

export const CartAPI = {
    addProduct: function (order_id, product_id, payload) {
        return axios.put(baseURL + 'products/' + product_id + '/orders/' + order_id, payload);
    },
    removeProduct: function (order_id, product_id, payload) {
        return axios.delete(baseURL + 'products/' + product_id + '/orders/' + order_id, payload);
    },
}