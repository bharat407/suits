import React from "react";
import Accomdation from "../pages/Accomdation";
import FilterSection from "../components/section/FilterSection";
import Hotel from "../components/core/Hotel";
import Sidebar from "../components/common/Sidebar";

const RealEstate = () => {
  return (
    <div className=" ">
      <Accomdation />
      <FilterSection heading="Estate Agents In Mumbai" />
      {/* <div className="flex gap-2 ">
        <Hotel />
        <Sidebar />
      </div> */}
      <Hotel />
      <Hotel />
    </div>
  );
};

export default RealEstate;
