import { React, useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { FaSearch, FaMicrophone } from "react-icons/fa";

const SearchBar = () => {
  const contentData = [
    { number: "‘4.4 Crore+’", description: "Businesses" },
    { number: "‘5.6 Crore+’", description: "Products & Services" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % contentData.length);
        setFade(false);
      }, 1000);
    }, 2500);

    return () => clearInterval(interval);
  }, [contentData.length]);

  return (
    <>
      <div className="flex flex-col mx-auto w-full gap-2 my-2 px-6 max-w-[1400px]">
        <div className="relative mt-3">
          {/* Static part */}
          <h2 className="text-3xl font-semibold">
            Search across{" "}
            <span
              className={`inline-block transition-opacity duration-500 ${
                fade ? "opacity-0" : "opacity-100"
              }`}
            >
              {/* Dynamic part with number and description */}
              <span>{contentData[currentIndex].number}</span>{" "}
              <span className="text-blue-500">
                {contentData[currentIndex].description}
              </span>
            </span>
          </h2>
        </div>
        <div className=" w-2/3 flex gap-4 mt-1">
          <span className="border border-black bg-[#EEEEEE] w-1/3 rounded-xl gap-2 flex items-center  ">
            <CiLocationOn className="text-2xl ml-2" />
            <input
              type="text"
              placeholder="Mumbai"
              className="text-xl  placeholder:text-black placeholder:text-xl bg-[#EEEEEE] w-full py-3"
            />
          </span>
          <div className="border border-black w-2/3 rounded-lg gap-2 flex items-center  ">
            <input
              type="text"
              placeholder="Search In Mumbai"
              className="text-xl px-4 outline-none placeholder:text-black placeholder:text-xl bg-transparent w-full py-3"
            />
            <img
              alt=""
              src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/jdvoice_mic.gif"
              className=" h-[5vh] cursor-pointer"
            />
            <button className="bg-[#fe610c] hover:bg-[#FF7D18] px-1 flex justify-center items-center py-3 mx-1 rounded-md">
              <FaSearch className="text-2xl text-white mx-2" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
