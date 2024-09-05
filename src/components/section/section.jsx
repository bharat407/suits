// src/components/Section.js
import React from "react";
import Card from "./Card";

const Section = ({ heading, data }) => {
  return (
    <div className="border border-gray-500 rounded-lg p-6 w-[70%] mb-3">
      <h2 className="text-[22px] font-semibold mb-4">{heading}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {data.map((item, index) => (
          <Card key={index} image={item.image} title={item.title} />
        ))}
      </div>
    </div>
  );
};

export default Section;
