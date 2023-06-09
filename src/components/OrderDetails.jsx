import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OrderDetails = ({ orderId }) => {

    const [order, setOrder] = useState({});
    const [editing, setEditing] = useState(false);
    const [quantity, setQuantity] = useState(0);
    const [status, setStatus] = useState('');
    const token = localStorage.getItem('token');

useEffect(() => {
    const fetchOrder = async () => {
        try {
        const response = await axios.get(`http://localhost:3000/orders/${orderId}`, {
            headers: {
            "Authorization": `Bearer ${token}`
            }
        });
        console.log(response.data);
        setOrder(response.data);
        setStatus(response.data.orderstatus);
        } catch (error) {
        console.error('Error fetching order:', error);
        }
    };

    fetchOrder();
}, [orderId, token]);

const handleEdit = () => {
    setEditing(true);
    setQuantity(order.quantity);
};

const handleSave = async () => {
    try {
        const response = await axios.put(
        `http://localhost:3000/orders/${orderId}`,
        {
            quantity,
            orderstatus: status,
        },
        {
        headers: {
            "Authorization": `Bearer ${token}`
        },
        });
    console.log(response.data);
    setOrder(response.data);
    setEditing(false);
    } catch (error) {
    console.error('Error updating order:', error);
    }
};

    if (!order || Object.keys(order).length === 0) {
    return null;
    }

return React.createElement(
    'div',
    null,
    React.createElement('h2', null, `Order ID: ${order.id}`),
    React.createElement('p', null, `Product ID: ${order.product_id}`),
    React.createElement('p', null, `User ID: ${order.user_id}`),
    editing
        ? React.createElement(
            'div',
            null,
            React.createElement(
            'label',
            null,
            'Quantity:',
            React.createElement('input', {
                type: 'number',
                value: quantity,
            onChange: (e) => setQuantity(e.target.value),
            })
        ),
            React.createElement(
            'label',
            null,
            'Status:',
            React.createElement('input', {
                type: 'text',
                value: status,
            onChange: (e) => setStatus(e.target.value),
            })
        ),
        React.createElement('button', { onClick: handleSave }, 'Save')
        )
    : React.createElement('div', null,
        React.createElement('p', null, `Quantity: ${order.quantity}`),
        React.createElement('p', null, `Status: ${order.orderstatus}`),
        React.createElement('button', { onClick: handleEdit }, 'Edit')
        )
    );
};

export default OrderDetails;
