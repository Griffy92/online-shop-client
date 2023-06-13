import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductDetails = ({ productId }) => {
  const [product, setProduct] = useState({});
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({});
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/products/${productId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response.data);
      setProduct(response.data);
      setFormData(response.data);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleSave = async () => {
    try {
      let response;
      if (productId) {
        response = await axios.put(
          `http://localhost:3000/products/${productId}`,
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`
            },
          }
        );
      } else {
        response = await axios.post(
          'http://localhost:3000/products',
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`
            },
          }
        );
      }
      console.log(response.data);
      setProduct(response.data);
      setFormData(response.data);
      setEditing(false);
    } catch (error) {
      console.error('Error updating/creating product:', error);
    }
  };

  const handleDelete = async () => {
    try {
      if (productId) {
        await axios.delete(`http://localhost:3000/products/${productId}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
        setProduct({});
        setFormData({});
      }
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  if (!product || Object.keys(product).length === 0) {
    return null;
  }

  return (
  <div>
  
    <h2>{productId ? 'Product Details' : 'Create New Product'}</h2>
    {editing ? (
      <div>
        <label>
          Product Code:
          <input
            type="text"
            name="product_code"
            value={formData.product_code || ''}
            onChange={handleChange}
          />
        </label>
        <label>
          Product Name:
          <input
            type="text"
            name="product_name"
            value={formData.product_name || ''}
            onChange={handleChange}
          />
        </label>
        <label>
          Product Category:
          <input
            type="text"
            name="product_category"
            value={formData.product_category || ''}
            onChange={handleChange}
          />
        </label>
        <label>
          Product Description:
          <input
            type="text"
            name="product_description"
            value={formData.product_description || ''}
            onChange={handleChange}
          />
        </label>
        <label>
          Cost Price:
          <input
            type="number"
            name="cost_price"
            value={formData.cost_price || ''}
            onChange={handleChange}
          />
        </label>
        <label>
          Retail Price:
          <input
            type="number"
            name="retail_price"
            value={formData.retail_price || ''}
            onChange={handleChange}
          />
        </label>
        <label>
          Animal Category:
          <input
            type="text"
            name="animal_category"
            value={formData.animal_category || ''}
            onChange={handleChange}
          />
        </label>
        <label>
          Quantity:
          <input
            type="number"
            name="quantity"
            value={formData.quantity || ''}
            onChange={handleChange}
          />
        </label>
        <button onClick={handleSave}>Save</button>
      </div>
    ) : (
      <div>
        <p>Product Code: {product.product_code}</p>
        <p>Product Name: {product.product_name}</p>
        <p>Product Category: {product.product_category}</p>
        <p>Product Description: {product.product_description}</p>
        <p>Cost Price: {product.cost_price}</p>
        <p>Retail Price: {product.retail_price}</p>
        <p>Animal Category: {product.animal_category}</p>
        <p>Quantity: {product.quantity}</p>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    )}
  
  </div>
);
    }
  
      export default ProductDetails;