import React from "react";
import { FaSearch } from "react-icons/fa";
import restaurant from "../../../assets/FeatureIcons/restaurant.svg";

const ServiceCard = ({ imageSrc, Service }) => {
  return (
    <div className="flex gap-3 ">
      <img src="" alt="service icon" />
      <h3>{Service}</h3>
    </div>
  );
};

const RepairServices = () => {
  return (
    <div className="w-full ml-6 ">
      <div className="flex md:w-[20%] border border-gray-300 items-center gap-2 rounded-lg my-3 px-2 py-2">
        <FaSearch></FaSearch>
        <input type="text" placeholder="Search All Category" />
      </div>
      <div className="flex w-full">
        <div className="flex flex-col gap-4 basis-[33%]">
          <ServiceCard imageSrc={restaurant} Service={"AC"} />
          <ServiceCard imageSrc={restaurant} Service={"Laptop"} />
          <ServiceCard imageSrc={restaurant} Service={"Refrigirator"} />
          <ServiceCard imageSrc={restaurant} Service={"Water Purifier"} />
        </div>
        <div className="flex flex-col gap-4 basis-[33%]">
          <ServiceCard imageSrc={restaurant} Service={"Car"} />
          <ServiceCard imageSrc={restaurant} Service={"Mobile Phone"} />
          <ServiceCard imageSrc={restaurant} Service={"Tv"} />
        </div>
        <div className="flex flex-col gap-4 basis-[33%]">
          <ServiceCard imageSrc={restaurant} Service={"Computer"} />
          <ServiceCard imageSrc={restaurant} Service={"Motercycle"} />
          <ServiceCard imageSrc={restaurant} Service={"washing machine"} />
        </div>
      </div>
    </div>
  );
};

export default RepairServices;
