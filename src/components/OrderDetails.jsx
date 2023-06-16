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
				onsole.error('Error fetching order:', error);
			};
		};

		fetchOrder();
	}, [orderId, token]);

	const handleEdit = () => {
		setEditing(true);
		setQuantity(order.quantity);
	};

	const handleSave = async () => {
		try {
			const response = await axios.put(`http://localhost:3000/orders/${orderId}`, 
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
		};
	};

	if (!order || Object.keys(order).length === 0) {
		return null;
	};

    return (
		<div>
			<h2>Order ID: {order.id}</h2>
			<p>Product ID: {order.product_id}</p>
			<p>User ID: {order.user_id}</p>
			{editing ? (
				<div>
					<label>
						Quantity:
						<input
						type="number"
						value={quantity}
						onChange={(e) => setQuantity(e.target.value)}
						/>
					</label>
					<label>
						Status:
						<input
						type="text"
						value={status}
						onChange={(e) => setStatus(e.target.value)}
						/>
					</label>
					<button onClick={handleSave}>Save</button>
				</div>
			) : (
				<div>
					<p>Quantity: {order.quantity}</p>
					<p>Status: {order.orderstatus}</p>
					<button onClick={handleEdit}>Edit</button>
				</div>
			)}
        </div>
	);
};

export default OrderDetails;
