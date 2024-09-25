import React, { useState } from "react";
import { BiUpvote, BiDownvote, BiMessage } from "react-icons/bi";
import { IoMdShare } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import call from "../../assets/call.png";

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

  const words = content.split(' ');
  const preview = words.slice(0, 100).join(' '); // Adjust the word count if necessary

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full px-2 md:w-[70%] bg-white flex flex-col border gap-3 py-3 border-gray-200 rounded-lg my-2 md:px-4 ">
      <div className="flex gap-3 items-center">
        <img
          src={call}
          width={25}
          alt="profile img"
          className="rounded-full object-cover object-center"
        />
        <p className="font-semibold">Name / Id</p>
      </div>

      <div>
        {/* Display preview or full content based on the state */}
        <p>
          {isExpanded ? content : `${preview}...`}
        </p>
        <button onClick={toggleReadMore} className="text-blue-500">
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>

      <div className="bg-white flex items-center gap-4 py-2">
        <div className="flex">
          <div className="rounded-l-full px-2 py-1 flex border border-gray-400 items-center gap-1 font-semibold">
            <BiUpvote />
            <p>Upvote . 1.8k</p>
          </div>
          <div className="rounded-r-full px-2  py-2 flex border border-gray-400 items-center gap-2 font-semibold">
            <BiDownvote />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <BiMessage />
          <p>62</p>

          <IoMdShare />
          <p>23</p>
        </div>
        <BsThreeDots />
      </div>
    </div>
  );
};

export default QuoraForm;
