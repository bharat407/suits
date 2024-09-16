import React from "react";
import { FaSearch } from "react-icons/fa";
import restaurant from "../../../assets/FeatureIcons/restaurant.svg";

const ServiceCard = ({ imageSrc, Service }) => {
  return (
    <div className="flex gap-3 items-center ">
      <img src={imageSrc} alt="service icon" />
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
          <ServiceCard imageSrc={"https://akam.cdn.jdmagicbox.com/images/icons/android/2x/i_ac.png?w=48&q=75"} Service={"AC"} />
          <ServiceCard imageSrc={"https://akam.cdn.jdmagicbox.com/images/icons/android/2x/i_car.png?w=48&q=75"} Service={"Laptop"} />
          <ServiceCard imageSrc={"https://akam.cdn.jdmagicbox.com/images/icons/android/2x/i_refrigerator.png?w=48&q=75"} Service={"Refrigirator"} />
          <ServiceCard imageSrc={"https://akam.cdn.jdmagicbox.com/images/icons/android/2x/i_waterpurifier.png?w=48&q=75"} Service={"Water Purifier"} />
        </div>
        <div className="flex flex-col gap-4 basis-[33%]">
          <ServiceCard imageSrc={"https://akam.cdn.jdmagicbox.com/images/icons/android/2x/i_car.png?w=48&q=75"} Service={"Car"} />
          <ServiceCard imageSrc={"https://akam.cdn.jdmagicbox.com/images/icons/android/2x/i_mobilephone.png?w=48&q=75"} Service={"Mobile Phone"} />
          <ServiceCard imageSrc={"https://akam.cdn.jdmagicbox.com/images/icons/android/2x/i_tv.png?w=48&q=75"} Service={"Tv"} />
        </div>
        <div className="flex flex-col gap-4 basis-[33%]">
          <ServiceCard imageSrc={"https://akam.cdn.jdmagicbox.com/images/icons/android/2x/i_computer.png?w=48&q=75"} Service={"Computer"} />
          <ServiceCard imageSrc={"https://akam.cdn.jdmagicbox.com/images/icons/android/2x/i_motorcycle.png?w=48&q=75"} Service={"Motercycle"} />
          <ServiceCard imageSrc={"https://akam.cdn.jdmagicbox.com/images/icons/android/2x/i_washingmachine.png?w=48&q=75"} Service={"washing machine"} />
        </div>
      </div>
    </div>
  );
};

export default RepairServices;
