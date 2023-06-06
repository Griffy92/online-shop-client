import React from 'react';
import Layout from '../components/layout';
import ProductCard from '../components/product-card';
import Sidebar from '../components/sidebar';

const CategoryPage = () => {

    const productArray = [
        { item: "Shoes",
         description: "Item Description - Item 1",
         bgcol: "red", 
         url: "http://placekitten.com/500/500"},
         { item: "Chewing Gum",
         description: "Item Description - Item 2",
         bgcol: "orange", 
         url: "http://placekitten.com/501/501"},
         { item: "Cats",
         description: "Item Description - Item 3",
         bgcol: "yellow", 
         url: "http://placekitten.com/502/502"},
         { item: "Teddy Bears",
         description: "Item Description - Item 4",
         bgcol: "green", 
         url: "http://placekitten.com/501/503"},
         { item: "Lego Blocks",
         description: "Item Description - Item 5",
         bgcol: "blue", 
         url: "http://placekitten.com/500/504"},
         { item: "Something Else",
         description: "Item Description - Item 6",
         bgcol: "indigo", 
         url: "http://placekitten.com/501/505"},
         { item: "Tea Cups",
         description: "Item Description - Item 7",
         bgcol: "violet", 
         url: "http://placekitten.com/500/506"},
         { item: "Water",
         description: "Item Description - Item 8",
         bgcol: "red", 
         url: "http://placekitten.com/501/507"},
         { item: "Flu Vax",
         description: "Item Description - Item 9",
         bgcol: "orange", 
         url: "http://placekitten.com/500/508"},
         { item: "Deoderant",
         description: "Item Description - Item 10",
         bgcol: "yellow", 
         url: "http://placekitten.com/501/509"},
         { item: "Keyboards",
         description: "Item Description - Item 11",
         bgcol: "green", 
         url: "http://placekitten.com/500/510"},
         { item: "Mice",
         description: "Item Description - Item 12",
         bgcol: "blue", 
         url: "http://placekitten.com/501/511"},
     ]


    return (
        <Layout>
            <Sidebar />
            <div className="ml-64">
                <div className='grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2'>
                {productArray.map((e) => (
                    <ProductCard product={e}/> 
                ))}        
                </div>
            </div>
        </Layout>
    )
}

export default CategoryPage;