import React from "react";
import { selectArtistSpotlight } from "../data/blogsSlice";
import { Container, Row, Col } from "reactstrap";
import BlogCard from "../data/BlogCard";

const ArtistSpotlight = () => {
  const artistSpotlight = selectArtistSpotlight();

  return (
    <Container>
      <Row>
        {artistSpotlight.map((blog) => (
          <Col md="4" key={blog.id}>
            <BlogCard blog={blog} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ArtistSpotlight;
