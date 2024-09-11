import React from "react";
import { useNavigate } from "react-router-dom";
const PopularSearches = () => {
  const navigate = useNavigate();

  const handleLeave = (e) => {
    e.preventDefault();
    navigate("/quora");
  };

  const services = [
    {
      title: "Packers & Movers",
      imageUrl:
        "https://akam.cdn.jdmagicbox.com/images/website/packersandmovers.png", // Replace with actual image URL
    },
    {
      title: "AC Repair & Service",
      imageUrl: "https://akam.cdn.jdmagicbox.com/images/website/ac_repairs.png", // Replace with actual image URL
    },
    {
      title: "Carpenters",
      imageUrl: "https://akam.cdn.jdmagicbox.com/images/website/carpenter.png", // Replace with actual image URL
    },
    {
      title: "Estate Agents",
      imageUrl:
        "	https://akam.cdn.jdmagicbox.com/images/website/estate_agent.png", // Replace with actual image URL
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Popular Searches</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md shadow-gray-400 overflow-hidden"
          >
            <div className=" overflow-hidden ">
              <img
                src={service.imageUrl}
                alt={service.title}
                className="w-full h-48 hover:scale-[1.12] object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-lg font-medium">{service.title}</h3>
              <button
                onClick={handleLeave}
                className="mt-4 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
              >
                Enquire Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularSearches;
