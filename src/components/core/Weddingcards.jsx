import React from "react";
import { Data } from "../../data/Wedding";

const WeddingRequisites = () => {
  return (
    <div className="border border-gray-500 rounded-lg p-6 w-[70%] mb-3">
      <h2 className="text-[22px] font-semibold mb-4">Wedding Requisites</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {Data.map((item, index) => (
          <div key={index} className="flex flex-col items-start">
            <img
              src={item.image}
              alt={item.title}
              className="w-[75%] h-full object-cover rounded-lg mb-2"
            />
            <div className="w-[75%] text-center font-normal">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeddingRequisites;
