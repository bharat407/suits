import React from "react";

const pgData = [
  {
    name: "Nap Park Womens Pg",
    location: "Hanumantha Nagar - Bangalore",
    image: "https://images.jdmagicbox.com/v2/comp/bangalore/i9…ing-guest-accommodations-for-women-680339w2ua.jpg", 
    reviewer: "kusuma",
    review:
      "Nap Park Womens Pg is excellently managed, budget-friendly, and well-maintained. I had a great experience staying there, feels homely.",
    rating: 5,
  },
  {
    name: "Chegus Perennial Pg",
    location: "Basavanagudi - Bangalore",
    image: "	https://images.jdmagicbox.com/v2/comp/bangalore/a2…galore-paying-guest-accommodations-riznnhrcn4.jpg",
    reviewer: "Altafulla Hurkadli",
    review:
      "Chegus Perennial Pg offers clean, comfortable rooms for both men and women. The rental stay was excellent, with well-maintained facilities and a peaceful environment.",
    rating: 5,
  },
  {
    name: "Millennial Sapphire",
    location: "Bannerghatta Road - Bangalore",
    image: "https://images.jdmagicbox.com/v2/comp/bangalore/b3…ing-guest-accommodations-for-women-88gzj8846o.jpg",
    reviewer: "Kama Raju",
    review:
      "Millennial Sapphire is budget-friendly, with spacious rooms and healthy food options. Excellent choice for a comfortable stay!",
    rating: 5,
  },
];

const PGCard = ({ pg }) => {
  return (
    <div className="max-w-sm bg-white shadow-lg rounded-lg overflow-hidden m-4">
      <img
        className="w-full h-48 object-cover"
        src={pg.image}
        alt={pg.name}
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900">{pg.name}</h3>
        <p className="text-sm text-gray-600">{pg.location}</p>
        <div className="flex items-center mt-2">
          <img
            className="w-8 h-8 rounded-full"
            src="path_to_profile_picture" 
            alt={pg.reviewer}
          />
          <p className="ml-3 text-gray-700">{pg.reviewer}</p>
        </div>
        <p className="mt-2 text-gray-700">{pg.review}</p>
        <div className="mt-2">
          {"⭐".repeat(pg.rating)} {/* Displays the stars */}
        </div>
      </div>
      <div className="p-4 bg-gray-100">
        <button className="text-green-600 font-bold">WhatsApp</button>
      </div>
    </div>
  );
};

const RecentActivity = () => {
  return (
    <div className="container mx-auto p-8 grid grid-cols-1 md:grid-cols-3 gap-4">
      {pgData.map((pg, index) => (
        <PGCard key={index} pg={pg} />
      ))}
    </div>
  );
};

export default RecentActivity;


