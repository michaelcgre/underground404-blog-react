import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import { Container, Col, Row } from "reactstrap";
import YouMightLike from "../components/YouMightLike";

const BlogPage = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === Number(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <Container>
      <Row>
        <Col lg="8">
          <img
            className="img-fluid"
            top
            src={blog.blogHeader}
            alt={blog.title}
          />
          <h1>{blog.title}</h1>
          <span>{blog.author}</span>
          <span>{blog.date}</span>
          <p>{blog.paragraphOne}</p>
          <p>{blog.paragraphTwo}</p>
          <p>{blog.paragraphThree}</p>
          <img className="img-fluid" src={blog.extraImage} alt={blog.title} />
          <p>{blog.paragraphFour}</p>
          <p>{blog.paragraphFive}</p>
          <p>{blog.paragraphSix}</p>
          <p>{blog.paragraphSeven}</p>
          <p>{blog.paragraphEight}</p>
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
    </Container>
  );
};

export default BlogPage;
