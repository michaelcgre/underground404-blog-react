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
      >
        <Link to={`/blog/${blog.id}`} className="carousel-link">
          <img
            className="banner-images"
            src={blog.carouselImage}
            alt={blog.title}
          />
        </Link>
        <CarouselCaption
          className="banner-carousel-title fs-1 fw-bold"
          captionText={blog.title}
        />
      </CarouselItem>
    );
  });

  return (
    <div className="banner-wrapper">
      <h1 className="d-flex align-items-center justify-content-center banner-title mb-5">
        Beyond the Mainstream
      </h1>
      <Container className="carousel-section d-flex align-items-center justify-content-center">
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
          />
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={next}
          />
        </Carousel>
      </Container>
    </div>
  );
}

export default BannerCarousel;
