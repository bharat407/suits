import React from "react";

const pgData = [
  {
    name: "Nap Park Womens Pg",
    location: "Hanumantha Nagar - Bangalore",
    image:
      "	https://images.jdmagicbox.com/v2/comp/bangalore/l1/080pxx80.xx80.240625164535.g4l1/catalogue/kaf6k7xcprkbl29-bszm7sg2fu.jpg",
    reviewer: "kusuma",
    review:
      "Nap Park Womens Pg is excellently managed, budget-friendly, and well-maintained. I had a great experience staying there, feels homely.",
    rating: 5,
  },
  {
    name: "Chegus Perennial Pg",
    location: "Basavanagudi - Bangalore",
    image:
      "	https://images.jdmagicbox.com/v2/comp/bangalore/i3/080pxx80.xx80.221011191254.c7i3/catalogue/-62uizcvrti.jpg",
    reviewer: "Altafulla Hurkadli",
    review:
      "Chegus Perennial Pg offers clean, comfortable rooms for both men and women. The rental stay was excellent, with well-maintained facilities and a peaceful environment.",
    rating: 5,
  },
  {
    name: "Millennial Sapphire",
    location: "Bannerghatta Road - Bangalore",
    image:
      " https://images.jdmagicbox.com/v2/comp/bangalore/l4/080pxx80.xx80.131219123558.j5l4/catalogue/jayaraja-and-associates-mahalakshmipuram-layout-bangalore-digital-signature-services-54oppksw2b.jpg",
    reviewer: "Kama Raju",
    review:
      "Millennial Sapphire is budget-friendly, with spacious rooms and healthy food options. Excellent choice for a comfortable stay!",
    rating: 5,
  },
];

const PGCard = ({ pg }) => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden m-2 mx-auto">
      <img className="w-full h-48 object-cover" src={pg.image} alt={pg.name} />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900">{pg.name}</h3>
        <p className="text-sm text-gray-600">{pg.location}</p>
        <div className="flex items-center mt-2">
          <img
            className="w-8 h-8 rounded-full"
            src="https://profile.justdial.com/profileImg?i=mc8%2FHUxn7w%2F4MkjxTRN7DoJLuCgIZ3AS7a8%2B9wIis7k%3D"
            alt={pg.reviewer}
          />
          <p className="ml-3 text-gray-700">{pg.reviewer}</p>
        </div>
        <p className="mt-2 text-gray-700">{pg.review}</p>
        <div className="mt-2">
          {"⭐".repeat(pg.rating)} 
        </div>
      </div>
      <div className="p-4 bg-gray-100">
        <button className="text-blue-600 font-bold">WhatsApp</button>
      </div>
    </div>
  );
};

const RecentActivity = () => {
  return (
    <div className="container mx-auto px-2 py-2 grid grid-cols-1 md:grid-cols-3 gap-4">
      {pgData.map((pg, index) => (
        <PGCard key={index} pg={pg} />
      ))}
    </div>
  );
};

export default RecentActivity;
