import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/astrotalk-header-logo.webp";

const Navbar = () => {
  const [isCategoryDropdownOpen, setCategoryDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex justify-between items-center h-20 max-w-6xl mx-auto px-4">
      {/* Logo */}
      <NavLink to="/">
        <div className="">
          <img src={logo} className="h-9" alt="Logo" />
        </div>
      </NavLink>

      {/* Hamburger Icon for Mobile */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="text-black focus:outline-none"
        >
          <FiMenu size={24} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isMobileMenuOpen ? "block" : "hidden"
        } absolute top-0 py-12 bg-black text-white  right-0 w-full h-full  z-50 p-4 lg:hidden`}
      >
        {/* Close Button */}
        <button
          onClick={() => setMobileMenuOpen(false)}
          className="absolute top-4 right-4  focus:outline-none"
        >
          <FiX size={24} />
        </button>

        {/* NavLinks */}
        <div className="flex flex-col items-center gap-y-4 text-slate-100 -tracking-tighter ">
          <NavLink to="/" className=" text-2xl hover:text-[#AC9E02] ">
            Home
          </NavLink>
          <div
            className="relative group"
            onMouseEnter={() => setCategoryDropdownOpen(true)}
            onMouseLeave={() => setCategoryDropdownOpen(false)}
          >
            <div className="flex items-center cursor-pointer">
              <p className=" text-2xl ">Category</p>
              <FiChevronDown className="ml-1  text-xl" />
            </div>
            {/* Dropdown Menu */}
            <div
              className={`${
                isCategoryDropdownOpen ? "block" : "hidden"
              } absolute mt-2 w-48 bg-white shadow-lg rounded-lg group-hover:block`}
            >
              <NavLink to="/" className="block px-4 py-2 text-gray-800">
                HII
              </NavLink>
              <NavLink to="/" className="block px-4 py-2 text-gray-800">
                Bye
              </NavLink>
            </div>
          </div>
          <NavLink to="/" className=" text-2xl ">
            SubCategory
          </NavLink>
          <NavLink to="/" className=" text-2xl ">
            City
          </NavLink>
          <NavLink to="/" className=" text-2xl ">
            Record Page
          </NavLink>
          <NavLink to="/" className=" text-2xl ">
            My Story
          </NavLink>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex lg:flex-row lg:ml-[1rem] items-center gap-x-6 text-slate-100 -tracking-tighter ">
        <NavLink to="/" className="text-black text-2xl hover:text-[#AC9E02]">
          Home
        </NavLink>
        <div
          className="relative group"
          onMouseEnter={() => setCategoryDropdownOpen(true)}
          onMouseLeave={() => setCategoryDropdownOpen(false)}
        >
          <div className="flex items-center cursor-pointer">
            <p className="text-black text-2xl hover:text-[#AC9E02]">Category</p>
            <FiChevronDown className="ml-1 text-black text-xl" />
          </div>
          {/* Dropdown Menu */}
          <div
            className={`${
              isCategoryDropdownOpen ? "block" : "hidden"
            } absolute mt-2 w-48 bg-white shadow-lg rounded-lg group-hover:block`}
          >
            <NavLink
              to="/"
              className="block hover:text-[#AC9E02] px-4 py-2 text-gray-800"
            >
              HII
            </NavLink>
            <NavLink
              to="/"
              className="block hover:text-[#AC9E02] px-4 py-2 text-gray-800"
            >
              Bye
            </NavLink>
          </div>
        </div>
        <NavLink to="/" className="text-black hover:text-[#AC9E02] text-2xl ">
          SubCategory
        </NavLink>
        <NavLink to="/" className="text-black hover:text-[#AC9E02] text-2xl ">
          City
        </NavLink>
        <NavLink to="/" className="text-black hover:text-[#AC9E02] text-2xl ">
          Record Page
        </NavLink>
        <NavLink to="/" className="text-black hover:text-[#AC9E02] text-2xl ">
          My Story
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
