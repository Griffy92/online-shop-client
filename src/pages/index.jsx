import * as React from "react"
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import IndexCarousel from "../components/index-carousel/index-carousel"
import headerImage from '../images/header.png';

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
            }).then((response) => {
                setUser(response.data);
            })
        }
    }, [])

    // console.log('hit me baby one more time', user);

	return (
		<>	
			{/* cover image with CTA button */}
			<div 
			className="bg-cover bg-center h-auto text-white py-24 px-10"
			style={{
				backgroundImage:`url(${headerImage})`,
				color: `white`
				}}>
			
				<div className="md:w-1/2">
					<p className="text-3xl font-bold">This is a banner - image didn't work, but don't hate the idea of having one on the landing page?</p>
					<p className="text-2xl mb-10 leading-none">This might be a bit large though?</p>
					<a href="/products" className="bg-purple-800 py-4 px-8 text-white font-bold text-xs rounded hover:bg-gray-200 hover:text-gray-800" 
					style={{
						backgroundColor: `#2563EB`
						}}>Shop now!</a>

					{/* bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full */}

				</div>  
			</div>
			<h1>Bestselling</h1>
			{/* <IndexCarousel />	 */}
			<IndexCarousel />
			{/* <FeaturedProducts /> */}


		</>
	)
}

export default IndexPage

export const Head = () => <title>Home Page</title> 
 