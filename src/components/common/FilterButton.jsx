import React from "react";

const FilterButton = ({ text }) => {
  return (
    <div className="px-2 py-1 mt-2 font-semibold justify-center bg-slate-200 border flex min-w-[6rem] ml-2  rounded-lg border-gray-400">
      <h2 className="font-semibold">{text}</h2>
    </div>
  );
};

export default FilterButton;
