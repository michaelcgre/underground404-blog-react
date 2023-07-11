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
import "../app/styles/blog_card.css";

const BlogCard = ({ blog }) => {
  return (
    <div className="d-flex justify-content-center align-content-center">
      <Card key={blog.id} className="mb-4 card">
        <Link to={`/blogs/${blog.id}`}>
          <CardImg top width="100%" src={blog.blogImage} alt={blog.title} />
        </Link>
        <CardBody className="card-body">
          <CardTitle>
            <a className="card-title fw-bold" href={`/blogs/${blog.id}`}>
              {blog.title}
            </a>
          </CardTitle>
          <CardText className="card-text">{blog.description}</CardText>
          <div className="text-end">
            <Button className="card-btn" tag={Link} to={`/blogs/${blog.id}`}>
              Read More
            </Button>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default BlogCard;
