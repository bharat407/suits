import React from "react";

const brandData = [
  {
    image: "https://media.britannia.co.in/Good_Day_Chocochip_ce1e99ab80.jpg",
    logo: "https://images.jdmagicbox.com/quickquotes/logos/Cake/Cake_Britannia.jpg",
    brandName: "BRITANNIA",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvr43KfhvThlXSnSYKoaqmDXeBdPQCCQ2j8A&s",
    logo: "https://images.jdmagicbox.com/quickquotes/logos/Cake/Cake_Winkies.jpg",
    brandName: "Winkies",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREuEwpfmwoqXuB5jXEwRjP5D8fzY-pXt--v0eo1pBbTSMND7_6P1qrhMctUBTwYT8N4NA&usqp=CAU",
    logo: "https://images.jdmagicbox.com/quickquotes/logos/Cake/Cake_Elite.jpg",
    brandName: "Elite",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP68Dzw_XvGXW6SblTD0Hh2IGgb4pAVF1iWw&s",
    logo: "https://images.jdmagicbox.com/quickquotes/logos/Cake/Just_Breads_Cake.jpg",
    brandName: "Just Breads",
  },
  {
    image:
      "https://www.puratos.com/content/dam/corporate/images/press/4953_ct_web_imagegenera-belcolade-1280x1280.jpeg/jcr:content/renditions/cq5dam.web.800.800.jpeg",
    logo: "https://images.jdmagicbox.com/quickquotes/logos/Cake/Puratos_Cake.jpg",
    brandName: "Puratos",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJQOzsTGjMUANEyGUPt90mzSRxKpJzaAygUQ&s",
    logo: "https://images.jdmagicbox.com/quickquotes/logos/Cake/RAJA_Cake.jpg",
    brandName: "Raja",
  },
];

const BrandCard = ({ brand }) => {
  return (
    <div className="flex-shrink-0 w-full sm:w-48 bg-white shadow-lg rounded-lg overflow-hidden my-2">
      <img
        className="w-full h-32 sm:h-40 object-cover"
        src={brand.image}
        alt={brand.brandName}
      />
      <div className="flex h-16 sm:h-20 justify-center items-center p-2">
        <img
          className="object-contain object-center max-h-full"
          src={brand.logo}
          alt={`${brand.brandName} Logo`}
        />
      </div>
    </div>
  );
};

const B2BCategoryTopBrand = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl font-bold mb-2 sm:mb-0">
          Top Brands Based On Your Search
        </h2>
        <a href="#" className="text-blue-600 font-semibold">
          View All
        </a>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {brandData.map((brand, index) => (
          <BrandCard key={index} brand={brand} />
        ))}
      </div>
    </div>
  );
};

export default B2BCategoryTopBrand;
