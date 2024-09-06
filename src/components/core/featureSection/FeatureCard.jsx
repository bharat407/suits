/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import beauty from "../../../assets/chaticon.png";

const Features = ({ text, source }) => {
  return (
    <div className=" flex flex-col justify-center border border-gray-400 px-2 bg-white h-[7rem] w-[6rem] mx-2 my-2 rounded-xl  items-center">
      <img
        src={source}
        className="rounded-full w-[4rem] h-[4rem]"
        alt="feature image"
      />
      <p className="text-base ">{text}</p>
    </div>
  );
};

const FeatureCard = () => {
  return (
    <div className=" flex flex-wrap justify-center ">

      <Features text="Restaurant" source={beauty} />
      <Features text="Restaurant" source={beauty} />
      <Features text="Restaurant" source={beauty} />
      <Features text="Restaurant" source={beauty} />
      <Features text="Restaurant" source={beauty} />
      <Features text="Restaurant" source={beauty} />
      <Features text="Restaurant" source={beauty} />
      <Features text="Restaurant" source={beauty} />
      <Features text="Restaurant" source={beauty} />
      <Features text="Restaurant" source={beauty} />
      <Features text="Restaurant" source={beauty} />
      <Features text="Restaurant" source={beauty} />
      <Features text="Restaurant" source={beauty} />
      <Features text="Restaurant" source={beauty} />
      <Features text="Restaurant" source={beauty} />
      <Features text="Restaurant" source={beauty} />
      <Features text="Restaurant" source={beauty} />
      <Features text="Restaurant" source={beauty} />
      <Features text="Restaurant" source={beauty} />
      <Features text="Restaurant" source={beauty} />
      <Features text="Restaurant" source={beauty} />
      <Features text="Restaurant" source={beauty} />
      <Features text="Restaurant" source={beauty} />
      <Features text="Restaurant" source={beauty} />
    </div>
  );
};

export default FeatureCard;
