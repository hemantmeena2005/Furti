// src/pages/BlogDetail.js
import React from "react";
import { useParams } from "react-router-dom";
import blogs from "../data/blog";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl mb-8">{blog.title}</h1>
      <p className="text-gray-600 mb-4">
        By {blog.author} on {blog.date}
      </p>
      <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover mb-8" />
      <div className="prose">{blog.content}</div>
    </div>
  );
};

export default BlogDetail;
