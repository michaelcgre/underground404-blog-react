import React, { useState, useEffect } from "react";
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
import "../app/styles/recent_articles.css";

const BlogCarousel = () => {
  const blogs = selectAllBlogs();
  const [cardsPerSlide, setCardsPerSlide] = useState(3);
  const totalSlides = Math.ceil(blogs.length / cardsPerSlide);
  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (nextIndex) => {
    setActiveSlide(nextIndex);
  };

  const lastBlogIndex = blogs.length - 1;

  useEffect(() => {
    const updateCardsPerSlide = () => {
      setCardsPerSlide(window.innerWidth <= 767 ? 1 : 3);
    };

    updateCardsPerSlide();

    window.addEventListener("resize", updateCardsPerSlide);

    return () => {
      window.removeEventListener("resize", updateCardsPerSlide);
    };
  }, []);

  const showPreviousControl = activeSlide > 0;
  const showNextControl = activeSlide < totalSlides - 1;

  return (
    <div className="recent-articles-section">
      <Container>
        <h2 className="d-flex justify-content-center align-content-center fs-1 my-4">
          Recent Articles
        </h2>
        <Carousel
          activeIndex={activeSlide}
          next={handleSlideChange}
          previous={handleSlideChange}
          interval={false}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => {
            const startIndex = slideIndex * cardsPerSlide;
            const endIndex = startIndex + cardsPerSlide;
            const slideBlogs = blogs.slice(startIndex, endIndex);

            // ...

            return (
              <CarouselItem key={slideIndex}>
                <div className="row justify-content-center align-content-center">
                  {slideBlogs.map((blog, index) => {
                    const blogIndex = startIndex + index;

                    const blogToShow =
                      blogIndex > lastBlogIndex
                        ? blogs[blogIndex - blogs.length]
                        : blog;

                    return (
                      <div
                        className="col-md-4 blog-card-wrapper"
                        key={blogIndex}
                      >
                        <BlogCard blog={blogToShow} />{" "}
                      </div>
                    );
                  })}
                </div>
              </CarouselItem>
            );
          })}
          {showPreviousControl && (
            <div className="carousel-control-prev">
              <CarouselControl
                direction="prev"
                directionText="Previous"
                onClickHandler={() => handleSlideChange(activeSlide - 1)}
              />
            </div>
          )}
          {showNextControl && (
            <div className="carousel-control-next">
              <CarouselControl
                direction="next"
                directionText="Next"
                onClickHandler={() => handleSlideChange(activeSlide + 1)}
              />
            </div>
          )}
        </Carousel>
      </Container>
    </div>
  );
};

export default BlogCarousel;
