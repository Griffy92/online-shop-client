import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductDetails from './ProductDetails';
import AddProduct from './AddProduct';

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
  const [filterValue, setFilterValue] = useState('');
  const token = localStorage.getItem('token');
  const [showAddProduct, setShowAddProduct] = useState(false);
  const [productDetailsActionCompleted, setProductDetailsActionCompleted] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:3000/products', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProducts(response.data || []);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [token, productDetailsActionCompleted]);

  useEffect(() => {
    const filtered = products.filter((product) => {
      return (
        product.product_code.toString().includes(filterValue) ||
        product.product_name.toLowerCase().includes(filterValue.toLowerCase()) ||
        product.product_category.toLowerCase().includes(filterValue.toLowerCase()) ||
        product.product_description.toLowerCase().includes(filterValue.toLowerCase()) ||
        product.cost_price.toString().includes(filterValue) ||
        product.retail_price.toString().includes(filterValue) ||
        product.animal_category.toLowerCase().includes(filterValue.toLowerCase()) ||
        product.quantity.toString().includes(filterValue)
      );
    });
    setFilteredProducts(filtered);
  }, [products, filterValue]);

  const openProductDetails = (productId) => {
    setSelectedProductId(productId);
  };

  const closeProductDetails = () => {
    setSelectedProductId(null);
  };

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
      if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
      if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
      return 0;
    });

    setFilteredProducts(sortedProducts);
  };

  const handleFilterChange = (e) => {
    setFilterValue(e.target.value);
  };

  const handleAddProduct = (newProduct) => {
    setProducts((prevProducts) => [...prevProducts, newProduct]);
  };

  const toggleAddProduct = () => {
    setShowAddProduct((prevShowAddProduct) => !prevShowAddProduct);
  };

  const handleActionCompletion = () => {
    setProductDetailsActionCompleted(true);
  };

  useEffect(() => {
    if (productDetailsActionCompleted) {
      fetchProducts();
      setProductDetailsActionCompleted(false);
    }
  }, [productDetailsActionCompleted]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/products', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProducts(response.data || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

return (
  <>
    <h1 className="text-2xl font-bold mb-4">List of Products</h1>    

    <button
      onClick={toggleAddProduct}
      className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
    >
      Add New Product
    </button>

    {showAddProduct && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-10">
        <div className="bg-white p-6 rounded shadow-lg">
          <AddProduct onAddProduct={handleAddProduct} />
          <button
            onClick={toggleAddProduct}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded mt-4"
          >
            Close
          </button>
        </div>
      </div>
    )}
    
    <div className="text-right">
    {/* Filter */}
    <input
      type="text"
      value={filterValue}
      onChange={handleFilterChange}
      placeholder="Filter..."
      className="border border-gray-300 rounded px-4 py-2 mt-4 mb-3"
    />
  </div>

    <div className="relative overflow-x-auto z-1">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3 cursor-pointer" onClick={() => handleSort('product_code')}>
                Product Code
              </th>
              <th scope="col" className="px-6 py-3 cursor-pointer " onClick={() => handleSort('product_name')}>
                Product Name
              </th>
              <th scope="col" className="px-6 py-3 cursor-pointer " onClick={() => handleSort('product_category')}>
                Product Category
              </th>
              <th scope="col" className="px-6 py-3 cursor-pointer " onClick={() => handleSort('product_description')}>
                Product Description
              </th>
              <th scope="col" className="px-6 py-3 cursor-pointer " onClick={() => handleSort('cost_price')}>
                Cost Price
              </th>
              <th scope="col" className="px-6 py-3 cursor-pointer " onClick={() => handleSort('retail_price')}>
                Retail Price
              </th>
              <th scope="col" className="px-6 py-3 cursor-pointer " onClick={() => handleSort('animal_category')}>
                Animal Category
              </th>
              <th scope="col" className="px-6 py-3 cursor-pointer " onClick={() => handleSort('quantity')}>
                Quantity
              </th>
              <th scope="col" className="px-6 py-3 cursor-pointer ">Actions</th>
            </tr>
          </thead>
          
          <tbody>
            {filteredProducts.map((product) => (
              <tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">{product.product_code}</td>
                <td className="px-6 py-4">{product.product_name}</td>
                <td className="px-6 py-4">{product.product_category}</td>
                <td className="px-6 py-4">{product.product_description}</td>
                <td className="px-6 py-4">{product.cost_price}</td>
                <td className="px-6 py-4">{product.retail_price}</td>
                <td className="px-6 py-4">{product.animal_category}</td>
                <td className="px-6 py-4">{product.quantity}</td>

                <td>
                  <button
                    onClick={() => openProductDetails(product.id)}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                  >
                    Product Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
      </table>
    </div>

    {selectedProductId && (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded shadow-lg">
          <h2 className="text-xl font-bold mb-4">Product Details</h2>
          <ProductDetails productId={selectedProductId} onActionCompletion={handleActionCompletion} />
          <button onClick={closeProductDetails} className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            Close
          </button>
        </div>
      </div>
    )}
  </>
);
};

export default AllProducts;
