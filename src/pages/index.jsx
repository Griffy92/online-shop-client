import * as React from "react"
import Layout from '../components/layout'
import IndexCarousel from "../components/index-carousel"
import FeaturedProducts from "../components/featured-products"
import IndexProductCarousel from "../components/index-product-carousel"

const IndexPage = () => {
	return (
		<Layout>
			<div className="bg-cover bg-center h-auto text-white py-24 px-10 bg-red-600">
				<div className="md:w-1/2">
					<p className="text-3xl font-bold">This is a banner - image didn't work, but don't hate the idea of having one on the landing page?</p>
					<p className="text-2xl mb-10 leading-none">This might be a bit large though?</p>
					<a href="#" className="bg-purple-800 py-4 px-8 text-white font-bold uppercase text-xs rounded hover:bg-gray-200 hover:text-gray-800">Call to Action</a>
				</div>  
			</div>
			<h1>Website coming soon| This is the index</h1>
			{/* <IndexCarousel />	 */}
			<IndexProductCarousel />
			{/* <FeaturedProducts /> */}
		</Layout>
		
	)
}

export default IndexPage

export const Head = () => <title>Home Page</title> 
 