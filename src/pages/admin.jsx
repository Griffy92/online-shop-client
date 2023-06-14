import * as React from "react"
import AllOrders from '../components/AllOrders';
import AllProducts from '../components/AllProducts';
import UserOrders from "../components/ UserOrderHistory";

const Admin = () => {
    

    return (
        <>
        <div className="container mx-auto bg-white">
            <div className="p-4">
                <div>
                    <h1 class="text-3xl font-extrabold leading-none tracking-tight text-black-900 md:text-5xl" 
                    style={{
                        marginTop: `85px`,
                        color: `#383838`,}}
                        >Admin Page
                      </h1>
                </div>

                <div>
                    <h2 class="mb-5 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white mt-10" 
                    style={{
                        color: `#383838`,}}
                        >Orders
                    </h2>
                    <AllOrders />
                </div>

                <hr />
                <div>
                    <h2 class="mb-5 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white mt-10" 
                    style={{
                        color: `#383838`,}}
                        >Products
                    </h2>
                    <AllProducts />
                </div>
            </div>
        </div>
        </>
    )
}

export default Admin;