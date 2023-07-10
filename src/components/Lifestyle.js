import React from "react";
import { selectLifestyle } from "../data/blogsSlice";
import { Container, Row, Col } from "reactstrap";
import BlogCard from "../data/BlogCard";

const Lifestyle = () => {
  const lifestyle = selectLifestyle();

  return (
    <Container>
      <Row>
        {lifestyle.map((blog) => (
          <Col md="4" key={blog.id}>
            <BlogCard blog={blog} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Lifestyle;
