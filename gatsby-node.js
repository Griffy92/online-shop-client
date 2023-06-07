const axios = require('axios');

const getProductData = async () => {
    try {
        const response = await axios.get("http://localhost:3000/products");
        return response.data; 
    } catch (error) {
        console.error("Error fetching product data:", error);
        return []; 
    }
};

exports.createPages = async ({ actions: { createPage } }) => {

    const allProducts = await getProductData();
    
    createPage({
        path: `/products`,
        component: require.resolve("./src/templates/all-products.js"),
        context: { allProducts },
    });
  
    allProducts.forEach(product => {
        createPage({
            path: `/product/${product.product_code}/`,
            component: require.resolve("./src/templates/product.js"),
            context: { product },
        })
    });
  }