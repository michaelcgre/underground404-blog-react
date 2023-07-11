import React from "react";
import { selectMusisReviews } from "../data/blogsSlice";
import { Container, Row, Col } from "reactstrap";
import BlogCard from "../data/BlogCard";

const MusicReviews = () => {
  const musicReviews = selectMusisReviews();

  return (
    <Container>
      <Row>
        {musicReviews.map((blog) => (
          <Col key={blog.id}>
            <BlogCard blog={blog} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MusicReviews;
