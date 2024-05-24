import React, { useState } from 'react';

const Product = ({ title, description, img, price, onAddToCart, onRemoveFromCart }) => {
  const [inCart, setInCart] = useState(false);

  const handleToggleCart = () => {
    if (inCart) {
      // Remove from cart
      setInCart(false);
      // Call parent function to remove from cart
      onRemoveFromCart();
    } else {
      // Add to cart
      setInCart(true);
      // Call parent function to add to cart
      onAddToCart();
    }
  };

  return (
    <div className="product-card h-full w-72 ">
      <img src={img} alt={title} className="product-img" />
      <div className="product-info">
        <h3 className="product-title">{title}</h3>
        <p className="product-description">{description}</p>
        <p className="product-price">${price.toFixed(2)}</p>
      </div>
      <div className="product-buttons">
        {inCart ? (
          <button className="remove-from-cart-btn px-3 py-1  bg-red-500 text-white" onClick={handleToggleCart}>
            Remove from Cart
          </button>
        ) : (
          <button className="add-to-cart-btn px-3 py-1 border-r-2 bg-green-500 text-white" onClick={handleToggleCart}>
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Product;
