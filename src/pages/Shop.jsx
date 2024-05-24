import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import prod from '../data/prodata';
const Shop = ({ addToCart }) => {
    const [products, setProducts] = useState(prod);
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;


  const handlePriceChange = (value) => {
    setPriceRange(value);
  };

  const handleColorChange = (color) => {
    if (selectedColors.includes(color)) {
      setSelectedColors(selectedColors.filter((c) => c !== color));
    } else {
      setSelectedColors([...selectedColors, color]);
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category === selectedCategory ? '' : category);
  };

  const filteredProducts = products.filter(
    (product) =>
      product.price >= priceRange[0] &&
      product.price <= priceRange[1] &&
      (selectedColors.length === 0 || selectedColors.includes(product.color)) &&
      (selectedCategory === '' || product.category === selectedCategory)
  );

  const getUniqueColors = () => {
    const colors = new Set();
    products.forEach((product) => colors.add(product.color));
    return Array.from(colors);
  };

  const getCategoryCount = (category) => {
    return products.filter((product) => product.category === category).length;
  };

  // Pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Background image */}
      <div className="bg-cover bg-center h-96 flex items-center justify-center text-center text-white" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZ1cm5pdHVyZSUyMGRlc2lnbnxlbnwwfHwwfHx8MA%3D%3D)' }}>
        <div>
          <h1 className="text-5xl font-bold mb-4">Best Room Decor Items</h1>
          <p className="mb-8">Our goods have the best quality and materials in the world</p>
          <Link to="/shop" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full">Shop Now</Link>
        </div>
      </div>
      {/* Product display */}
      <div className="flex mt-8">
        {/* Sidebar */}
        <div className="w-1/4 pr-4">
          <div className="mb-4">
            <p className="text-sm font-semibold mb-2">Filter By Price</p>
            <Slider range min={0} max={2000} defaultValue={[0, 2000]} value={priceRange} onChange={handlePriceChange} />
            <div className="flex justify-between mt-2">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>
          {/* Filter by color */}
          <div className="mb-4">
            <p className="text-sm font-semibold mb-2">Filter By Color</p>
            {getUniqueColors().map((color) => (
              <div key={color} className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  id={color}
                  checked={selectedColors.includes(color)}
                  onChange={() => handleColorChange(color)}
                />
                <label htmlFor={color}>{color}</label>
              </div>
            ))}
          </div>
          {/* Product Categories */}
          <div className="mb-4">
            <p className="text-sm font-semibold mb-2">Product Categories</p>
            {Array.from(new Set(products.map((product) => product.category))).map((category) => (
              <div key={category} className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  id={category}
                  checked={category === selectedCategory}
                  onChange={() => handleCategoryChange(category)}
                />
                <label htmlFor={category}>
                  {category} ({getCategoryCount(category)})
                </label>
              </div>
            ))}
          </div>
        </div>
        {/* Product list */}
        <div className="w-3/4 flex flex-wrap justify-around">
          {currentProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg p-4 mb-4 mr-4" style={{ width: 'calc(25% - 1rem)' }}>
            <Link to={`/shop/${product.id}`} className="block">                     
              <img src={product.image} alt={product.name} className="w-full h-64 object-cover mb-4" />
              <div>
                <p className="text-sm text-gray-500">{product.category}</p>
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-gray-600">${product.price}</p>
                <p className="text-gray-600">{product.color}</p>
                <p className="text-gray-600">{product.tag}</p>
              </div>
            </Link>
            </div>
          ))}
        </div>
      </div>
      {/* Pagination */}
      {filteredProducts.length > productsPerPage && (
        <ul className="flex justify-center mt-4">
          {[...Array(Math.ceil(filteredProducts.length / productsPerPage))].map((_, index) => (
            <li key={index}>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-full mx-1" onClick={() => paginate(index + 1)}>
                {index + 1}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Shop;
