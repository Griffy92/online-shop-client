import * as React from "react"
// import AllOrders from '../components/AllOrders';
// import AllProducts from '../components/AllProducts';
// import UserOrders from "../components/ UserOrderHistory";
import { Link } from 'gatsby';
// import adminOrders from "./admin/orders";



const Admin = () => {
    return (
        <>
            <div className="container mx-auto bg-white h-screen ">
                <div className="p-8 w-9/12 m-auto">
                    <div>
                        <h1 
                            className="text-3xl font-extrabold leading-none tracking-tight text-black-900 md:text-5xl text-center mb-10 mt-20" 
                            style={{
                                color: `#383838`,
                            }}>
                            Admin Page
                        </h1>
                    </div>

                    <div class="flex mb-4 mr-1">
                        <div class="w-1/2 h-30">
                            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto">
                                <Link to="/admin/orders">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Orders</h5>
                                </Link>
                                
                                <p 
                                    class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    View all order details including order id, user id, order status, time of creation, email, shipping details, subtotal and total price. 
                                </p>

                                <Link to="/admin/orders"       
                                    class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                                    View Details
                                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </Link>
                            </div>
                        </div>
  
                        <div class="w-1/2 h-30 ml-1">
                            <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto">
                                <Link to="/admin/products">
                                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Products</h5>
                                </Link>

                                <p 
                                    class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                    View all product details including product code, name, category, description, cost and retail price, animal category and quantity.
                                </p>

                                <Link to="/admin/products"       
                                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">

                                    View Details

                                    <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                </Link>
                            </div>
                        </div>     
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin;

{/* <div className="container mx-auto bg-white">

    <Link to='/orders'>Orders</Link>

    <div className="p-4">
        <div>
            <h1 className="text-3xl font-extrabold leading-none tracking-tight text-black-900 md:text-5xl" 
            style={{
                marginTop: `85px`,
                color: `#383838`,}}
                >Admin Page
              </h1>
        </div>

        <div>
            <h2 className="mb-5 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white mt-10" 
            style={{
                color: `#383838`,}}
                >Orders
            </h2>
            <AllOrders />
        </div>

        <hr />
        <div>
            <h2 className="mb-5 text-xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl dark:text-white mt-10" 
            style={{
                color: `#383838`,}}
                >Products
            </h2>
            <AllProducts />
        </div>
    </div>
</div> */}