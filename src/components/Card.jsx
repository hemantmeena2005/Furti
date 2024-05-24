import React from 'react';

const Card = ({ title, description, img }) => {
  return (
    <div className="card p-4 flex items-center justify-between m-4 h-72 w-full bg-[#273A3E] shadow-md rounded-lg">
      <div className="flex flex-col justify-center w-1/2">
        <h1 className="text-xl text-gray-300 font-bold mb-2">{title}</h1>
        <h2 className="text-4xl text-white">{description}</h2>
        <button className="border-2 text-white w-fit mt-3 py-2 px-4">Shop Now</button>
      </div>
      <img className="h-52 w-32 mr-20 object-cover" src={img} alt={title} />
    </div>
  );
};

export default Card;
