/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { FcAdvertising, FcGoogle } from "react-icons/fc";
import { BsGraphUpArrow } from "react-icons/bs";
import { HiMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { X } from "lucide-react";

const LoginModal = ({ isOpen, onClose }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [agreeTerms, setAgreeTerms] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg w-full max-w-[90%] sm:max-w-[400px] md:max-w-[450px]">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="text-3xl sm:text-4xl text-[#d10001] mb-2 sm:mb-0">
            Nitar
          </div>
          <div className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-0">
            Welcome
          </div>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 absolute top-2 right-2 sm:static"
          >
            <X size={24} />
          </button>
        </div>
        <p className="mb-4 text-gray-600 text-sm text-center">
          Login for a seamless experience
        </p>
        <div className="mb-4">
          <div className="flex border rounded">
            <span className="bg-gray-100 px-2 sm:px-3 py-2 text-gray-500 text-sm sm:text-base">
              +91
            </span>
            <input
              type="tel"
              placeholder="Enter Mobile Number*"
              className="flex-grow px-2 sm:px-3 py-2 text-sm sm:text-base"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value)}
            />
          </div>
        </div>
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="terms"
            className="mr-2"
            checked={agreeTerms}
            onChange={(e) => setAgreeTerms(e.target.checked)}
          />
          <label htmlFor="terms" className="text-xs sm:text-sm text-gray-600">
            I Agree to Terms and Conditions
          </label>
        </div>

        <div className="flex flex-col items-center">
          <button className="w-full sm:w-80 bg-blue-500 text-white py-2 rounded-xl mb-4 text-sm sm:text-base">
            Login with OTP
          </button>
          <div className="text-center text-xs sm:text-sm text-gray-500 mb-4">
            Or Login Using
          </div>
          <button className="w-full sm:w-80 rounded-xl gap-2 border py-2 flex items-center justify-center text-sm sm:text-base">
            <FcGoogle size={20} className="sm:text-2xl" />
            <p>Google</p>
          </button>
        </div>

        <div className="mt-4 text-center sm:text-left">
          <button className="text-gray-500 hover:text-gray-700 text-sm sm:text-base">
            Skip
          </button>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <>
      <header className="top-0 left-0 w-full overflow-hidden z-40 bg-white shadow-md py-4">
        <div className="flex justify-between items-center max-w-7xl px-4">
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

            {/* <div className="relative group"> */}
            {/* <button className="text-[#0076D7] hover:bg-[#EBEBEB] hover:rounded-md px-3 py-2 font-medium flex items-center space-x-1">
                <img
                  src="https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/nav_language_icon.svg"
                  alt=""
                />
                <span>EN</span>
                <RiArrowDropDownLine size={28} />
              </button> */}

            {/* Dropdown Menu */}
            {/* <div className="absolute left-0 mt-1 w-32 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-500">
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
              </div> */}
            {/* </div> */}

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
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="bg-[#0076d7] text-white mr-4 px-4 py-2 rounded-md hover:bg-[#41A9FF] transition"
            >
              Login / Sign Up
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-black hover:bg-[#EBEBEB] p-2 rounded-md transition"
            >
              {isMobileMenuOpen ? (
                <IoMdClose size={24} />
              ) : (
                <HiMenu size={24} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white p-4 shadow-md rounded-md mt-2">
            {["Investor Relations"].map((text, index) => (
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
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="w-full bg-[#0076d7] text-white px-4 py-2 rounded-md hover:bg-[#41A9FF] transition mt-2"
            >
              Login / Sign Up
            </button>
          </div>
        )}
      </header>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
    </>
  );
};

export default Header;
