import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";
import {
  Container,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from "reactstrap";

const BlogPage = () => {
  const { id } = useParams();
  const blog = blogs.find((blog) => blog.id === Number(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <Container>
      <Card>
        <CardImg top src={blog.blogHeader} alt={blog.title} />
        <CardBody>
          <CardTitle tag="h5">{blog.title}</CardTitle>
          <CardText>{blog.paragraphOne}</CardText>
          {/* Add more card text or content as needed */}
        </CardBody>
      </Card>
    </Container>
  );
};

export default BlogPage;
