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

      <Features text="Restaurant" source={"https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/restaurant-2022.svg?w=48&q=75"} />
      <Features text="Hotels" source={"https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/hotel-2022.svg?w=48&q=75"} />
      <Features text="Beauty Spa" source={"https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/beauty.svg?w=48&q=75"} />
      <Features text="Home Decor" source={"https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/homedecor.svg?w=48&q=75"} />
      <Features text="Wedding Planning" source={"https://akam.cdn.jdmagicbox.com/images/icontent/newwap/web2022/hotkey_wedding_icon.gif?w=48&q=75"} />
      <Features text="Education" source={"https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/education.svg?w=48&q=75"} />
      <Features text="Rent & Hire" source={"https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/renthire.svg?w=48&q=75"} />
      <Features text="Hospital" source={"https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/hospital_2023.svg?w=48&q=75"} />
      <Features text="Contractors" source={"https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/contractor-2022.svg?w=48&q=75"} />
      <Features text="Pet shop" source={"https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/pet_shops_2023.svg?w=48&q=75"} />
      <Features text="PG/Hostels" source={"https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/pg-hostels-rooms.svg?w=48&q=75"} />
      <Features text="Estate Agents" source={"https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/estate-agent.svg?w=48&q=75"} />
      <Features text="Dentists" source={"	https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/dentist_2023.svg?w=48&q=75"} />
      <Features text="Gym" source={"https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/gym_2023.svg?w=48&q=75"} />
      <Features text="Consultants" source={"	https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/consultants_2023.svg?w=48&q=75"} />
      <Features text="Event Organisers" source={"https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/eventorganizers.svg?w=48&q=75"} />
      <Features text="Driving Schools" source={"https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/driving_school_2023.svg?w=48&q=75"} />
      <Features text="Packers & Movers" source={"https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/packers_movers_2023.svg?w=48&q=75"} />
      <Features text="Courier Service" source={"https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/courier_2023.svg?w=48&q=75"} />
      <Features text="popular Categories" source={"https://akam.cdn.jdmagicbox.com/images/icons/newwap/newhotkey/courier_2023.svg?w=48&q=75"} />
    </div>
  );
};

export default FeatureCard;
