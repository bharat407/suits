/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { FcAdvertising } from "react-icons/fc";
import { BsGraphUpArrow } from "react-icons/bs";
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className=" top-0 left-0 w-full overflow-hidden  z-50 bg-white shadow-md py-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
        {/* Left Section: Logo */}
        <div className="flex ml-5 items-center">
          <a
            href="/"
            aria-label="Justdial"
            title="Justdial"
            className="flex items-center text-4xl text-[#d10001]"
          >
            NITAR
          </a>
        </div>

        {/* Right Section: Navigation */}
        <div className="hidden md:flex items-center">
          {/* Language Dropdown */}
          <div className="relative group">
            <button className="text-[#0076D7] hover:bg-[#EBEBEB] hover:rounded-md px-3 py-2 font-medium flex items-center space-x-1">
              <img
                src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/nav_language_icon.svg"
                alt=""
              />
              <span>EN</span>
              <RiArrowDropDownLine size={28} />
            </button>

            {/* Dropdown Menu */}
            <div className="absolute left-0 mt-1 w-32 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-500">
              {[
                "English - EN",
                "हिंदी - HI",
                "मराठी - MR",
                "বেঙ্গলি - BN",
                "ગુજરાતી - GU",
                "ಕನ್ನಡ - KN",
                "தமிழ் - TA",
              ].map((lang, index) => (
                <a
                  href="#"
                  key={index}
                  className="block px-4 py-2 text-gray-800 hover:text-[#0076D7] hover:bg-[#EBEBEB]"
                >
                  {lang}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          {["Investor Relations"].map((text, index) => (
            <a
              key={index}
              className="text-black hover:bg-[#EBEBEB] gap-2 mr-[3vh] cursor-pointer hover:rounded-md px-3 py-2 transition flex items-center"
            >
              {index === 2 ? (
                <FcAdvertising />
              ) : index === 3 ? (
                <BsGraphUpArrow />
              ) : null}
              {text}
            </a>
          ))}

          {/* Login Button */}
          <button className="bg-[#0076d7] text-white mr-4 px-4 py-2 rounded-md hover:bg-[#41A9FF] transition">
            Login / Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-black hover:bg-[#EBEBEB] p-2 rounded-md transition"
          >
            {isMobileMenuOpen ? <IoMdClose size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white p-4 shadow-md rounded-md mt-2">
          {[
            "We are Hiring",
            "Investor Relations",
            "Advertise",
            "Free Listing",
          ].map((text, index) => (
            <a
              key={index}
              className="text-black hover:bg-[#EBEBEB] cursor-pointer hover:rounded-md px-3 py-2 transition flex items-center"
            >
              {index === 2 ? (
                <FcAdvertising />
              ) : index === 3 ? (
                <BsGraphUpArrow />
              ) : null}
              {text}
            </a>
          ))}
          <button className="w-full bg-[#0076d7] text-white px-4 py-2 rounded-md hover:bg-[#41A9FF] transition mt-2">
            Login / Sign Up
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
