import React from 'react'

export default function Product({ pageContext: { product } }) {
    return (
      <div style={{ width: 960, margin: "4rem auto" }}>
        <div>
            <img src={ "http://localhost:3000" + product.image } />
        </div>

        <strong>{ product.product_name }</strong>

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