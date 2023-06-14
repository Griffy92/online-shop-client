import * as React from "react"
import { useState, useEffect } from 'react';
import axios from 'axios';
import OrderDetails from './OrderDetails';

const AllOrders = () => {
  const [orders, setOrders] = useState([]);
  const [filteredOrders, setFilteredOrders] = useState([]);
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [filterValue, setFilterValue] = useState(''); // State to hold the filter value
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

  useEffect(() => {
    const filtered = orders.filter(order => {
      return (
        order.id.toString().includes(filterValue) ||
        order.user_id.toString().includes(filterValue) ||
        order.orderstatus.toLowerCase().includes(filterValue.toLowerCase()) ||
        order.created_at.includes(filterValue) ||
        order.email.toLowerCase().includes(filterValue.toLowerCase()) ||
        order.shipping_address.toLowerCase().includes(filterValue.toLowerCase()) ||
        order.shipping_cost.toString().includes(filterValue) ||
        order.shipping_name.toLowerCase().includes(filterValue.toLowerCase()) ||
        order.amount_subtotal.toString().includes(filterValue) ||
        order.amount_total.toString().includes(filterValue)
      );
    });
    setFilteredOrders(filtered);
  }, [orders, filterValue]);

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
    }
    setSortConfig({ key, direction });

    // Sort the filteredOrders based on the selected key and direction
    const sortedOrders = [...filteredOrders].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
      return 0;
    });

    setFilteredOrders(sortedOrders);
  };

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">List of Orders</h1>

      <div className="text-right">
    <input
    type="text"
    value={filterValue}
    onChange={handleFilterChange}
    placeholder="Filter..."
    className="border border-gray-300 rounded px-4 py-2 mt-4"
    />
    </div>

    <table className="table-auto">
  <thead>
    <tr>
      <th onClick={() => handleSort('id')}>Order ID</th>
      <th onClick={() => handleSort('user_id')}>User ID</th>
      <th onClick={() => handleSort('orderstatus')}>Status</th>
      <th onClick={() => handleSort('created_at')}>Created At</th>
      <th onClick={() => handleSort('email')}>Email</th>
      <th onClick={() => handleSort('shipping_address')}>Shipping Address</th>
      <th onClick={() => handleSort('shipping_cost')}>Shipping Cost</th>
      <th onClick={() => handleSort('shipping_name')}>Shipping Name</th>
      <th onClick={() => handleSort('amount_subtotal')}>Amount Subtotal</th>
      <th onClick={() => handleSort('amount_total')}>Amount Total</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody>
    {filteredOrders.map((order) => (
      <tr key={order.id}>
        <td>{order.id}</td>
        <td>{order.user_id}</td>
        <td>{order.orderstatus}</td>
        <td>{order.created_at}</td>
        <td>{order.email}</td>
        <td>{order.shipping_address}</td>
        <td>{order.shipping_cost}</td>
        <td>{order.shipping_name}</td>
        <td>{order.amount_subtotal}</td>
        <td>{order.amount_total}</td>
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
                  <p>User ID: {order.user_id}</p>
                  <p>Order Status: {order.orderstatus}</p>
                  <p>Created At: {order.created_at}</p>
                  <p>Email: {order.email}</p>
                  <p>Shipping Address: {order.shipping_address}</p>
                  <p>Shipping Cost: {order.shipping_cost}</p>
                  <p>Shipping Name: {order.shipping_name}</p>
                  <p>Amount Subtotal: {order.amount_subtotal}</p>
                  <p>Amount Total: {order.amount_total}</p>

                  <h3 className="text-lg font-semibold mt-4">Products:</h3>
                  <ul>
                    {order.products.map((product) => (
                      <li key={product.id}>
                        <p>Product ID: {product.id}</p>
                        <p>Product Code: {product.product_code}</p>
                        <p>Product Name: {product.product_name}</p>
                         {/* Display other product information here */}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={closeOrderDetails}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 mt-4 rounded"
                  >
                    Close
                  </button>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    )}
    </div>
);
};

export default AllOrders;
