import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";

// Sample data for the dropdown
const data = [
  {
    id: 1,
    tag: "1 star",
  },
  {
    id: 2,
    tag: "2 stars",
  },
  {
    id: 3,
    tag: "3 stars",
  },
  {
    id: 4,
    tag: "4 stars",
  },
];

// Dropdown component that displays the list of items
function Dropdown() {
  return (
    <div className="bg-white text-black absolute top-[2.5rem] z-50 w-[10rem] min-h-[10rem] border rounded-lg">
      <ul className="p-2">
        {data.map((item) => (
          <li key={item.id} className="p-2 hover:bg-gray-100">
            {item.tag}
          </li>
        ))}
      </ul>
    </div>
  );
}

const DropdownFilter = ({ text }) => {
  const [dropdown, setDropdown] = useState(false);

  function handleDropdown() {
    setDropdown((prev) => !prev);
  }

  return (
    <div className="relative">
      <div
        className="px-2 py-1 mt-2 font-semibold items-center gap-2 bg-slate-200 relative border flex w-[7rem] ml-2 justify-center rounded-lg border-gray-400 cursor-pointer"
        onClick={handleDropdown}
      >
        <h2>{text}</h2>
        <IoMdArrowDropdown />
      </div>

      {dropdown && <Dropdown />}
    </div>
  );
};

export default DropdownFilter;
