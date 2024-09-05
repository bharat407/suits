import React from "react";
import { Data } from "../../Data/Service";

const Service = () => {
  return (
    <div className="border border-gray-500 rounded-lg px-4 py-3 w-[96%]  mx-auto">
      <h2 className="text-xl font-semibold mb-4"> Repairs & Service </h2>
      <div className="flex justify-evenly">
        {Data.map((item, index) => (
          <div key={index} className="flex flex-col items-start">
            <img
              src={item.image}
              alt={item.title}
              className="w-[75%] cursor-pointer h-full object-cover rounded-lg "
            />
            <div className="w-[75%] text-center text-semibold mt-2">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
