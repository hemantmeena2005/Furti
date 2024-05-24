import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Cart from '../components/Cart';

const ShopDetail = ({ products }) => {
  const { id } = useParams();
  const product = products.find(product => product.id === parseInt(id));

  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1); // State for quantity
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  
  const addToCart = () => {
    const newCartItem = { ...product, quantity: quantity }; // Use the selected quantity
    setCart([...cart, newCartItem]);
    setIsAddedToCart(true);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1); // Increment quantity
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1); // Decrement quantity, but ensure it stays at least 1
    }
  };

  const similarProducts = products.filter(
    p => p.id !== product.id && p.category === product.category && p.color === product.color
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex">
        <div className="w-1/2 pr-8">
          <img src={product?.image} alt={product?.name} className="w-full" />
        </div>
        <div className="w-1/2">
          <h2 className="text-3xl font-semibold mb-4">{product?.name}</h2>
          <div className="flex items-center mb-4">
            <div className="mr-4">
              <p className="text-2xl">★ ★ ★ ★ ★</p>
              <p className="text-gray-500">(1 review)</p>
            </div>
            <p className="text-3xl font-semibold">${product?.price}</p>
          </div>
          <div className="mb-4">
            <p><strong>Stock:</strong> {product?.stock}</p>
            <p><strong>SKU:</strong> {product?.sku}</p>
            <p><strong>Categories:</strong> {product?.categories?.join(', ')}</p>
            <p><strong>Tags:</strong> {product?.tags?.join(', ')}</p>
          </div>
          <p>{product?.description}</p>
          <div className="flex items-center mt-4">
            <button
              className={`bg-${isAddedToCart ? 'green' : 'blue'}-500 text-white py-2 px-4 rounded-full mr-4`}
              onClick={addToCart}
              disabled={isAddedToCart} // Disable button if product is added to cart
            >
              {isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
            </button>
            <div className="flex items-center">
              <button className="bg-gray-300 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center mr-2" onClick={decrementQuantity}>-</button>
              <input type="text" className="border border-gray-300 w-12 text-center" value={quantity} readOnly />
              <button className="bg-gray-300 text-gray-700 rounded-full w-8 h-8 flex items-center justify-center ml-2" onClick={incrementQuantity}>+</button>
            </div>
            <div className="mt-4">
              {/* <Link to="/cart" className="text-blue-500">View Cart</Link> */}
            </div>
          </div>
        </div>
      </div>
      {/* Similar Products Section */}
      <div className="mt-8  ">
        <h3 className="text-xl font-semibold mb-4">Similar Products</h3>
        <div className="flex flex-wrap justify-around">
          {similarProducts.map(similarProduct => (
            <Link key={similarProduct.id} to={`/shop/${similarProduct.id}`} className="text-black">
              <div className="bg-white rounded-lg  shadow-lg p-4 mb-4 mr-4" style={{ width: '300px' }}>
                <img src={similarProduct.image} alt={similarProduct.name} className="w-full h-64 object-cover mb-4" />
                <div>
                  <p className="text-sm text-gray-500">{similarProduct.category}</p>
                  <h2 className="text-lg font-semibold">{similarProduct.name}</h2>
                  <p className="text-gray-600">${similarProduct.price}</p>
                  <p className="text-gray-600">{similarProduct.color}</p>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-full mt-2" onClick={() => addToCart(similarProduct)}>Add to Cart</button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Cart cart={cart} /> {/* Pass cart state to Cart component */}
    </div>
  );
};

export default ShopDetail;
