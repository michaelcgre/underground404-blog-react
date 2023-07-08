import { blogs } from "../data/blogs";

export const selectFeaturesBlogs = () => {
  const featuredBlogs = blogs.filter((blog) => blog.featured);
  return featuredBlogs;
};
