import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import { selectAllBlogs } from "../data/blogsSlice";

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
    <div>
      <h2>You Might Like</h2>
      <div className="card-container">
        {randomIndexes.map((index) => {
          const blog = blogs[index];
          return (
            <Card key={blog.id} className="mb-4">
              <CardImg top width="100%" src={blog.blogImage} alt={blog.title} />
              <CardBody>
                <CardTitle>{blog.title}</CardTitle>
                <CardText>{blog.description}</CardText>
                <Button tag={Link} to={`/blogs/${blog.id}`} color="primary">
                  Read More
                </Button>
              </CardBody>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default YouMightLike;
