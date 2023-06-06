import * as React from "react"
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import Layout from '../components/layout'
import IndexCarousel from "../components/index-carousel/index-carousel"

const IndexPage = () => {

	const [ user, setUser ] = useState({});

    // fetch user
    useEffect(() => {
        let token = localStorage.getItem('token');
        if(token) {
            axios.get('http://localhost:3000/profile', {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }).then( (response) => {
                setUser(response.data);
            })
        }
    }, [])

    console.log('hit me baby one more time', user);

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
			<IndexCarousel />
			{/* <FeaturedProducts /> */}
		</Layout>
		
	)
}

export default IndexPage

export const Head = () => <title>Home Page</title> 
 