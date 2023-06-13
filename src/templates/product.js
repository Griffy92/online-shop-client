import React from 'react'
import ProductControls from '../components/product-controls'
import RemoveProductControls from '../components/remove-product-controls'

export default function Product({ pageContext: { product } }) {
    return (
      <div className="container w-3/4 mx-auto p-6 bg-white h-3/4">
        <div className='mx-auto'>
            <img src={ "http://localhost:3000" + product.image } alt={ product.product_name } className='mx-auto h-60'/>
            
        </div>

        <strong>{ product.product_name }</strong>

        <div>
            <strong>Animal Category: </strong> { product.animal_category }
        </div>
        <div>
            <strong>Product Category: </strong> { product.product_category }
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
            { product.quantity }* <small> Stock is not reserved until purchased. Available quantity may be lower than expected at time of checkout.</small>
        </div>
        <br />
        <div className="w-full mx-auto">
            <ProductControls product={product}/>
            <RemoveProductControls product={product}/>
        </div>
      </div>
    )
}