import * as React from 'react';
import Layout from '../components/layout'

const ProductsPage = () => {

    const productsList = [
        {
            id: 1,
            title: "Check Textured Coat",
            category: "Coat",
            price: "175.4",
            color: "Camel",
            size: "M",
            tags: "coat check textured camel brown long sleeves buttoned cuffs",
            image: "http://placekitten.com/301/300"
          },
          {
            id: 2,
            title: "Contrast Check Coat",
            category: "Coat",
            price: "155.4",
            color: "Black",
            size: "L",
            tags: "coat camel black grey marl lapel collar hip flap pockets",
            image: "http://placekitten.com/302/300"
          },
          {
            id: 3,
            title: "White Coat",
            category: "Coat",
            price: "125.4",
            color: "White",
            size: "S",
            tags: "coat camel white short sleeves double-breasted button",
            image: "http://placekitten.com/303/300"
          },
          {
            id: 4,
            title: "Basic Hoodie",
            category: "Hoodies / SweatShirts",
            price: "55.4",
            color: "Purple",
            size: "M",
            tags: "hoodie solid plain purple long baggy hood",
            image: "http://placekitten.com/309/300"
          },
          {
            id: 5,
            title: "Basic Hoodie",
            category: "Hoodies / SweatShirts",
            price: "55.4",
            color: "Black",
            size: "L",
            tags: "hoodie solid plain black long baggy hood",
            image: "http://placekitten.com/305/300"
          },
          {
            id: 6,
            title: "Basic short Hoodie",
            category: "Hoodies / SweatShirts",
            price: "55.4",
            color: "Gray",
            size: "S",
            tags: "hoodie solid plain gray grey short hood",
            image: "http://placekitten.com/306/300"
          },
          {
            id: 7,
            title: "Basic short Hoodie",
            category: "Hoodies / SweatShirts",
            price: "55.4",
            color: "Gray",
            size: "S",
            tags: "hoodie solid plain gray grey short hood",
            image: "http://placekitten.com/307/300"
          },
          {
            id: 8,
            title: "Basic short Hoodie",
            category: "Hoodies / SweatShirts",
            price: "55.4",
            color: "Gray",
            size: "S",
            tags: "hoodie solid plain gray grey short hood",
            image: "http://placekitten.com/308/300"
          },
          {
            id: 9,
            title: "Basic short Hoodie",
            category: "Hoodies / SweatShirts",
            price: "55.4",
            color: "Gray",
            size: "S",
            tags: "hoodie solid plain gray grey short hood",
            image: "http://placekitten.com/309/300"
          },
          {
            id: 10,
            title: "Basic short Hoodie",
            category: "Hoodies / SweatShirts",
            price: "55.4",
            color: "Gray",
            size: "S",
            tags: "hoodie solid plain gray grey short hood",
            image: "http://placekitten.com/310/300"
          },
          {
            id: 11,
            title: "Basic short Hoodie",
            category: "Hoodies / SweatShirts",
            price: "55.4",
            color: "Gray",
            size: "S", 
            tags: "hoodie solid plain gray grey short hood",
            image: "http://placekitten.com/311/300"
          }
    ];
 

    return (
        <div pageTitle="product">
            <div className="container container mx-auto">
                <div class="bg-white place-content-center grid grid-cols-4 gap-4">
                    {productsList.map((product) => (
                        <div key={product.id}>
                            <img src={product.image} alt={product.title} />
                            <h4 className="card-title text-black">Product: {product.title}</h4>
                            <h5 className="badge badge-secondary">Price: ${product.price}</h5>
                            <h5 className="text-black">Color: {product.color}</h5>
                            <h5>Size: {product.size}</h5>
                            <div className="card-actions">
                                <button className="btn btn-primary">Add to Cart</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProductsPage;

