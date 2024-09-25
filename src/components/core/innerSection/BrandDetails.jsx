import React from "react";
import {
  FaMapMarkerAlt,
  FaWhatsapp,
  FaRegBookmark,
  FaShare,
  FaPen,
} from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoMdStar } from "react-icons/io";

const BrandDetails = () => {
  return (
    <div className=" w-full bg-white shadow-lg rounded-xl overflow-hidden">
      <div className="p-4 space-y-4">
        {/* Header Section */}
        <div className="flex items-center space-x-4">
          <img
            src="https://content.jdmagicbox.com/bangalore/u7/080pxx80.xx80.170601133428.l7u7/logo/b7fecef67fcdc33953bc4b3748680bfa-s.jpg"
            alt="Company Logo"
            className="w-12 h-12 rounded-md"
          />
          <div className="flex-grow">
            <div className="flex items-center justify-between">
              <h1 className="text-xl font-bold text-gray-800">
                Isaral Business Solutions Pvt Lt
              </h1>
              <div className="flex space-x-2">
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                  Digital Signature Services
                </span>
                <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm">
                  Online Shopping Websites
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2 mt-1">
              <span className="bg-green-600 text-white px-2 py-0.5 rounded text-sm font-semibold">
                4.8 ★
              </span>
              <span className="text-sm text-gray-600">370 Ratings</span>
              <span className="text-sm text-blue-600 font-semibold">
                Verified
              </span>
            </div>
          </div>
        </div>

        {/* Location and Business Info */}
        <div className="text-sm text-gray-600 justify-between  flex items-center space-x-2">
          <span className="flex flex-row gap-3 items-center">
            <FaMapMarkerAlt />
            Nagarbhavi, Bangalore • 3.67 km •{" "}
            <span className="text-green-600">Open until 8:00 pm</span> • 9 Years
            in Business
          </span>
          <span className=" flex flex-row gap-3 items-center">
            <BsGraphUpArrow className="text-blue-500" />
            1904 people recently enquired
          </span>
        </div>

        {/* Recent Enquiries */}
        <div className="flex items-center justify-between text-sm text-gray-600 space-x-2">
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition duration-300">
              09980228364
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300">
              Enquire Now
            </button>
            <button className="px-4 py-2 border border-green-600 text-green-600 rounded-md hover:bg-green-50 transition duration-300 flex items-center">
              <FaWhatsapp className="mr-2" />
              WhatsApp
            </button>
            <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition duration-300">
              <FaShare />
            </button>
            <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition duration-300">
              <FaRegBookmark />
            </button>
            <button className="p-2 border border-gray-300 rounded-md hover:bg-gray-100 transition duration-300">
              <FaPen />
            </button>
          </div>
        </div>

        {/* Action Buttons */}

        {/* Rating Section */}
        <div className="flex items-center justify-between">
          <div>
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                className="text-gray-300 hover:text-yellow-400 transition duration-300"
              >
                <IoMdStar size={24} className="inline" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandDetails;
