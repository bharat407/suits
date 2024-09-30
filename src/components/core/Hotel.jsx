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
    <div className="max-w-[1400px] flex lg:flex-row flex-col bg-white shadow-lg gap-2 py-2 items-center px-2 mx-2 w-full md:w-[72%] rounded-lg overflow-x-hidden">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="flex flex-col sm:flex-row p-4 sm:p-6">
          <div className="w-full sm:w-1/3 lg:w-1/4 mb-4 sm:mb-0">
            <img
              src={imageUrl}
              alt={name}
              className="w-full h-48 sm:h-full object-cover rounded-lg"
            />
          </div>
          <div className="w-full sm:w-2/3 lg:w-3/4 sm:pl-6">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-xl font-bold">{name}</h2>
              <FaRegHeart size={24} className="text-black" />
            </div>
            <div className="flex flex-wrap gap-2 items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="text-sm text-gray-600">
                {totalRatings} Rating
              </span>
              {isVerified && (
                <span className="text-sm text-blue-600">Verified</span>
              )}
              {isPopular && (
                <span className="px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">
                  Popular
                </span>
              )}
            </div>
            <div className="flex items-center mb-2 text-sm text-gray-600">
              <FaMapMarkerAlt className="w-4 h-4 mr-1" />
              <span>
                {address} • {distance}
              </span>
            </div>
            <div className="mb-4">
              {amenities.map((amenity, index) => (
                <span
                  key={index}
                  className="inline-block bg-gray-200 rounded-full px-3 py-1 text-xs sm:text-sm font-semibold text-gray-700 mr-2 mb-2"
                >
                  {amenity}
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center text-sm">
                <FaPhone className="w-4 h-4 mr-2" />
                {phoneNumber}
              </button>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded text-sm">
                Get Best Deal
              </button>
              <button className="border border-gray-300 hover:bg-gray-100 text-gray-700 font-bold py-2 px-4 rounded flex items-center text-sm">
                <FaCommentAlt className="w-4 h-4 mr-2" />
                Chat
              </button>
            </div>
            <div className="text-sm text-gray-600">
              {recentEnquiries} people recently enquired
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelListing;
