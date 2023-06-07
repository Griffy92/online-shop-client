import React from 'react'

export default function Product({ pageContext: { product } }) {
    return (
      <div style={{ width: 960, margin: "4rem auto" }}>
        <h1>{product.product_name}</h1>
        <div>
            <strong>Animal category:</strong> {product.animal_category}
        </div>
        <div>
            <strong>Category:</strong> {product.product_category}
        </div>
        <div>
            <strong>Description: </strong>
            {product.product_description}
        </div>
        <div>
            <strong>Price: </strong>
            ${product.retail_price}
        </div>
        <div>
            <strong>Stock: </strong>
            {product.quantity}
        </div>
      </div>
    )
}