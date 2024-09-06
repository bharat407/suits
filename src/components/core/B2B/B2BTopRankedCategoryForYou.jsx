import React from "react";

const categories = [
  {
    name: "Cream Roll",
    image:
      "https://images.jdmagicbox.com/quickquotes/images_m…ad-and-bakery-19-03-2021-9400-225791235-mp6vt.jpg",
  },
  {
    name: "Coco Chip",
    image: "https://images.jdmagicbox.com/quickquotes/images_main/-1c53l.jpg",
  },
  {
    name: "Cake Toppers",
    image:
      "https://images.jdmagicbox.com/quickquotes/images_m…al-decorations-11-08-2021-783-240037580-b4xu1.jpg",
  },
  {
    name: "Buns",
    image:
      "https://images.jdmagicbox.com/quickquotes/images_m…n-mix-veg-burger-patty-360-gm-160108959-m7uel.jpg",
  },
  {
    name: "Waffle",
    image:
      "https://images.jdmagicbox.com/quickquotes/images_m…-bakers-waffle-09-12-2021-503-270686255-ptuxn.jpg",
  },
  {
    name: "Cake",
    image: "https://images.jdmagicbox.com/quickquotes/images_main/-92aht.jpg",
  },
];

const TopRankedCategoriesForYou = () => {
  return (
    <div className="w-full p-6">
      <h2 className="text-2xl font-bold mb-4">Top-Ranked Categories For You</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((category, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-4 text-center"
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <h3 className="text-lg font-medium">{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRankedCategoriesForYou;
