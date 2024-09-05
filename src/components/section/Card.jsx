// src/components/Card.js
import React from "react";

const Card = ({ image, title }) => {
  return (
    <div className="flex flex-col items-start">
      <img
        src={image}
        alt={title}
        className="w-[75%] cursor-pointer h-full object-cover rounded-lg mb-2"
      />
      <div className="w-[75%] text-center font-normal">{title}</div>
    </div>
  );
};

export default Card;
