import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const images = [
    "https://images.jdmagicbox.com/bangalore/n8/080pxx80.xx80.170420183157.q2n8/cbnr/f1eb937d8c8f676d841feada5ce42ec3.jpg",
    "https://images.jdmagicbox.com/bangalore/n8/080pxx80.xx80.231127172703.a6n8/cbnr/74fce72925ccf71ca14f584cdfdd41e5.jpg",
    "https://images.jdmagicbox.com/bangalore/l3/080pxx80.xx80.121110191448.p3l3/cbnr/26cd8fde3eb30d839bbf101196222d4b.jpg",
  ];

  return (
    <div className="w-full mx-auto">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-auto"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
