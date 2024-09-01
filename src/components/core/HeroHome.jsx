import React from 'react'
import skincare from "../../assets/skin care.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CategoryCard = ({source, text}) => {
  return (
    <div className='rounded-lg flex  flex-col relative w-full bg-blue-300 items-center justify-center'>
      <p className='text-left'>{text}</p>
      <img src={source} width={160} className=' absolute ' alt="image" />
    </div>
  )
}

const Carousel = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    dots:true,
    
  };

  const images = [
    "https://images.jdmagicbox.com/bangalore/n8/080pxx80.xx80.170420183157.q2n8/cbnr/f1eb937d8c8f676d841feada5ce42ec3.jpg",
    "https://images.jdmagicbox.com/bangalore/n8/080pxx80.xx80.231127172703.a6n8/cbnr/74fce72925ccf71ca14f584cdfdd41e5.jpg",
    "https://images.jdmagicbox.com/bangalore/l3/080pxx80.xx80.121110191448.p3l3/cbnr/26cd8fde3eb30d839bbf101196222d4b.jpg",
    "https://images.jdmagicbox.com/bangalore/m3/080pxx80.xx80.190821143520.h4m3/cbnr/4871777756ef945b07b6c2545cfabef6.jpg",
  ];

  return (
    <div className="md:w-1/2 w-full lg:mx-0 mx-4 ">
      <Slider {...settings} >
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-[full] object-cover h-full rounded-lg text-black object-center"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};



const HeroHome = () => {
  return (
    <div className='max-w-[1400px] w-full h-[40vh] my-2 flex md:flex-row flex-col gap-6 justify-center mx-auto items-center'>
        <Carousel className="h-full basis-[50%]"/>
      <div className='category-card rounded-lg flex gap-4 md:basis-[50%] w  -[98%] h-full'>
        <CategoryCard className="basis-[32%]" source="https://png.pngtree.com/png-vector/20231019/ourmid/pngtree-power-lineman-electrician-png-image_10213755.png " text="Electritian"></CategoryCard>
        <CategoryCard className="basis-[32%]" source="https://png.pngtree.com/png-vector/20220118/ourmid/pngtree-cartoon-worker-for-refueling-auto-repair-vector-vehicle-repair-png-image_4189126.png " text="Mechanic"></CategoryCard>
        <CategoryCard className="basis-[32%]" source="https://png.pngtree.com/png-clipart/20230918/ourmid/pngtree-photo-men-doctor-physician-chest-smiling-png-image_10132895.png " text="Doctor"></CategoryCard>
      </div>
    </div>
  )
}

export default HeroHome
