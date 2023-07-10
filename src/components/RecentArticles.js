import { React, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";
import { selectAllBlogs } from "../data/blogsSlice";

const BlogCarousel = () => {
  // Get all blogs from the data source
  const blogs = selectAllBlogs();

  // Set the number of cards to display on each slide
  const cardsPerSlide = 3;

  // Calculate the number of slides required based on the number of blogs and cards per slide
  const totalSlides = Math.ceil(blogs.length / cardsPerSlide);

  // Initialize the active slide state
  const [activeSlide, setActiveSlide] = useState(0);

  // Handle slide change
  const handleSlideChange = (nextIndex) => {
    setActiveSlide(nextIndex);
  };

  // Get the index of the last blog for looping effect
  const lastBlogIndex = blogs.length - 1;

  return (
    <Container>
      <h2 className="d-flex justify-content-center align-content-center fs-1">
        Recent Articles
      </h2>
      <Carousel
        activeIndex={activeSlide}
        next={handleSlideChange}
        previous={handleSlideChange}
        interval={false}
      >
        <CarouselIndicators
          items={blogs}
          activeIndex={activeSlide}
          onClickHandler={handleSlideChange}
        />
        {Array.from({ length: totalSlides }).map((_, slideIndex) => {
          const startIndex = slideIndex * cardsPerSlide;
          const endIndex = startIndex + cardsPerSlide;
          const slideBlogs = blogs.slice(startIndex, endIndex);

          return (
            <CarouselItem key={slideIndex}>
              <div className="row">
                {slideBlogs.map((blog, index) => {
                  // Get the actual blog index for looping effect
                  const blogIndex = startIndex + index;

                  // Handle looping when reaching the end of blogs
                  const blogToShow =
                    blogIndex > lastBlogIndex
                      ? blogs[blogIndex - blogs.length]
                      : blog;

                  return (
                    <div className="col-md-4" key={blogIndex}>
                      <Card>
                        <Link to={`/blogs/${blog.id}`}>
                          <CardImg
                            top
                            width="100%"
                            src={blogToShow.blogImage}
                            alt={blogToShow.title}
                          />
                        </Link>
                        <CardBody>
                          <CardTitle>
                            <a href={`/blogs/${blogToShow.id}`}>
                              {blogToShow.title}
                            </a>
                          </CardTitle>
                          <CardText>{blogToShow.description}</CardText>
                          <Button
                            tag={Link}
                            to={`/blogs/${blogToShow.id}`}
                            color="primary"
                          >
                            Read More
                          </Button>
                        </CardBody>
                      </Card>
                    </div>
                  );
                })}
              </div>
            </CarouselItem>
          );
        })}
        <CarouselControl
          direction="prev"
          directionText="Previous"
          onClickHandler={() => handleSlideChange(activeSlide - 1)}
        />
        <CarouselControl
          direction="next"
          directionText="Next"
          onClickHandler={() => handleSlideChange(activeSlide + 1)}
        />
      </Carousel>
    </Container>
  );
};

export default BlogCarousel;
