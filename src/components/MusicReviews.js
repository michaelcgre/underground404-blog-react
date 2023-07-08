import { selectMusisReviews } from "../data/blogsSlice";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardText,
  Button,
} from "reactstrap";

const MusicReviews = () => {
  const musicReviews = selectMusisReviews();

  return (
    <Container>
      <Row>
        {musicReviews.map((blog) => (
          <Col md="4" key={blog.id}>
            <Card>
              <CardImg top src={blog.blogImage} alt={blog.title} />
              <CardBody>
                <h5>{blog.title}</h5>
                <CardText>{blog.description}</CardText>
                <Button href={`/blogs/${blog.id}`}>Read More</Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MusicReviews;
