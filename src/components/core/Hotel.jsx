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


    <div className="flex flex-col md:flex-row mx-auto max-w-[1400px] w-[full] justify-center items-center gap-3 ">

    <div className="max-w-2xl  bg-white shadow-lg border border-gray-500 p-3 w-[98%] md:w-[75%] rounded-lg overflow-hidden">
      <div className="flex items-center">
        <div className="w-1/3 relative">
          <img
            src={imageUrl}
            alt={name}
            className="w-full rounded-lg  object-cover"
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
      {/* sidebar section */}
      <div className="sidebar w-[95%]  md:w-[24%] flex flex-col gap-2 border  border-gray-500 rounded-lg py-4 px-4 my-4">
        <h1 className="flex gap-1 font-semibold">
          Get the list of top <p className="text-blue-700">Banquet Halls</p>
        </h1>
        <p className="text-sm">
          We'll send you contact details in seconds for free
        </p>
        <h3 className="font-semibold">
          What Type of Banquet Hall You are looking for?{" "}
        </h3>
        <form action="" className="flex flex-col gap-2">
          <div className="flex gap-4">
            <div className="flex gap-2">
              {" "}
              <input type="radio" name="ac" id="ac" />
              <label htmlFor="">AC Banquet Halls</label>
            </div>
            <div className="flex gap-2">
              <input type="radio" name="ac" id="ac" />
              <label htmlFor="">AC Banquet Halls</label>
            </div>
          </div>

          <input
            type="text"
            placeholder="Name"
            className="border border-gray-500 rounded-sm outline-none px-2 py-1 w-full"
          />
          <input
            type="number"
            placeholder="Mobile Number"
            className="border border-gray-500 rounded-sm outline-none w-full py-1 px-2"
          />
          <button className="bg-blue-600 rounded-md w-full py-2 text-white">
            Get Best Deal
          </button>
        </form>
      </div>
    </div>
  );
};

export default HotelListing;
