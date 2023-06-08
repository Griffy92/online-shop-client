import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from './layout';
import OrderDetails from './OrderDetails';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);
    const [selectedOrderId, setSelectedOrderId] = useState(null);
    let token = localStorage.getItem('token');

useEffect(() => {
    const fetchOrders = async () => {
        try {
        const response = await axios.get('http://localhost:3000/orders', {
            headers: {
            "Authorization": `Bearer ${token}`
            }
        });
        console.log(response.data);
        setOrders(response.data || []);
        } catch (error) {
        console.error('Error fetching orders:', error);
        }
    };
    fetchOrders();
}, []);

const openOrderDetails = (orderId) => {
    setSelectedOrderId(orderId);
};

const closeOrderDetails = () => {
    setSelectedOrderId(null);
};

    return (
    <div>
        <h1>List of Orders</h1>

        <table>
        <thead>
            <tr>
            <th>Order ID</th>
            <th>Product ID</th>
            <th>User ID</th>
            <th>Quantity</th>
            <th>Status</th>
            <th>Actions</th>
            </tr>
        </thead>
        
        <tbody>
            {orders.map((order) => (
            <tr key={order.id}>
                <td>{order.id}</td>
                <td>{order.product_id}</td>
                <td>{order.user_id}</td>
                <td>{order.quantity}</td>
                <td>{order.orderstatus}</td>
                <td>
                <button onClick={() => openOrderDetails(order.id)}>Order Details</button>
                </td>
            </tr>
        ))}
        </tbody>
        </table>

    {selectedOrderId && (
        <div>
            <h2>Order Details</h2>
            <OrderDetails orderId={selectedOrderId} />
            <button onClick={closeOrderDetails}>Close</button>
        </div>
    )}
    </div>
);
};

export default AllOrders;
