import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import {UserContext} from '../providers/UserProvider';
import OrderDetails from './OrderDetails';

const UserOrders = () => {
    const { user } = useContext(UserContext);
    const [orders, setOrders] = useState([]);
    const [selectedOrderId, setSelectedOrderId] = useState(null);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: null });

    useEffect(() => {

        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://localhost:3000/orders', {
                    headers: {
                        Authorization: `Bearer ${user.token}`,
                    },
                });
                
                const userOrders = response.data.filter(order => order.user_id === user.id);
                setOrders(userOrders);
            } catch (error) {
                console.error('Error fetching orders:', error);
            };
        };

        fetchOrders();

    }, [user.token, user.id]);

    const openOrderDetails = (orderId) => {
        setSelectedOrderId(orderId);
    };

    const closeOrderDetails = () => {
        setSelectedOrderId(null);
    };

    const handleSort = (key) => {
        let direction = 'ascending';

        if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        };

        setSortConfig({ key, direction });

        const sortedOrders = [...orders].sort((a, b) => {
            if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
            if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
            return 0;
        });

        setOrders(sortedOrders);
    };

    const localTime = (timeUTC) => {
        const utcTime = new Date(timeUTC);
        const local = utcTime.toLocaleDateString();
        return local;
    }

    return (
        <div>
            <table className="table-auto">
                <thead>
                    <tr>
                        {/* <th onClick={() => handleSort('id')}>Order ID</th> */}
                        {/* <th onClick={() => handleSort('user_id')}>User ID</th> */}
                        <th onClick={() => handleSort('orderstatus')}>Status</th>
                        <th onClick={() => handleSort('created_at')}>Created At</th>
                        {/* <th onClick={() => handleSort('email')}>Email</th> */}
                        {/* <th onClick={() => handleSort('shipping_address')}>Shipping Address</th>
                        <th onClick={() => handleSort('shipping_cost')}>Shipping Cost</th>
                        <th onClick={() => handleSort('shipping_name')}>Shipping Name</th>
                        <th onClick={() => handleSort('amount_subtotal')}>Amount Subtotal</th>
                        <th onClick={() => handleSort('amount_total')}>Amount Total</th> */}
                        {/* <th>Actions</th> */}
                    </tr>
                </thead>
                <tbody>
                    {orders.map((order) => (
                    <tr key={order.id}>
                        {/* <td>{order.id}</td> */}
                        {/* <td>{order.user_id}</td> */}
                        <td>{order.orderstatus}</td>
                        <td>{localTime(order.created_at)}</td>
                        {/* <td>{order.email}</td> */}
                        {/* <td>{order.shipping_address}</td>
                        <td>{order.shipping_cost}</td>
                        <td>{order.shipping_name}</td>
                        <td>{order.amount_subtotal}</td>
                        <td>{order.amount_total}</td> */}
                        <td>
                            <button
                            onClick={() => openOrderDetails(order.id)}
                            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                            >
                            Order Details
                            </button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            </table>

            {selectedOrderId && (
            <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50">
                <div className="bg-white rounded-lg p-6 mt-20">
                    <h2 className="text-2xl font-bold mb-4">Order Details</h2>
                    {orders.map((order) => {
                        if (order.id === selectedOrderId) {
                            return (
                                <div key={order.id}>
                                    <p>Order ID: {order.id}</p>
                                    {/* <p>User ID: {order.user_id}</p> */}
                                    <p>Order Status: {order.orderstatus}</p>
                                    <p>Created At: {order.created_at}</p>
                                    <p>Email: {order.email}</p>
                                    <p>Shipping Address: {order.shipping_address}</p>
                                    <p>Shipping Cost: {order.shipping_cost}</p>
                                    <p>Shipping Name: {order.shipping_name}</p>
                                    <p>Amount Subtotal: {order.amount_subtotal}</p>
                                    <p>Amount Total: {order.amount_total}</p>

                                    <h3 className="text-lg font-semibold mt-4">Order Contents:</h3>
                                    <ul>
                                    {order.products.map((product) => (
                                        <li key={product.id}>
                                        <p>Product ID: {product.id}</p>
                                        <p>Product Code: {product.product_code}</p>
                                        <p>Product Name: {product.product_name}</p>
                                        </li>
                                    ))}
                                    </ul>
                                </div>
                            );
                        }
                        return null;
                    })}
                    <button
                    onClick={closeOrderDetails}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 mt-4 rounded"
                    >
                    Close
                    </button>
                </div>
            </div>
            )}
        </div>  
    )
};

export default UserOrders;