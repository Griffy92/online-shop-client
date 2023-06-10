import React from 'react'
import ProductControls from '../components/product-controls'

export default function Product({ pageContext: { product } }) {
    return (
      <div className="container w-1/2 mx-auto p-6">
        <div>
            <img src={ "http://localhost:3000" + product.image } alt={ product.product_name } className='mx-auto'/>
        </div>

        <strong>{ product.product_name }</strong>

        <div>
            <strong>Animal category:</strong> { product.animal_category }
        </div>
        <div>
            <strong>Category:</strong> { product.product_category }
        </div>
        <div>
            <strong>Description: </strong>
            { product.product_description }
        </div>
        <div>
            <strong>Price: </strong>
            ${ product.retail_price }
        </div>
        <div>
            <strong>Stock: </strong>
            { product.quantity }
        </div>
        <div className="w-full mx-auto">
            <ProductControls product={product}/>
        </div>
      </div>
    )
}