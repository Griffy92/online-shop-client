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
    // Apply filtering
    const filtered = orders.filter(order => {
      // Replace the condition below with your own filter logic
      return (
        order.id.toString().includes(filterValue) ||
        order.user_id.toString().includes(filterValue) ||
        order.orderstatus.toLowerCase().includes(filterValue.toLowerCase())
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
      <h1>List of Orders</h1>

      <input type="text" value={filterValue} onChange={handleFilterChange} placeholder="Filter..." />

      <table>
        <thead>
          <tr>
            <th onClick={() => handleSort('id')}>Order ID</th>
            <th onClick={() => handleSort('user_id')}>User ID</th>
            <th onClick={() => handleSort('orderstatus')}>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredOrders.map((order) => (
            <tr key={order.id}>

              <td>{order.id}</td>
              <td>{order.user_id}</td>
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
