import * as React from "react"
import AllProducts from "../../components/AllProducts"
import { Link } from "gatsby"

const adminProducts = () => {
    return (
        <>
            <div className="container mx-auto bg-white h-full ">
                <div className="p-8 w-11/12 m-auto">
                    <div className="mt-10 text-center"> 
                        <Link 
                            to="/admin" 
                            className="font-poppinsLight font-extra-light text-black-200 m-auto hover:text-green-500 transition duration-200"> 
                                Back to Admin page
                        </Link>
                
                        <h1 
                            className="text-4xl font-extrabold leading-none tracking-tight md:text-5xl text-center mb-10 mt-5" 
                            style={{
                                color: `#383838`,}}
                            >
                                List of Products
                        </h1>
                    </div>
                        <AllProducts />
                </div>
            </div>
        </>
    )
}

export default adminProducts;