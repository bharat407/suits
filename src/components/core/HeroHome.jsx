/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import Slider from "react-slick";
import { FaGreaterThan } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import { useNavigate } from "react-router-dom";

import "slick-carousel/slick/slick-theme.css";

const CategoryCard = ({ source, text, desc, onclick }) => {
  return (
    <div
      className="rounded-lg cursor-pointer flex  overflow-hidden flex-col relative bg-purple-300 w-[24%] md:w-[30%] lg:w-[18.75%]  items-center  justify-center"
      onClick={onclick}
    >
      <p className="text-left absolute hover:scale-[1.12]  left-2 top-2  text-lg font-semibold">
        {text}
      </p>
      <p className="text-base text-slate-500 absolute top-8 left-2 w-1/3">
        {desc}
      </p>
      <img
        alt="image"
        src={source}
        width={180}
        className=" absolute right-[-10%] bottom-[0%]"
      />
      <button className="absolute bg-blue-600 px-1 py-1 rounded-md text-sm left-0 bottom-8 ml-1 hover:grow">
        <FaGreaterThan />
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
    "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/banner_cctv_2024.webp",
    "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/banner_webflight_2024.webp",
    "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/gchaturthiweb.png",
    "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/banner_hotels_2024.webp",
    "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/banner_packersmovers_2024.webp",
    "https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/banner_interiordesigners_2024.webp",
  ];

  return (
    <div className="py-1 w-[98%] lg:w-2/3 xl:w-1/2 rounded-md  my-4">
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
  const navigate = useNavigate();

  const handleNavigate = (e) => {
    e.preventDefault();
    navigate("/b2b");
  };

  const handlereal = (e) => {
    e.preventDefault();
    navigate("/real");
  };

  const handlerepair = (e) => {
    e.preventDefault();
    navigate("/repair");
  };

  return (
    <div className="w-full overflow-hidden  mx-3 h-full my-2  flex flex-col lg:flex-row gap-2 justify-evenly items-center ">
      <Carousel className=" " />
      <div className="category-card rounded-lg mt-2 lg:mt-0 flex gap-2 lg:w-[60%] min-w-[60%]  w-[98%] h-[12rem] md:h-[16.25rem]">
        <CategoryCard
          className=""
          source="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-power-lineman-electrician-png-image_10213755.png "
          text="B2B"
          desc="Get nearest Vendors"
          onclick={handleNavigate}
        />
        <CategoryCard
          className=""
          source="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/b2b_square_hotkey.webp?w=1920&q=75 "
          text="Quick notes"
          desc="Finest Agents"
          onclick={handlerepair}
        />
        <CategoryCard
          className=""
          source="https://png.pngtree.com/png-clipart/20230918/ourmid/pngtree-photo-men-doctor-physician-chest-smiling-png-image_10132895.png "
          text="Real Estate"
          desc="Finest Agents"
          onclick={handlereal}
        />
        <CategoryCard
          className=""
          source="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/repair_square_hotkey.webp?w=1920&q=75 "
          text="repair and service"
          desc="Consult Now"
        />
      </div>
    </div>
  );
};

export default HeroHome;
