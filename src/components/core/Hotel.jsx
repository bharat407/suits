import React from "react";
import {
  FaStar,
  FaMapMarkerAlt,
  FaPhone,
  FaRegHeart,
  FaCommentAlt,
} from "react-icons/fa";

import { Hotel } from "../../Data/Hotel";

const HotelListing = () => {
  const {
    name,
    rating,
    totalRatings,
    isVerified,
    isPopular,
    address,
    distance,
    amenities,
    phoneNumber,
    recentEnquiries,
    imageUrl,
  } = Hotel;

  return (
    //   border border-gray-500 rounded-lg p-6 w-[70%] mb-3
    <div className="max-w-2xl mx-auto bg-white shadow-lg border border-gray-500 p-6 mb-3 w-[70%] rounded-lg overflow-hidden">
      <div className="flex items-center">
        <div className="w-1/3 relative">
          <img
            src={imageUrl}
            alt={name}
            className="w-full rounded-lg h-[70%] object-cover"
          />
        </div>
        <div className="w-2/3 p-5">
          <div className="flex justify-between items-start">
            <h2 className="text-xl font-bold">{name}</h2>
            <FaRegHeart size={34} className="text-black  " />
          </div>
          <div className="flex items-center mt-2">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
                }`}
              />
            ))}
            <span className="ml-2 text-sm text-gray-600">
              {totalRatings} Rating
            </span>
            {isVerified && (
              <span className="ml-2 text-sm text-blue-600">Verified</span>
            )}
            {isPopular && (
              <span className="ml-2 px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">
                Popular
              </span>
            )}
          </div>
          <div className="flex items-center mt-2 text-sm text-gray-600">
            <FaMapMarkerAlt className="w-4 h-4 mr-1" />
            <span>
              {address} • {distance}
            </span>
          </div>
          <div className="mt-2">
            {amenities.map((amenity, index) => (
              <span
                key={index}
                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
              >
                {amenity}
              </span>
            ))}
          </div>
          <div className="mt-4 flex items-center">
            <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center">
              <FaPhone className="w-4 h-4 mr-2" />
              {phoneNumber}
            </button>
            <button className="ml-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-1  rounded">
              Get Best Deal
            </button>
            <button className="ml-2 border border-gray-300 hover:bg-gray-100 text-gray-700 font-bold py-2 px-4 rounded flex items-center">
              <FaCommentAlt className="w-4 h-4 mr-2" />
              Chat
            </button>
          </div>
          <div className="mt-2 text-sm text-gray-600">
            {recentEnquiries} people recently enquired
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelListing;
