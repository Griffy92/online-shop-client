import React from 'react';
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCardGenerator from './product-card-generator';

const CategoryContent = () => {
  const [content, setContent] = useState(null)

  useEffect(() => {
    axios.get('http://localhost:3000/products/')
      .then(content => {
        setContent(content.data)
        console.log(content.data)
      });
  }, [])

  return (
    <div className='overflow-hidden'>
          {content !== null ? (
              <ProductCardGenerator productArray={content}  />
          ) : (
            <div>Loading Content...</div>
          )}
      </div>
  )
}

export default CategoryContent;