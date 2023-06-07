import * as React from 'react';
import Layout from '../components/layout'

const ProductPage = () => {

    const productItem = { 
        item: "A Cute Kitty",
        description: "Item Description - Item 1",
        bgcol: "red", 
        url: "http://placekitten.com/500/500",
        stock: 5,
        category: "Kitten"
        }

    console.log(productItem.url)

    return (
        <>
            <div className='container'>
                <div className="card w-1/2 bg-white shadow-xl mx-auto">
                    <figure className="px-10 pt-10">
                        <img src={productItem.url} alt="Shoes" className="rounded-xl" />
                    </figure>
                    <div className="card-body px-10 pt-10 items-center text-center">
                        <h2 className="card-title text-black">{productItem.item}</h2>
                        <p className="text-black">{productItem.description}</p>
                        <table class="table-fixed w-1/2">
                            <tbody>
                                <tr>
                                    <td className="w-1/2 text-left text-black">Colour</td>
                                    <td className="w-1/2 text-right text-black">{productItem.bgcol}</td>
                                </tr>
                                <tr>
                                    <td className="w-1/2 text-left text-black">Category</td>
                                    <td className="w-1/2 text-right text-black">{productItem.category}</td>
                                </tr>
                                <tr>
                                    <td className="w-1/2 text-left text-black">Left in stock</td>
                                    <td className="w-1/2 text-right text-black">{productItem.stock}</td>
                                </tr>
                            </tbody>
                        </table>
                        <div className="card-actions">
                            <button className="btn btn-primary">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductPage;