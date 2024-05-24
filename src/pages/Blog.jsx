// src/pages/Blog.js
import React from "react";
import { Link } from "react-router-dom";
import blogs from "../data/blog";

const Blog = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="border h-[400px] w-[400px] rounded-lg overflow-hidden shadow-lg">
            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-2xl mb-2">{blog.title}</h2>
              <p className="text-gray-600 mb-2">
                By {blog.author} on {blog.date}
              </p>
              <p className="mb-4">{blog.summary}</p>
              <Link
                to={`/blog/${blog.id}`}
                className="text-blue-500 hover:underline"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
