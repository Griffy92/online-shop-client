import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Layout from './layout';

const AllOrders = () => {
    const [orders, setOrders] = useState([]);

useEffect(() => {
    const fetchOrders = async () => {
        try {
            const response = await axios.get('http://localhost:3000/orders');
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
                <th>Status</th>
            </tr>
        </thead>
    </table>

</div>
);
};


export default AllOrders;
