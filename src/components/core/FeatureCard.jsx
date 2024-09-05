/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import beauty from "../../assets/FeatureIcons/beauty.svg"


const Features =({text,source})=>{
  <div className=" flex flex-col justify-center bg-white h-[8rem] w-[16rem] mx-3 my-4 rounded-xl  items-center">
    <img src={source} className="rounded-full w-[4rem] h-[4rem]" alt="feature image" />
    <p className="text-lg ">{text}</p>
  </div>
}

const FeatureCard = ({ text, source }) => {
  return (
    <div className=" flex flex-wrap ">
      <Features text="Restaurant" source={beauty}/>
      <Features text="Restaurant" source={beauty}/>
      <Features text="Restaurant" source={beauty}/>
      <Features text="Restaurant" source={beauty}/>
      <Features text="Restaurant" source={beauty}/>
      <Features text="Restaurant" source={beauty}/>
      <Features text="Restaurant" source={beauty}/>
      <Features text="Restaurant" source={beauty}/>
      <Features text="Restaurant" source={beauty}/>
      <Features text="Restaurant" source={beauty}/>
      <Features text="Restaurant" source={beauty}/>
      <Features text="Restaurant" source={beauty}/>
      <Features text="Restaurant" source={beauty}/>
      <Features text="Restaurant" source={beauty}/>
      <Features text="Restaurant" source={beauty}/>
      <Features text="Restaurant" source={beauty}/>
      <Features text="Restaurant" source={beauty}/>
      <Features text="Restaurant" source={beauty}/>
      <Features text="Restaurant" source={beauty}/>
      <Features text="Restaurant" source={beauty}/>
      <Features text="Restaurant" source={beauty}/>
      <Features text="Restaurant" source={beauty}/>
      <Features text="Restaurant" source={beauty}/>
      <Features text="Restaurant" source={beauty}/>
      <Features text="Restaurant" source={beauty}/>
      <Features text="Restaurant" source={beauty}/>
      <Features text="Restaurant" source={beauty}/>

    </div>
  );
};

export default FeatureCard;
