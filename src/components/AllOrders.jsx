import * as React from "react"
import { useState, useEffect } from 'react';
import axios from 'axios';

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
				(order.email && order.email.toLowerCase().includes(filterValue.toLowerCase())) ||
				(order.shipping_address && order.shipping_address.toLowerCase().includes(filterValue.toLowerCase())) ||
				(order.shipping_cost &&  order.shipping_cost.toString().includes(filterValue)) ||
				(order.shipping_cost && order.shipping_cost.toLowerCase().includes(filterValue.toLowerCase())) ||
				(order.amount_subtotal && order.amount_subtotal.toString().includes(filterValue)) ||
				(order.amount_total && order.amount_total.toString().includes(filterValue))
			)
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

      <div className=" justify-center">
        <input
          type="text"
          value={filterValue}
          onChange={handleFilterChange}
          placeholder="Filter..."
          className="m-auto h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block px-5 p-2.5 mb-10"
        />
      </div>

    <div className="relative overflow-x-auto overflow-y-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3" onClick={() => handleSort('id')}>Order ID</th>
            <th scope="col" className="px-6 py-3" onClick={() => handleSort('user_id')}>User ID</th>
            <th scope="col" className="px-6 py-3" onClick={() => handleSort('orderstatus')}>Status</th>
            <th scope="col" className="px-6 py-3" onClick={() => handleSort('created_at')}>Created At</th>
            <th scope="col" className="px-6 py-3" onClick={() => handleSort('email')}>Email</th>
            <th scope="col" className="px-6 py-3" onClick={() => handleSort('shipping_address')}>Shipping Address</th>
            <th scope="col" className="px-6 py-3" onClick={() => handleSort('shipping_cost')}>Shipping Cost</th>
            <th scope="col" className="px-6 py-3" onClick={() => handleSort('shipping_name')}>Shipping Name</th>
            <th scope="col" className="px-6 py-3" onClick={() => handleSort('amount_subtotal')}>Amount Subtotal</th>
            <th scope="col" className="px-6 py-3" onClick={() => handleSort('amount_total')}>Amount Total</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
          {filteredOrders.map((order) => (
            <tr key={order.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4">{order.id}</td>
              <td className="px-6 py-4">{order.user_id}</td>
              <td className="px-6 py-4">{order.orderstatus}</td>
              <td className="px-6 py-4">{order.created_at}</td>
              <td className="px-6 py-4">{order.email}</td>
              <td className="px-6 py-4">{order.shipping_address}</td>
              <td className="px-6 py-4">{order.shipping_cost}</td>
              <td className="px-6 py-4">{order.shipping_name}</td>
              <td className="px-6 py-4">{order.amount_subtotal}</td>
              <td className="px-6 py-4">{order.amount_total}</td>
              <td>
                <button
                  onClick={() => openOrderDetails(order.id)}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded font-poppins-medium font-medium"
                >
                  Order Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>



    {selectedOrderId && (
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black bg-opacity-50 z-10">
          <div className="bg-white rounded-lg p-6 mt-20">

            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">

              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
                  Order Details
              </h3>

              <button type="button" onClick={closeOrderDetails} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                  <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
                  </svg>
                  <span className="sr-only" >Close modal</span>
              </button>

            </div>
            <div className="p-6 space-y-6">
              {orders.map((order) => {
                if (order.id === selectedOrderId) {
                  return (
                    <div className="text-base leading-relaxed text-gray-500 dark:text-gray-400" key={order.id}>
                      <p className="mb-1">Order ID: {order.id}</p>
                      <p className="mb-1">User ID: {order.user_id}</p>
                      <p className="mb-1">Order Status: {order.orderstatus}</p>
                      <p className="mb-1">Created At: {order.created_at}</p>
                      <p className="mb-1">Email: {order.email}</p>
                      <p className="mb-1">Shipping Address: {order.shipping_address}</p>
                      <p className="mb-1">Shipping Cost: {order.shipping_cost}</p>
                      <p className="mb-1">Shipping Name: {order.shipping_name}</p>
                      <p className="mb-1">Amount Subtotal: {order.amount_subtotal}</p>
                      <p className="mb-1">Amount Total: {order.amount_total}</p>

                      <h3 className="text-lg font-semibold mt-4 text-black">Products:</h3>
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
      </div>
    )}
    </div>
);
};

export default AllOrders;
