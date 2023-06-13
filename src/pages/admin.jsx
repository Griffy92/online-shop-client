import * as React from "react"
import AllOrders from '../components/AllOrders';
import AllProducts from '../components/AllProducts';

const Admin = () => {
    

    return (
        <>
            <div>
                <h1>Admin Page</h1>
            </div>
            <div>
                <h2>Orders</h2>
                <AllOrders />
            </div>
            <hr />
            <div>
                <h2>Products</h2>
                <AllProducts />
            </div>
        </>
    )
}

export default Admin;