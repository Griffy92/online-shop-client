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
    <section class="bg-white dark:bg-gray-900">
      <div class="py-8 px-4 lg-auto max-w-2xl lg:py-15" style={{width: `400px`}}>
        <h2 className="text-2xl font-bold mb-4 text-black">Add New Product</h2>

        <div class="w-full max-w-xl">
          <form onSubmit={handleSubmit}>

        
              <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Code</label>
                <input
                  type="text"
                  name="product_code"
                  value={product.product_code}
                  onChange={handleChange}
                  placeholder="Product Code"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-4"
                  required
                />
      

            <div class="w-full">
              <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Name</label>
                <input
                  type="text"
                  name="product_name"
                  value={product.product_name}
                  onChange={handleChange}
                  placeholder="Product Name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-4"
                  required
                />
            </div>

            <div class="w-full">
            <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Product Category</label>
              <input
                type="text"
                name="product_category"
                value={product.product_category}
                onChange={handleChange}
                placeholder="Product Category"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-4"
                required
                
              />
            </div>

            <div class="w-full">
              <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Description</label>
              <textarea
                type="text"
                name="product_description"
                value={product.product_description}
                onChange={handleChange}
                placeholder="Product Description"
                rows="8" 
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-4"
                required
                
              />
            </div>

            <div class="w-full">
              <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cost Price</label>
              <input
                type="number"
                name="cost_price"
                value={product.cost_price}
                onChange={handleChange}
                placeholder="Cost Price"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-4"
                required
              />
            </div>

            <div class="w-full">
              <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Retail Price</label>
              <input
                type="number"
                name="retail_price"
                value={product.retail_price}
                onChange={handleChange}
                placeholder="Retail Price"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-4"
                required
              />
            </div>

            <div class="w-full">
              <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Animal Category</label>
              <input
                type="text"
                name="animal_category"
                value={product.animal_category}
                onChange={handleChange}
                placeholder="Animal Category"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-4"
                required
              />  
            </div>

            <div class="w-full">
              <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Quantity</label>
              <input
                type="number"
                name="quantity"
                value={product.quantity}
                onChange={handleChange}
                placeholder="Quantity"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-4"
                required
              />
            </div>

            <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Add Product</button>
          </form>
          </div>
      </div>
    </section>
  );
};

export default AddProduct;
