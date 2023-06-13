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
    <div>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="product_code"
          value={product.product_code}
          onChange={handleChange}
          placeholder="Product Code"
          required
        />
        <input
          type="text"
          name="product_name"
          value={product.product_name}
          onChange={handleChange}
          placeholder="Product Name"
          required
        />
        <input
          type="text"
          name="product_category"
          value={product.product_category}
          onChange={handleChange}
          placeholder="Product Category"
          
        />
        <input
          type="text"
          name="product_description"
          value={product.product_description}
          onChange={handleChange}
          placeholder="Product Description"
          
        />

        <input
          type="number"
          name="cost_price"
          value={product.cost_price}
          onChange={handleChange}
          placeholder="COST PRICE"
          required
        />
          <input
          type="number"
          name="retail_price"
          value={product.retail_price}
          onChange={handleChange}
          placeholder="Retail Price"
          required
        />
          <input
          type="text"
          name="animal_category"
          value={product.animal_category}
          onChange={handleChange}
          placeholder="Animal Category"
          
        />

        <input
          type="number"
          name="quantity"
          value={product.quantity}
          onChange={handleChange}
          placeholder="Quantity"
          required
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;
