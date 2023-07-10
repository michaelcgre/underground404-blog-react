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

const BlogCard = ({ blog }) => {
  return (
    <Card key={blog.id} className="mb-4">
      <Link to={`/blogs/${blog.id}`}>
        <CardImg top width="100%" src={blog.blogImage} alt={blog.title} />
      </Link>
      <CardBody>
        <CardTitle>
          <a href={`/blogs/${blog.id}`}>{blog.title}</a>
        </CardTitle>
        <CardText>{blog.description}</CardText>
        <Button tag={Link} to={`/blogs/${blog.id}`} color="primary">
          Read More
        </Button>
      </CardBody>
    </Card>
  );
};

export default BlogCard;
