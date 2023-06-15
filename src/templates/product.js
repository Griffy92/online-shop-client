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
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{ product.product_name }</h2>
                    </div>

                    <div className='p-4 font-medium text-gray-700'>
                        <strong>Animal Category: </strong> 
                        <p className="font-light text-gray-700">{ product.animal_category }</p>
                    </div>

                    <div className='p-4 font-medium text-gray-700'> 
                        <strong>Product Category: </strong> 
                        <p className="font-light text-gray-700">{ product.product_category }</p>
                    </div>

                    <div className='p-4 font-medium text-gray-700'> 
                        <strong>Price: </strong>
                        <p className="font-light text-gray-700"> ${ product.retail_price } </p>
                    </div>

                    <div className='p-4 font-medium text-gray-700'>
                        <strong>Stock: </strong>
                        <p className="font-light text-gray-700"> { product.quantity }* <small style={{color: `grey`}}> Stock is not reserved until purchased. Available quantity may be lower than expected at time of checkout.</small></p>
                    </div>

                    <br />
                    <div className="w-full p-4">
                        <ProductControls product={product}/>
                    </div>

                </div>

                <div className='p-4 font-medium text-gray-700'>
                    <strong>Description: </strong>
                    <p className="font-light text-gray-700"> { product.product_description } </p>
                </div>
            </div>
        </div>
    )
}