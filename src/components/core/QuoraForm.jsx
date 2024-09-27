import React, { useState } from "react";
import { BiUpvote, BiDownvote, BiMessage } from "react-icons/bi";
import { IoMdShare } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";

const QuoraForm = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Sample content to display (replace with actual content)
  const content = `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae
  expedita esse molestias corrupti. Dolores quam reprehenderit numquam,
  eius ipsa odio nesciunt quaerat sed nam tenetur voluptate suscipit. Esse
  minima quasi cumque, voluptatum eius quod repudiandae nam neque debitis,
  nesciunt hic tenetur sit sequi dolorem ut expedita facere id a
  necessitatibus accusantium voluptatibus sed eveniet? Sunt quasi
  obcaecati dolorem voluptate! Alias iusto corporis consequatur, fugiat
  veritatis magnam voluptatum vero labore itaque ab nam quisquam a cum
  consequuntur, provident adipisci ut dicta ea placeat ipsam repudiandae
  eligendi quia quidem deserunt? Necessitatibus ea vero voluptatum
  incidunt aliquam itaque eligendi, porro, totam dolore doloremque illo
  voluptatibus beatae officia fugiat soluta. Dicta illo accusamus
  recusandae consequuntur itaque et, sint minima dolores, aliquam quia
  praesentium? Quisquam ipsa vero nulla vitae laborum.`;

  const words = content.split(" ");
  const preview = words.slice(0, 50).join(" "); // Reduced to 50 words for better mobile view

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="p-4 md:p-6">
        <div className="flex items-center mb-4">
          <img
            src="https://profile.justdial.com/profileImg?i=3Iowzk2Hu7Z%2FdNgv74yC75BTt4z3MjSvz3cgVheaJ0E%3D"
            alt="profile img"
            className="w-10 h-10 rounded-full object-cover object-center mr-3"
          />
          <p className="font-semibold text-gray-800">Riya</p>
        </div>

        <div className="mb-4">
          <p className="text-gray-700 leading-relaxed">
            {isExpanded ? content : `${preview}...`}
          </p>
          <button
            onClick={toggleReadMore}
            className="mt-2 text-blue-600 hover:text-blue-800 transition-colors duration-200 focus:outline-none"
          >
            {isExpanded ? "Read Less" : "Read More"}
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-sm">
          <div className="flex rounded-full border border-gray-300 overflow-hidden">
            <button className="px-3 py-1 flex items-center gap-1 hover:bg-gray-100 transition-colors duration-200">
              <BiUpvote className="text-gray-600" />
              <span className="hidden sm:inline">Upvote</span>
              <span className="text-gray-600 font-semibold">1.8k</span>
            </button>
            <button className="px-2 py-1 border-l border-gray-300 hover:bg-gray-100 transition-colors duration-200">
              <BiDownvote className="text-gray-600" />
            </button>
          </div>

          <button className="flex items-center gap-2 hover:text-blue-600 transition-colors duration-200">
            <BiMessage className="text-gray-600" />
            <span className="text-gray-600">62</span>
          </button>

          <button className="flex items-center gap-2 hover:text-green-600 transition-colors duration-200">
            <IoMdShare className="text-gray-600" />
            <span className="text-gray-600">23</span>
          </button>

          <button className="ml-auto hover:text-gray-800 transition-colors duration-200">
            <BsThreeDots className="text-gray-600" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuoraForm;
