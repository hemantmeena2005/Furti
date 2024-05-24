import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const CheckoutPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const totalValue = queryParams.get('totalValue');

  // State variables for form inputs
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [country, setCountry] = useState('United States');
  const [shippingMethod, setShippingMethod] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, such as sending data to server
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Checkout</h1>
      <div className="mb-4">
        <p className="text-xl font-semibold">Total Order Value: ${totalValue}</p>
      </div>
      <form onSubmit={handleSubmit}>
        {/* Contact Information */}
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
          <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Your first name here.." className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
          <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Your last name here.." className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
          <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Your phone here.." className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your email here.." className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        
        {/* Shipping Method */}
        <div className="mb-4">
          <label htmlFor="shippingMethod" className="block text-sm font-medium text-gray-700">Shipping Method</label>
          <select id="shippingMethod" value={shippingMethod} onChange={(e) => setShippingMethod(e.target.value)} className="mt-1 p-2 border border-gray-300 rounded-md w-full">
            <option value="bx-store">Store Pickup</option>
            <option value="bx-package">Home Delivery</option>
          </select>
        </div>
        
        {/* Address */}
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium text-gray-700">Street Address</label>
          <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} placeholder="Write your full address" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
        </div>
        
        {/* Payment Method */}
        <div className="mb-4">
          <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700">Payment Method</label>
          <div id="paymentMethod" className="flex mt-1 space-x-4">
            <input type="radio" id="creditCard" name="paymentMethod" value="Credit Card" onChange={(e) => setPaymentMethod(e.target.value)} />
            <label htmlFor="creditCard" className="ml-2 text-sm font-medium text-gray-700">Credit Card</label>
            <input type="radio" id="googlePay" name="paymentMethod" value="Google Pay" onChange={(e) => setPaymentMethod(e.target.value)} />
            <label htmlFor="googlePay" className="ml-2 text-sm font-medium text-gray-700">Google Pay</label>
            <input type="radio" id="paypal" name="paymentMethod" value="PayPal" onChange={(e) => setPaymentMethod(e.target.value)} />
            <label htmlFor="paypal" className="ml-2 text-sm font-medium text-gray-700">PayPal</label>
          </div>
        </div>

        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-full">
            <Link to={'/complete'}>Place Order</Link>
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
