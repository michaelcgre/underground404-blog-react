import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";
import { selectFeaturesBlogs } from "../data/blogsSlice";

function BannerCarousel(props) {
  const featuredBlogs = selectFeaturesBlogs();
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === featuredBlogs.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? featuredBlogs.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = featuredBlogs.map((blog, index) => {
    return (
      <CarouselItem
        tag="div"
        key={index}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        className="banner-carousel-item"
      >
        <Link to={`/blog/${blog.id}`} className="carousel-link">
          <img
            className="banner-images"
            src={blog.carouselImage}
            alt={blog.title}
          />
          <CarouselCaption
            className="banner-carousel-title fs-1 fw-bold"
            captionText={blog.title}
          />
        </Link>
      </CarouselItem>
    );
  });

  return (
    <div className="banner-wrapper">
      <Container className="carousel-section d-flex flex-column align-items-center justify-content-center">
        <h1 className="banner-title mb-5">Beyond the Mainstream</h1>
        <Carousel
          className="banner-carousel mb-5"
          activeIndex={activeIndex}
          next={next}
          previous={previous}
        >
          <CarouselIndicators
            items={featuredBlogs}
            activeIndex={activeIndex}
            onClickHandler={goToIndex}
            className="banner-carousel-indicators"
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
            className="banner-carousel-prev"
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
            className="banner-carousel-next"
          />
        </Carousel>
      </Container>
    </div>
  );
}

export default BannerCarousel;
