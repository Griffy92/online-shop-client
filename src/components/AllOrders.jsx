import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from './layout';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);
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
            </tr>
        ))}
        </tbody>
    </table>

</div>
);
};


export default AllOrders;
