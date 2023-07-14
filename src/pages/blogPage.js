import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import { Container, Col, Row } from "reactstrap";
import YouMightLike from "../components/YouMightLike";
import { DiscussionEmbed } from "disqus-react";

const BlogPage = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === Number(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <Container className="mt-4">
      <Row>
        <Col lg="8">
          <img
            className="img-fluid rounded"
            top
            src={blog.blogHeader}
            alt={blog.title}
          />
          <h1 className="mt-2">{blog.title}</h1>
          <div className="d-flex justify-content-between my-3">
            <span>{blog.author}</span>
            <span>{blog.date}</span>
          </div>
          <p className="fs-5">{blog.paragraphOne}</p>
          <p className="fs-5">{blog.paragraphTwo}</p>
          <p className="fs-5">{blog.paragraphThree}</p>
          <div className="d-flex justify-content-center align-content-center my-3">
            <img
              className="img-fluid rounded "
              src={blog.extraImage}
              alt={blog.title}
            />
          </div>
          <p className="fs-5">{blog.paragraphFour}</p>
          <p className="fs-5">{blog.paragraphFive}</p>
          <p className="fs-5">{blog.paragraphSix}</p>
          <p className="fs-5">{blog.paragraphSeven}</p>
          <p className="fs-5">{blog.paragraphEight}</p>
        </Col>
        <Col>
          <iframe
            title="blog-spotify"
            src={blog.spotify}
            width="100%"
            height="352"
            frameborder="0"
            allowfullscreen=""
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
          <YouMightLike currentBlogId={Number(id)} />
        </Col>
      </Row>
      <Row className="mt-5">
        <DiscussionEmbed
          shortname="underground404-com"
          config={{
            url: window.location.href,
            identifier: String(blog.id),
            title: blog.title,
            language: "zh_EN",
          }}
        />
      </Row>
    </Container>
  );
};

export default BlogPage;
