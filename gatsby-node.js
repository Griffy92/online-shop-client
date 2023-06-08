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

    // Create page for all products
    createPage({
        path: `/products`,
        component: require.resolve("./src/templates/all-products.js"),
        context: { allProducts },
    });

    // Create page for dog products
    const dogProducts = allProducts.filter(product => product.animal_category === "Dog");
    createPage({
        path: `/dog-products`,
        component: require.resolve("./src/templates/dog-products.js"),
        context: { dogProducts },
    });

    // Create page for cat products
    const catProducts = allProducts.filter(product => product.animal_category === "Cat");
    createPage({
        path: `/cat-products`,
        component: require.resolve("./src/templates/cat-products.js"),
        context: { catProducts },
    });

    // Create page for reptile products
    const reptileProducts = allProducts.filter(product => product.animal_category === "Reptile");
    createPage({
        path: `/reptile-products`,
        component: require.resolve("./src/templates/reptile-products.js"),
        context: { reptileProducts },
    });

    // Create page for bird products
    const birdProducts = allProducts.filter(product => product.animal_category === "Bird");
    createPage({
        path: `/bird-products`,
        component: require.resolve("./src/templates/bird-products.js"),
        context: { birdProducts },
    });

    // Create page for small pet products
    const smallpetProducts = allProducts.filter(product => product.animal_category === "Small Pet");
    createPage({
        path: `/smallpet-products`,
        component: require.resolve("./src/templates/smallpet-products.js"),
        context: { smallpetProducts },
    });

    // Create individual product pages
    allProducts.forEach(product => {
        createPage({
            path: `/product/${product.id}/`,
            component: require.resolve("./src/templates/product.js"),
            context: { product },
        })
    });
}