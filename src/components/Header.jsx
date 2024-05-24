import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa';

const Header = ({ cartItems }) => {
  const navigate = useNavigate();

  const handleUserIconClick = () => {
    navigate('/login');
  };

  return (
    <header className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="logo text-2xl font-bold">
          <Link to="/">Logo</Link>
        </div>

        {/* Navigation */}
        <nav className="flex space-x-6">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <div className="relative group">
            <Link to="/shop" className="hover:text-gray-400 flex items-center">
              Shop <span className="ml-1">▼</span>
            </Link>
            <div className="absolute hidden group-hover:block bg-white text-gray-800 mt-2 py-2 w-40">
              <Link to="/shop/option1" className="block px-4 py-2 hover:bg-gray-200">Option 1</Link>
              <Link to="/shop/option2" className="block px-4 py-2 hover:bg-gray-200">Option 2</Link>
            </div>
          </div>
          <Link to="/blog" className="hover:text-gray-400">Blog</Link>
          <Link to="/about" className="hover:text-gray-400">About</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
          <Link to="/team" className="hover:text-gray-400">Team</Link>
        </nav>

        {/* Icons */}
        <div className="flex space-x-4 relative">
          <FaSearch className="hover:text-gray-400 cursor-pointer" />
          <FaUser className="hover:text-gray-400 cursor-pointer" onClick={handleUserIconClick} />
          <div className="relative">
            <FaShoppingCart className="hover:text-gray-400 cursor-pointer" />
            {cartItems > 0 && (
              <span className="absolute top-0 right-0 bg-green-500 text-white rounded-full px-2 py-1 text-xs">
                {cartItems}
              </span>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
