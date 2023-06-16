import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductDetails from './ProductDetails';
import AddProduct from './AddProduct';

const AllProducts = () => {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [selectedProductId, setSelectedProductId] = useState(null);
	const [sortConfig, setSortConfig] = useState({ key: null, direction: null });
	const [filterValue, setFilterValue] = useState('');
	const token = localStorage.getItem('token');
	const [showAddProduct, setShowAddProduct] = useState(false);
	const [productDetailsActionCompleted, setProductDetailsActionCompleted] = useState(false);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const response = await axios.get('http://localhost:3000/products', {
					headers: {
						Authorization: `Bearer ${token}`,
					},
				});
				setProducts(response.data || []);
			} catch (error) {
				console.error('Error fetching products:', error);
			}
		};

    	fetchProducts();
  	}, [token, productDetailsActionCompleted]);

	useEffect(() => {
		const filtered = products.filter((product) => {
			return (
				product.product_code.toString().includes(filterValue) ||
				product.product_name.toLowerCase().includes(filterValue.toLowerCase()) ||
				product.product_category.toLowerCase().includes(filterValue.toLowerCase()) ||
				product.product_description.toLowerCase().includes(filterValue.toLowerCase()) ||
				product.cost_price.toString().includes(filterValue) ||
				product.retail_price.toString().includes(filterValue) ||
				product.animal_category.toLowerCase().includes(filterValue.toLowerCase()) ||
				product.quantity.toString().includes(filterValue)
			);
		});
		setFilteredProducts(filtered);
	}, [products, filterValue]);

	const openProductDetails = (productId) => {
		setSelectedProductId(productId);
	};

	const closeProductDetails = () => {
		setSelectedProductId(null);
	};

	const handleSort = (key) => {
		let direction = 'ascending';
		if (sortConfig && sortConfig.key === key && sortConfig.direction === 'ascending') {
			direction = 'descending';
		};
		setSortConfig({ key, direction });

		const sortedProducts = [...filteredProducts].sort((a, b) => {
			if (a[key] < b[key]) return direction === 'ascending' ? -1 : 1;
			if (a[key] > b[key]) return direction === 'ascending' ? 1 : -1;
			return 0;
		});

		setFilteredProducts(sortedProducts);
		};

	const handleFilterChange = (e) => {
		setFilterValue(e.target.value);
	};

	const handleAddProduct = (newProduct) => {
		setProducts((prevProducts) => [...prevProducts, newProduct]);
	};

	const toggleAddProduct = () => {
		setShowAddProduct((prevShowAddProduct) => !prevShowAddProduct);
	};

	const handleActionCompletion = () => {
		setProductDetailsActionCompleted(true);
	};

	useEffect(() => {
		if (productDetailsActionCompleted) {
			fetchProducts();
			setProductDetailsActionCompleted(false);
		};
	}, [productDetailsActionCompleted]);

	const fetchProducts = async () => {
		try {
			const response = await axios.get('http://localhost:3000/products', {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			setProducts(response.data || []);
		} catch (error) {
			console.error('Error fetching products:', error);
		};
	};

	return (
		<>
			{/* CONTAINER */}
			<div className="p-8 w-9/12 m-auto">
				<div class="flex mr-1" style={{marginTop: `-30px`}}>
					<div class="w-1/2 h-30 grid justify-items-center">
						{/* ADD NEW PRODUCT BUTTON */}
						<button
							onClick={toggleAddProduct}
							className="m-auto font-poppinsMed font-medium h-10 text-white px-5 transition-colors duration-500 rounded-lg focus:shadow-outline bg-sky-400 hover:bg-sky-500 duration-500 shadow"
						>
							Add New Product
						</button>
					</div>

					<div class="w-1/2 h-30 grid justify-items-center">
						{/* FILTER BUTTON */}
						<input
							type="text"
							value={filterValue}
							onChange={handleFilterChange}
							placeholder="Filter..."
							className="m-auto h-10 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block px-5 p-2.5"
						/>
					</div>
				</div>
			</div>


			{/* ADD NEW PRODUCT FORM */}
			{showAddProduct && (
				<div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
					<div className="bg-white p-6 rounded shadow-lg">
						<AddProduct onAddProduct={handleAddProduct} />
						<button
							onClick={toggleAddProduct}
							className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold ml-4 py-2 px-4 rounded"
						>
						Close
						</button>
					</div>
				</div>
			)}
			

			{/* TABLE OF INFO - CLICK TO FILTER */}
			<div className="relative max-h-screen-half overflow-scroll z-1">
				<table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
					<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
						<tr>
							<th scope="col" className="px-6 py-3 cursor-pointer" onClick={() => handleSort('product_code')}>
								Product Code
							</th>
							<th scope="col" className="px-6 py-3 cursor-pointer " onClick={() => handleSort('product_name')}>
								Product Name
							</th>
							<th scope="col" className="px-6 py-3 cursor-pointer " onClick={() => handleSort('product_category')}>
								Product Category
							</th>
							<th scope="col" className="px-6 py-3 cursor-pointer " onClick={() => handleSort('product_description')}>
								Product Description
							</th>
							<th scope="col" className="px-6 py-3 cursor-pointer " onClick={() => handleSort('cost_price')}>
								Cost Price
							</th>
							<th scope="col" className="px-6 py-3 cursor-pointer " onClick={() => handleSort('retail_price')}>
								Retail Price
							</th>
							<th scope="col" className="px-6 py-3 cursor-pointer " onClick={() => handleSort('animal_category')}>
								Animal Category
							</th>
							<th scope="col" className="px-6 py-3 cursor-pointer " onClick={() => handleSort('quantity')}>
								Quantity
							</th>
							<th scope="col" className="px-6 py-3 cursor-pointer ">Actions</th>
						</tr>
					</thead>
				
					<tbody>
						{filteredProducts.map((product) => (
							<tr key={product.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
								<td className="px-6 py-4">{product.product_code}</td>
								<td className="px-6 py-4">{product.product_name}</td>
								<td className="px-6 py-4">{product.product_category}</td>
								<td className="px-6 py-4">{product.product_description}</td>
								<td className="px-6 py-4">{product.cost_price}</td>
								<td className="px-6 py-4">{product.retail_price}</td>
								<td className="px-6 py-4">{product.animal_category}</td>
								<td className="px-6 py-4">{product.quantity}</td>
								<td>
									<button
										onClick={() => openProductDetails(product.id)}
										className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded font-poppins-medium font-medium"
									>
										Product Details
									</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			
			{/* VIEW AND EDIT PRODUCT DETAILS */}
			{selectedProductId && (
				<div className="m-auto w-screen fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center">
					<div className=" w-screen m-auto fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
						<div className="w-4/5 bg-white p-6 rounded shadow-lg">

							{/* Product Details heading and 'x' button */}
							<div class="flex mb-4 mr-1">
								<div class="w-1/2 h-30">
									<h2  
										className=" px-6 text-2xl font-bold text-gray-900 dark:text-white">
										Product Details
									</h2>
								</div>

								<button 
									type="button" 
									onClick={closeProductDetails} 
									className="mr-6 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" 
									data-modal-hide="defaultModal">
									<svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
									</svg>
									<span className="sr-only" >Close modal</span>
								</button>
							</div>

							<hr className="mx-6"/>

							<ProductDetails 
								productId={selectedProductId} 
								onActionCompletion={handleActionCompletion} 
							/>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default AllProducts;
