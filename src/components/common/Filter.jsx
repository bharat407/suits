import React from "react";

const Filter = ({ text }) => {
  return (
    <div className="px-2 py-1 mt-2 font-semibold justify-center bg-slate-200 border flex w-[6rem] ml-2  rounded-lg border-gray-400">
      <h2>{text}</h2>
    </div>
  );
};

export default Filter;
