import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCardGenerator from './product-card-generator';

const CategoryContent = () => {

  const [content, setContent] = useState(null)
  const [productArray, setProductArray] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000/products/')
      .then(content => {
        setContent(content.data)
        setProductArray(content.data)
        productArray.map()

      });
  }, [])

  return (
    <div>
          {content !== null ? (
              <ProductCardGenerator productArray={content}  />
          ) : (
            <div>Loading Content...</div>
          )}
      </div>
  )
}

export default CategoryContent;