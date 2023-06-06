import React, {useState} from "react";

const FilterList = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Check Textured Coat",
      category: "Coat",
      price: "175.4",
      color: "Camel",
      size: "M",
      tags: "coat check textured camel brown long sleeves buttoned cuffs",
      image: "http://placekitten.com/301/300"
    },
    {
      id: 2,
      title: "Contrast Check Coat",
      category: "Coat",
      price: "155.4",
      color: "Black",
      size: "L",
      tags: "coat camel black grey marl lapel collar hip flap pockets",
      image: "http://placekitten.com/302/300"
    },
    {
      id: 3,
      title: "White Coat",
      category: "Coat",
      price: "125.4",
      color: "White",
      size: "S",
      tags: "coat camel white short sleeves double-breasted button",
      image: "http://placekitten.com/303/300"
    },
    {
      id: 4,
      title: "Basic Hoodie",
      category: "Hoodies / SweatShirts",
      price: "55.4",
      color: "Purple",
      size: "M",
      tags: "hoodie solid plain purple long baggy hood",
      image: "http://placekitten.com/304/300"
    },
    {
      id: 5,
      title: "Basic Hoodie",
      category: "Hoodies / SweatShirts",
      price: "55.4",
      color: "Black",
      size: "L",
      tags: "hoodie solid plain black long baggy hood",
      image: "http://placekitten.com/305/300"
    },
    {
      id: 6,
      title: "Basic short Hoodie",
      category: "Hoodies / SweatShirts",
      price: "55.4",
      color: "Gray",
      size: "S",
      tags: "hoodie solid plain gray grey short hood",
      image: "http://placekitten.com/306/300"
    },
  ]);

  const [filters, setFilters] = useState({
    category: "",
    color: "",
    size: "",
    sortBy: ""
  });

  const _handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((previousFilters) => ({ ...previousFilters, [name]: value }));
  };

  const filteredProducts = products.filter((product) => {
    const { category, color, size } = filters;

    if (category && product.category.toLowerCase() !== category.toLowerCase()) {
      return false;
    }

    if (color && product.color.toLowerCase() !== color.toLowerCase()) {
      return false;
    }

    if (size && product.size.toLowerCase() !== size.toLowerCase()) {
      return false;
    }

    return true;
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    const { sortBy } = filters;

    if (sortBy === "price-increasing") {
      return parseFloat(a.price) - parseFloat(b.price);
    } else if (sortBy === "price-decreasing") {
      return parseFloat(b.price) - parseFloat(a.price);
    }

    return 0;
  });

  return (
    <div>
      <div>
        <select name="category" value={filters.category} onChange={_handleFilterChange}>
          <option value="">Sort by Categories</option>
          <option value="Coat">Coat</option>
          <option value="Hoodies / SweatShirts">Hoodies / Sweatshirts</option>
        </select>
        <select name="color" value={filters.color} onChange={_handleFilterChange}>
          <option value="">Sory by Colors</option>
          <option value="Camel">Camel</option>
          <option value="Black">Black</option>
          <option value="White">White</option>
          <option value="Purple">Purple</option>
          <option value="Gray">Gray</option>
        </select>
        <select name="size" value={filters.size} onChange={_handleFilterChange}>
          <option value="">Sort by Sizes</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
        </select>
        <select name="sortBy" value={filters.sortBy} onChange={_handleFilterChange}>
          <option value="">Sort By Price</option>
          <option value="price-increasing">Price - Low to High</option>
          <option value="price-decreasing">Price - High to Low</option>
        </select>
      </div>
      <div>
        {sortedProducts.length > 0 ? (
          sortedProducts.map((product) => (
            <div key={product.id}>
              <h3>Category: {product.category}</h3>
              <h4>Product: {product.title}</h4>
              <h5>Price: ${product.price}</h5>
              <h5>Color: {product.color}</h5>
              <h5>Size: {product.size}</h5>
              <img src={ product.image } alt={ product.title } />
            </div>
          ))
        ) : (
          <h2>No Items Found</h2>
        )}
      </div>
    </div>
  );
};

export default FilterList;