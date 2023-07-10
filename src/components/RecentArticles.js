import { React, useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from "reactstrap";
import { selectAllBlogs } from "../data/blogsSlice";
import BlogCard from "../data/BlogCard";

const BlogCarousel = () => {
  const blogs = selectAllBlogs();

  const cardsPerSlide = 3;

  const totalSlides = Math.ceil(blogs.length / cardsPerSlide);

  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (nextIndex) => {
    setActiveSlide(nextIndex);
  };

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
                  const blogIndex = startIndex + index;

                  const blogToShow =
                    blogIndex > lastBlogIndex
                      ? blogs[blogIndex - blogs.length]
                      : blog;

                  return (
                    <div className="col-md-4" key={blogIndex}>
                      <BlogCard blog={blogToShow} />{" "}
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
