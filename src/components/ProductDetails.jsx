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
      <section className="bg-white dark:bg-gray-900">
        
        {editing ? (
          <div>
            <div className="w-full m-auto max-w-xl">

            <label className="mt-5 leading-7 block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Product Code:
              <input
                type="text"
                name="product_code"
                value={formData.product_code || ''}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-4"
              />
            </label>

            <div className="w-full">
              <label className="leading-7 block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Product Name:
                <input
                  type="text"
                  name="product_name"
                  value={formData.product_name || ''}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-4"
                />
              </label>
            </div>

            <div className="w-full">
              <label className="leading-7 block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Product Category:
                <input
                  type="text"
                  name="product_category"
                  value={formData.product_category || ''}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-4"
                />
              </label>
            </div>
        
            <div className="w-full">
              <label className="leading-7 block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Product Description:
                <input
                  type="text"
                  name="product_description"
                  value={formData.product_description || ''}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-4"
                />
              </label>
            </div>


            <div className="w-full">
              <label className="leading-7 block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Cost Price:
                <input
                  type="number"
                  name="cost_price"
                  value={formData.cost_price || ''}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-4"
                />
              </label>
            </div>


            <div className="w-full">
              <label className="leading-7 block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Retail Price:
                <input              type="number"
                  name="retail_price"
                  value={formData.retail_price || ''}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-4"
                />
              </label>
            </div>


            <div className="w-full">
              <label className="leading-7 block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Animal Category:
                <input
                  type="text"
                  name="animal_category"
                  value={formData.animal_category || ''}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-4"
                />
              </label>
            </div>


            <div className="w-full">
              <label className="leading-7 block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Quantity:
                <input
                  type="number"
                  name="quantity"
                  value={formData.quantity || ''}
                  onChange={handleChange}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 mb-4"
                />
              </label>
            </div>


            <button  
              className="bg-green-400 hover:bg-green-600 transition duration-500 text-white font-semibold py-2 px-4 mt-2 rounded"
              onClick={handleSave}>
                Save
              </button>
          </div>
        </div>

        ) : (

          <>
            <div className="p-6 space-y-6 text-base leading-relaxed text-gray-800 dark:text-gray-400">
              <p className="mb-1">Product Code: {product.product_code}</p>
              <p className="mb-1">Product Name: {product.product_name}</p>
              <p className="mb-1">Product Category: {product.product_category}</p>
              <p className="mb-1">Product Description: {product.product_description}</p>
              <p className="mb-1">Cost Price: {product.cost_price}</p>
              <p className="mb-1">Retail Price: {product.retail_price}</p>
              <p className="mb-1">Animal Category: {product.animal_category}</p>
              <p className="mb-1">Quantity: {product.quantity}</p>

              <button
                className="bg-blue-600 hover:bg-blue-700 
                transition duration-500 text-white font-semibold py-2 px-6 mt-4 rounded mr-2"
                onClick={handleEdit}
                >
                  Edit
              </button>

              <button
                className="bg-red-500 hover:bg-red-700 transition duration-500 text-white font-semibold py-2 px-4 mt-4 rounded"
                onClick={handleDelete}
              >
                Delete
              </button>

            </div>
          </>
        )}
      </section>
    </div>
  );
}
  
export default ProductDetails;