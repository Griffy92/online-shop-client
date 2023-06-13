import React from 'react'
import ProductControls from '../components/product-controls'

export default function Product({ pageContext: { product } }) {
    return (
        <div className="container mx-auto p-6 bg-white h-3/4 flex flex-col items-center pd">
            <div className="flex flex-wrap">
                <div className='w-full md:w-1/2 flex items-start'>
                    <div className='p-4'>
                        <div className='image-container'>
                        <img src={ "http://localhost:3000" + product.image } alt={ product.product_name } className="w-full h-full object-cover" style={ { height: '470px' } }/>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/2 pl-6 flex flex-col justify-center">
                    <div className='p-4'>
                        <strong>{ product.product_name }</strong>
                    </div>
                    <div className='p-4'>
                        <strong>Animal Category: </strong> 
                        { product.animal_category }
                    </div>
                    <div className='p-4'> 
                        <strong>Product Category: </strong> 
                        { product.product_category }
                    </div>
                    <div className='p-4'> 
                        <strong>Price: </strong>
                        ${ product.retail_price }
                    </div>
                    <div className='p-4'>
                        <strong>Stock: </strong>
                        { product.quantity }* <small> Stock is not reserved until purchased. Available quantity may be lower than expected at time of checkout.</small>
                    </div>
                    <br />
                    <div className="w-full p-4">
                        <ProductControls product={product}/>
                    </div>
                </div>
                <div className='mt-6 p-4 mr'>
                    <strong>Description: </strong>
                    { product.product_description }
                </div>
            </div>
        </div>
    )
}