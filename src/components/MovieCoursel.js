import React from "react";
// import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css"; 
import './MovieCoursel.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 4 // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
    slidesToSlide: 3 // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 767, min: 464 },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.
  }
};
const sliderImageUrl = [
  //First image url
  {
    url:
      "https://images.bauerhosting.com/legacy/empire-tmdb/films/127585/images/ai9UKd8KownQKGIh1m5p3DuEeMm.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80?crop=0.9760858955588091xw:1xh;center,top&resize=480:*"
  },
  {
    url:
      "https://images.bauerhosting.com/legacy/empire-tmdb/films/127585/images/ai9UKd8KownQKGIh1m5p3DuEeMm.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80?crop=0.9760858955588091xw:1xh;center,top&resize=480:*"
  },
  {
    url:
      "https://images.bauerhosting.com/legacy/empire-tmdb/films/127585/images/ai9UKd8KownQKGIh1m5p3DuEeMm.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80?crop=0.9760858955588091xw:1xh;center,top&resize=480:*"
  },
  {
    url:
      "https://images.bauerhosting.com/legacy/empire-tmdb/films/127585/images/ai9UKd8KownQKGIh1m5p3DuEeMm.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80?crop=0.9760858955588091xw:1xh;center,top&resize=480:*"
  },
  {
    url:
      "https://images.bauerhosting.com/legacy/empire-tmdb/films/127585/images/ai9UKd8KownQKGIh1m5p3DuEeMm.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80?crop=0.9760858955588091xw:1xh;center,top&resize=480:*"
  },
  {
    url:
      "https://images.bauerhosting.com/legacy/empire-tmdb/films/127585/images/ai9UKd8KownQKGIh1m5p3DuEeMm.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=1440&q=80?crop=0.9760858955588091xw:1xh;center,top&resize=480:*"
  }
];
const MovieCoursel = () => {
  return (
    <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={false}
        swipeable={true}
        draggable={true}
        showDots={false}
        infinite={true}
        removeArrowOnDeviceType={["tablet", "mobile"]}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        {sliderImageUrl.map((imageUrl, index) => {
          return (
            <div className="slider" key={index}>
              <img src={imageUrl.url} alt="movie" />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default MovieCoursel;
