import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import logo from "../assets/astrotalk-header-logo.webp";

const Navbar = () => {
  const [isCategoryDropdownOpen, setCategoryDropdownOpen] = useState(false);

  return (
    <div className="flex flex-row justify-between items-center h-20 max-w-6xl mx-auto">
      {/* Logo */}
      <NavLink to="/">
        <div className="ml-[-6rem]">
          <img src={logo} className="h-9" alt="Logo" />
        </div>
      </NavLink>

      {/* NavLinks */}
      <div className="flex flex-row ml-[17rem] items-center gap-x-6 text-slate-100 -tracking-tighter font-medium">
        <NavLink to="/">
          <p className="hover:text-[#AC9E02] text-black text-2xl font-medium cursor-pointer duration-300 transition-all ease-in">
            Home
          </p>
        </NavLink>

        {/* Dropdown for Category */}
        <div
          className="relative group"
          onMouseEnter={() => setCategoryDropdownOpen(true)}
          onMouseLeave={() => setCategoryDropdownOpen(false)}
        >
          <div className="flex items-center cursor-pointer">
            <p className="hover:text-[#AC9E02] text-black text-2xl font-medium transition-all ease-in">
              Category
            </p>
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
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              HII
            </NavLink>

            <NavLink
              to="/"
              className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
            >
              Bye
            </NavLink>
          </div>
        </div>

        <NavLink to="/">
          <p className="hover:text-[#AC9E02] text-black text-2xl font-medium cursor-pointer duration-300 transition-all ease-in">
            SubCategory
          </p>
        </NavLink>

        <NavLink to="/">
          <p className="hover:text-[#AC9E02] text-black text-2xl font-medium cursor-pointer duration-300 transition-all ease-in">
            City
          </p>
        </NavLink>

        <NavLink to="/">
          <p className="hover:text-[#AC9E02] text-black text-2xl font-medium cursor-pointer duration-300 transition-all ease-in">
            Record Page
          </p>
        </NavLink>

        <NavLink to="/">
          <p className="hover:text-[#AC9E02] text-black text-2xl font-medium cursor-pointer duration-300 transition-all ease-in">
            My Story
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
