import React, { useState } from 'react';
import axios from 'axios';

const AddProduct = ({ onAddProduct }) => {
  const [product, setProduct] = useState({
    product_code: '',
    product_name: '',
    product_category: '',
    product_description: '',
    cost_price: '',
    retail_price: '',
    animal_category: '',
    quantity: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({ ...prevProduct, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { product_id, ...newProduct } = product;
      const response = await axios.post('http://localhost:3000/products', product);
      onAddProduct(response.data);
      setProduct({
        product_code: '',
        product_name: '',
        product_category: '',
        product_description: '',
        cost_price: '',
        retail_price: '',
        animal_category: '',
        quantity: ''
      });
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 lg-auto max-w-2xl lg:py-15" style={{width: `400px`}}>
        <h2 className="text-2xl font-bold mb-4 text-black">Add New Product</h2>

        <div className="w-full max-w-xl">
          <form onSubmit={handleSubmit}>

        
              <label className="leading-7 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Code
                <input
                  type="text"
                  name="product_code"
                  value={product.product_code}
                  onChange={handleChange}
                  placeholder="Product Code"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-4"
                  required
                />
              </label>
      

            <div className="w-full">
              <label className="leading-7 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name
                <input
                  type="text"
                  name="product_name"
                  value={product.product_name}
                  onChange={handleChange}
                  placeholder="Product Name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-4"
                  required
                />
              </label>
            </div>

            <div className="w-full">
              <label className="leading-7 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Category
                <input
                  type="text"
                  name="product_category"
                  value={product.product_category}
                  onChange={handleChange}
                  placeholder="Product Category"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-4"
                  required
                />
              </label>
            </div>

            <div className="w-full">
              <label className="leading-7 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description
              <textarea
                type="text"
                name="product_description"
                value={product.product_description}
                onChange={handleChange}
                placeholder="Product Description"
                rows="8" 
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-4"
                required
                
              />
              </label>
            </div>

            <div className="w-full">
              <label className="leading-7 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cost Price
              <input
                type="number"
                name="cost_price"
                value={product.cost_price}
                onChange={handleChange}
                placeholder="Cost Price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-4"
                required
              />
              </label>
            </div>

            <div className="w-full">
              <label className="leading-7 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Retail Price
              <input
                type="number"
                name="retail_price"
                value={product.retail_price}
                onChange={handleChange}
                placeholder="Retail Price"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-4"
                required
              />
              </label>
            </div>

            <div className="w-full">
              <label className="leading-7 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Animal Category
              <input
                type="text"
                name="animal_category"
                value={product.animal_category}
                onChange={handleChange}
                placeholder="Animal Category"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-4"
                required
              />  
              </label>
            </div>

            <div className="w-full">
              <label className="leading-7 block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity
              <input
                type="number"
                name="quantity"
                value={product.quantity}
                onChange={handleChange}
                placeholder="Quantity"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-4"
                required
              />
              </label>
            </div>

            <button type="submit" className="bg-green-500 hover:bg-green-700 transition duration-500 text-white font-bold py-2 px-4 rounded">Add Product</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
