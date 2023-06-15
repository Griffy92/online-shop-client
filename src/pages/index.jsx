import * as React from "react"
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import IndexCarousel from "../components/index-carousel/index-carousel"
import headerImage from '../images/header-temp.jpg';

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

	return (
		<>	
			{/* cover image with CTA button */}
			<div 
			className="bg-cover bg-center text-white px-10 h-screen-half "
			style={{
				// marginTop: '-20px',
				backgroundImage:`url(${headerImage})`,
				color: `white`
				}}>
			
				<div className="w-1/2 mx-auto pt-10">
					<p className="text-4xl font-bold font-poppins mb- text-black text-center mb-3" style={{marginTop: `10px`, color: `#01a473`}}>Do you need something for your pets?</p>
					<p className="text-xl mb-4 leading-tight font-poppinslight font-extra-light text-black text-center">Discover a curated selection of high-quality products, personalied for your pet's needs, and join us in creating a world where every pet thrives!</p>
					<div className="flex justify-center">

					<a href="/products" className="py-2 px-6 text-white font-poppinsSemi font-semi-bold text-xs rounded hover:text-gray-800 hover:bg-slate-700 shadow" 
					style={{
						backgroundColor: `#ffbd23`
						}}>Shop now!</a>

					{/* bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full */}
					</div>

				</div>  
			</div>
			<div className="w-1/2 mx-auto pt-10">
				<h1 className="text-3xl font-bold font-poppins mb- text-black text-center mb-3">New Products</h1>
			</div>
			{/* <IndexCarousel />	 */}
			<IndexCarousel user={user}/>
			{/* <FeaturedProducts /> */}


		</>
	)
}

export default IndexPage

export const Head = () => <title>Home Page</title> 
 