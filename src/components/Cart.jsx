import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cart }) => {
  const navigate = useNavigate();

  // Handle navigation to checkout page with total order value
  const handleCheckout = () => {
    const totalValue = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    navigate(`/checkout?totalValue=${totalValue}`);
  };

  // Check if cart is empty or undefined
  if (!cart || cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-4">Cart</h1>
        <p>Your cart is empty.</p>
      </div>
    );
  }

  // Calculate total value
  const totalValue = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Cart</h1>
      <div>
        {cart.map(item => (
          <div key={item.id} className="flex justify-between items-center border-b border-gray-200 py-2">
            <div>
              <h2 className="text-lg font-semibold">{item.name}</h2>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
            </div>
            <p>Total: ${item.price * item.quantity}</p>
          </div>
        ))}
        <div className="mt-4">
          <p className="text-xl font-semibold">Total: ${totalValue}</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full mt-4" onClick={handleCheckout}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
