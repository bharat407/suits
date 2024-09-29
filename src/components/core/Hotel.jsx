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
    <>
      
      <div className="max-w-[1400px] flex lg:flex-row flex-col bg-white shadow-lg gap-2 py-2 items-center px-2 mx-2 w-full md:w-[72%] rounded-lg overflow-x-hidden">
        <div className="flex  items-center relative w-full h-full py-6 gap-4 px-4 border-gray-500 border rounded-lg">
          <div className="w-[30%] ">
            <img
              src={imageUrl}
              alt={name}
              className="w-full rounded-lg  object-cover"
            />
          </div>
          <div className="w-2/3 ">
            <div className="flex justify-between items-start ">
              <h2 className="text-xl font-bold">{name}</h2>
              <FaRegHeart
                size={34}
                className="text-black absolute top-2 right-4  "
              />
            </div>
            <div className="flex gap-2 items-center my-1">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(rating) ? "text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
              <span className=" text-sm text-gray-600">
                {totalRatings} Rating
              </span>
              {isVerified && (
                <span className=" text-sm text-blue-600">Verified</span>
              )}
              {isPopular && (
                <span className=" px-2 py-1 bg-orange-100 text-orange-800 text-xs rounded">
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
            <div className="my-2 flex items-center flex-wrap gap-3">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center">
                <FaPhone className="w-4 h-4 mr-2" />
                {phoneNumber}
              </button>
              <button className=" bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4  rounded">
                Get Best Deal
              </button>
              <button className=" border border-gray-300 hover:bg-gray-100 text-gray-700 font-bold py-2 px-4 rounded flex items-center">
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
    </>
  );
};

export default HotelListing;
