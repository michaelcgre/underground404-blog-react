import React from "react";
import { selectAllBlogs } from "../data/blogsSlice";
import BlogCard from "../data/BlogCard";

const YouMightLike = ({ currentBlogId }) => {
  const blogs = selectAllBlogs();

  const randomIndexes = [];
  while (randomIndexes.length < 2) {
    const randomIndex = Math.floor(Math.random() * blogs.length);
    const randomBlog = blogs[randomIndex];
    if (
      !randomIndexes.includes(randomIndex) &&
      randomBlog.id !== currentBlogId
    ) {
      randomIndexes.push(randomIndex);
    }
  }

  return (
    <div className="mt-3">
      <h2 className="text-center mb-3">You Might Like:</h2>
      <div className="card-container">
        {randomIndexes.map((index) => {
          const blog = blogs[index];
          return <BlogCard key={blog.id} blog={blog} />;
        })}
      </div>
    </div>
  );
};

export default YouMightLike;
