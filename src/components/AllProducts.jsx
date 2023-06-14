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
  <div>
  <h1 className="text-2xl font-bold mb-4">List of Products</h1>
  <button
    onClick={toggleAddProduct}
    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
  >
    Add New Product
  </button>
  {showAddProduct && (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl font-bold mb-4">Add New Product</h2>
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
        <th onClick={() => handleSort('product_code')} className="cursor-pointer">
          Product Code
        </th>
        <th onClick={() => handleSort('product_name')} className="cursor-pointer">
          Product Name
        </th>
        <th onClick={() => handleSort('product_category')} className="cursor-pointer">
          Product Category
        </th>
        <th onClick={() => handleSort('product_description')} className="cursor-pointer">
          Product Description
        </th>
        <th onClick={() => handleSort('cost_price')} className="cursor-pointer">
          Cost Price
        </th>
        <th onClick={() => handleSort('retail_price')} className="cursor-pointer">
          Retail Price
        </th>
        <th onClick={() => handleSort('animal_category')} className="cursor-pointer">
          Animal Category
        </th>
        <th onClick={() => handleSort('quantity')} className="cursor-pointer">
          Quantity
        </th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {filteredProducts.map((product) => (
        <tr key={product.id}>
          <td>{product.product_code}</td>
          <td>{product.product_name}</td>
          <td>{product.product_category}</td>
          <td>{product.product_description}</td>
          <td>{product.cost_price}</td>
          <td>{product.retail_price}</td>
          <td>{product.animal_category}</td>
          <td>{product.quantity}</td>
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

  </div>
);
    }


export default AllProducts;
