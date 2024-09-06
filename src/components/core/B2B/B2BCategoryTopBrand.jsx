import React from "react";

const brandData = [
  {
    image:
      "https://images.jdmagicbox.com/quickquotes/images_m…ritannia-cakes-06-10-2020-092-210786957-6xl4q.png",
    logo: "https://images.jdmagicbox.com/quickquotes/logos/Cake/Cake_Britannia.jpg",
    brandName: "BRITANNIA",
  },
  {
    image:
      "https://images.jdmagicbox.com/quickquotes/images_m…nkies-cake-rich-butter-275-gm-160114717-uz0t6.jpg",
    logo: "https://images.jdmagicbox.com/quickquotes/logos/Cake/Cake_Winkies.jpg",
    brandName: "Winkies",
  },
  {
    image:
      "https://images.jdmagicbox.com/quickquotes/images_m…-cup-cake-chocolate-170-gm-160114831-1801xo0e.png",
    logo: "https://images.jdmagicbox.com/quickquotes/logos/Cake/Cake_Elite.jpg",
    brandName: "Elite",
  },
  {
    image:
      "https://images.jdmagicbox.com/quickquotes/images_m…t-breads-cakes-28-12-2020-013-219955969-q33t9.jpg",
    logo: "https://images.jdmagicbox.com/quickquotes/logos/Cake/Just_Breads_Cake.jpg",
    brandName: "Just Breads",
  },
  {
    image:
      "https://images.jdmagicbox.com/quickquotes/images_main/cremfil-ultim-376361168-wndkw.jpg",
    logo: "https://images.jdmagicbox.com/quickquotes/logos/Cake/Puratos_Cake.jpg",
    brandName: "Puratos",
  },
  {
    image:
      "	https://images.jdmagicbox.com/quickquotes/images_m…range-cup-cake-28-01-2021-038-220051984-23r1e.png",
    logo: "https://images.jdmagicbox.com/quickquotes/logos/Cake/RAJA_Cake.jpg",
    brandName: "Raja",
  },
];

const BrandCard = ({ brand }) => {
  return (
    <div className="flex-shrink-0 w-48 bg-white shadow-lg rounded-lg overflow-hidden m-2">
      <img
        className="w-full h-32 object-cover"
        src={brand.image}
        alt={brand.brandName}
      />
      <div className="p-4 flex justify-center">
        <img
          className="w-20 h-20 object-contain"
          src={brand.logo}
          alt={`${brand.brandName} Logo`}
        />
      </div>
    </div>
  );
};

const B2BCategoryTopBrand = () => {
  return (
    <div className="container mx-auto p-8">
      <h2 className="text-xl font-bold mb-4">
        Top Brands Based On Your Search
      </h2>
      <div className="flex overflow-x-scroll scrollbar-hide">
        {brandData.map((brand, index) => (
          <BrandCard key={index} brand={brand} />
        ))}
      </div>
      <div className="text-right mt-4">
        <a href="" className="text-blue-600 font-semibold">
          View All
        </a>
      </div>
    </div>
  );
};

export default B2BCategoryTopBrand;
