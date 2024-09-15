import React from "react";
import {
  FaThumbsUp,
  FaMapMarkerAlt,
  FaRegBookmark,
  FaShare,
  FaPhone,
  FaCommentAlt,
  FaWhatsappSquare,
} from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { IoMdStar } from "react-icons/io";
import { BsGraphUpArrow } from "react-icons/bs";
import { IoCopyOutline } from "react-icons/io5";

const BrandDetails = () => {
  return (
    <div className="max-w-[1400px] w-full sm:w-[96%] mx-auto rounded-lg border border-slate-300 overflow-hidden">
      <div className="p-4 sm:p-6 space-y-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-20 h-20 flex-shrink-0">
            <img
              src="https://content.jdmagicbox.com/bangalore/u7/080pxx80.xx80.170601133428.l7u7/logo/b7fecef67fcdc33953bc4b3748680bfa-s.jpg"
              className="w-full h-full object-cover rounded"
              alt="Company Logo"
            />
          </div>
          <div className="flex-grow">
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <div className="flex items-center gap-2">
                <FaThumbsUp className="text-blue-500" />
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  Isaral Business Solutions Pvt ltd
                </h2>
              </div>
              <div className="flex items-center gap-2">
                <span className="bg-green-500 text-white px-2 py-1 rounded text-sm font-semibold">
                  4.8
                </span>
                <IoMdStar className="text-yellow-400" />
                <p className="text-sm text-gray-600">307 Ratings</p>
              </div>
            </div>
            <div className="mt-2 flex items-center text-sm text-gray-600">
              <FaMapMarkerAlt className="w-4 h-4 mr-1" />
              <span className="flex flex-wrap gap-2">
                <p>NagarBhavi Bangalore</p> • <p>3.67 km</p> •{" "}
                <span className="text-green-500">Opens at 9:30 Tomorrow</span> •
                9 Years in Business
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center text-gray-600 gap-2 text-sm sm:text-base">
          <BsGraphUpArrow className="text-blue-500" />
          <span>3570 people recently enquired</span>
        </div>

        <div className="flex flex-wrap gap-3">
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded flex items-center transition duration-300">
            <FaPhone className="w-4 h-4 mr-2" />
            9058756578
          </button>
          <button className="flex items-center gap-2 bg-white border border-green-500 text-green-500 hover:bg-green-50 font-bold py-2 px-4 rounded transition duration-300">
            <FaWhatsappSquare className="text-2xl" />
            Whatsapp
          </button>
          <button className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
            <FaCommentAlt className="w-4 h-4 mr-2" />
            Enquire Now
          </button>
          <button className="p-2 border border-slate-300 bg-white hover:bg-slate-100 rounded-full transition duration-300">
            <IoCopyOutline className="text-gray-600 font-semibold" />
          </button>
          
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm hover:bg-slate-200 transition duration-300">
            Digital signature services
          </span>
          <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm hover:bg-slate-200 transition duration-300">
            Online shopping websites
          </span>
        </div>

        <div className="mt-4 sm:mt-6">
          <h3 className="text-lg font-semibold mb-2">Click to Rate</h3>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                className="p-2 hover:bg-yellow-100 border border-slate-300 rounded-md transition duration-300"
              >
                <IoMdStar className="text-yellow-400" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandDetails;
