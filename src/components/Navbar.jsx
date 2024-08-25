import logo from "../assets/astrotalk-header-logo.webp";

import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between items-center h-20 max-w-6xl mx-auto">
      <NavLink to="/">
        <div className="ml-6">
          <img src={logo} className="h-9" alt="Logo" />
        </div>
      </NavLink>
      <div className="flex flex-row items-center gap-x-6 mr-6 text-slate-100 -tracking-tighter font-medium">
        <NavLink to="/">
          <p className="hover:text-[#AC9E02]  text-black text-2xl font-medium cursor-pointer duration-300 transition-all ease-in">
            Home
          </p>
        </NavLink>

        <NavLink to="/">
          <p className="hover:text-[#AC9E02]  text-black text-2xl font-medium cursor-pointer duration-300 transition-all ease-in">
            Category
          </p>
        </NavLink>

        <NavLink to="/">
          <p className="hover:text-[#AC9E02]  text-black text-2xl font-medium cursor-pointer duration-300 transition-all ease-in">
            SubCategory
          </p>
        </NavLink>

        <NavLink to="/">
          <p className="hover:text-[#AC9E02]  text-black text-2xl font-medium cursor-pointer duration-300 transition-all ease-in">
            City
          </p>
        </NavLink>

        <NavLink to="/">
          <p className="hover:text-[#AC9E02]  text-black text-2xl font-medium cursor-pointer duration-300 transition-all ease-in">
            Record Page
          </p>
        </NavLink>

        <NavLink to="/">
          <p className="hover:text-[#AC9E02]  text-black text-2xl font-medium cursor-pointer duration-300 transition-all ease-in">
            My Story
          </p>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
