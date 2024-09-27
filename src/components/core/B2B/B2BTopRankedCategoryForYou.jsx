import React from "react";

const categories = [
  {
    name: "Cream Roll",
    image:
      "https://images.jdmagicbox.com/quickquotes/images_main/cks-bakery-bread-and-bakery-19-03-2021-9400-225791235-mp6vt.jpg",
  },
  {
    name: "Coco Chip",
    image: "https://images.jdmagicbox.com/quickquotes/images_main/-1c53l.jpg",
  },
  {
    name: "Cake Toppers",
    image:
      "https://images.jdmagicbox.com/quickquotes/images_main/party-propz-seasonal-decorations-11-08-2021-783-240037580-b4xu1.jpg",
  },
  {
    name: "Bread",
    image: "https://images.jdmagicbox.com/quickquotes/images_main/-ked8v.jpg",
  },
  {
    name: "Whip topping",
    image: "https://images.jdmagicbox.com/quickquotes/images_main/-fs4pb.png",
  },
  {
    name: "Cookie",
    image:
      "https://images.jdmagicbox.com/quickquotes/images_main/nutroactive-brownxcookies-low-carb-high-protein-gluten-free-vanilla-flavour-cookies-210-gm-106779300-o81d8.png",
  },
];

const TopRankedCategoriesForYou = () => {
  return (
    <div className="w-full p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-4">
        Top-Ranked Categories For You
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-3 sm:p-4 text-center"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-24 sm:h-28 md:h-32 object-cover rounded-lg mb-2 sm:mb-4"
            />
            <h3 className="text-sm sm:text-base md:text-lg font-medium">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRankedCategoriesForYou;
