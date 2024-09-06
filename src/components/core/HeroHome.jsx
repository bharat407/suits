import React from "react";
import Slider from "react-slick";
import { FaGreaterThan } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CategoryCard = ({ source, text, desc }) => {
  return (
    <div className="rounded-lg cursor-pointer flex  overflow-hidden flex-col relative bg-purple-300 w-[24%] md:w-[30%] lg:w-[18.75%]  items-center  justify-center">
      <p className="text-left absolute hover:scale-[1.12]  left-2 top-2  text-lg font-semibold">
        {text}
      </p>
      <p className="text-base text-slate-500 absolute top-8 left-2 w-1/3">
        {desc}
      </p>
      <img
        alt="imag"
        src={source}
        width={180}
        className=" absolute right-[-25%] bottom-[0%]"
      />
      <button className="absolute bg-purple-500 px-1 py-1 rounded-md left-0 bottom-8 ml-1 hover:grow">
        <FaGreaterThan></FaGreaterThan>
      </button>
    </div>
  );
};

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots: true,
  };

  const images = [
    "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/banner_webflight_2024.webp",
    "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/banner_webflight_2024.webp",
    "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/banner_webflight_2024.webp",
    "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/banner_webflight_2024.webp",
  ];

  return (
    <div className="py-1 w-[98%] lg:w-2/3 xl:w-1/2 rounded-md mx-auto my-4">
      <Slider {...settings}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

const HeroHome = () => {
  return (
    <div className="w-full overflow-hidden  mx-3 h-full my-2  flex flex-col lg:flex-row gap-2 justify-evenly items-center ">
      <Carousel className=" " />
      <div className="category-card rounded-lg mt-2 lg:mt-0 flex gap-2 lg:w-[60%] min-w-[60%]  w-[98%] h-[12rem] md:h-[16.25rem]">
        <CategoryCard
          className=""
          source="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-power-lineman-electrician-png-image_10213755.png "
          text="Electritian"
          desc="Get nearest Vendors"
        ></CategoryCard>
        <CategoryCard
          className=""
          source="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-power-lineman-electrician-png-image_10213755.png "
          text="Mechanic"
          desc="Finest Agents"
        ></CategoryCard>
        <CategoryCard
          className=""
          source="https://png.pngtree.com/png-clipart/20230918/ourmid/pngtree-photo-men-doctor-physician-chest-smiling-png-image_10132895.png "
          text="Doctor"
        ></CategoryCard>
        <CategoryCard
          className=""
          source="https://png.pngtree.com/png-clipart/20230918/ourmid/pngtree-photo-men-doctor-physician-chest-smiling-png-image_10132895.png "
          text="Doctor"
          desc="Consult Now"
        ></CategoryCard>
      </div>
    </div>
  );
};

export default HeroHome;
