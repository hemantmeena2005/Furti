import React, { useState } from "react";

const Contact = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div>
      <div
        className="relative bg-cover bg-center h-96"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8ZnVybml0dXJlJTIwZGVzaWdufGVufDB8fDB8fHww)',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
          <h1 className="text-5xl font-bold">Best Room Decor Items</h1>
          <p className="text-xl mt-4">
            Our goods have the best quality and materials in the world
          </p>
          <button className="mt-8 px-6 py-3 bg-red-600 hover:bg-red-700 rounded">
            Shop Now
          </button>
        </div>
      </div>

      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h2>
        {faqData.map((faq, index) => (
          <div key={index} className="mb-4">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-xl">{faq.question}</h3>
              <span className="text-xl">
                {activeIndex === index ? '-' : '+'}
              </span>
            </div>
            {activeIndex === index && (
              <p className="mt-2 text-gray-700">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      <div className="container mx-auto p-8">
        <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700">Your Name</label>
            <input
              type="text"
              className="w-full border rounded px-3 py-2"
              placeholder="Write your name here..."
            />
          </div>
          <div>
            <label className="block text-gray-700">Your Email</label>
            <input
              type="email"
              className="w-full border rounded px-3 py-2"
              placeholder="Write your email here..."
            />
          </div>
          <div>
            <label className="block text-gray-700">Your Comment</label>
            <textarea
              className="w-full border rounded px-3 py-2"
              placeholder="Write your comment here..."
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const faqData = [
  {
    question: "How can I make refund from your website?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a enim, consectetur cursus. At mattis nulla in pretium. Condimentum sagittis mauris augue maecenas fusce commodo neque purus et. Integer eu amet at pretium id ultrices faucibus. In vestibulum pretium, potenti molestie.",
  },
  {
    question: "How to buy a product?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a enim, consectetur cursus. At mattis nulla in pretium. Condimentum sagittis mauris augue maecenas fusce commodo neque purus et. Integer eu amet at pretium id ultrices faucibus. In vestibulum pretium, potenti molestie.",
  },
  {
    question: "How can I make refund from your website?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id a enim, consectetur cursus. At mattis nulla in pretium. Condimentum sagittis mauris augue maecenas fusce commodo neque purus et. Integer eu amet at pretium id ultrices faucibus. In vestibulum pretium, potenti molestie.",
  },
];

export default Contact;
