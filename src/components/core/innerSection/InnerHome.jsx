import React from "react";
import ImageGallery from "./ImageGallery";
import SidebarContact from "./SidebarContact";
import SideBarform from "./SideBarform";
import BrandDetails from "./BrandDetails";
import BrandDesc from "./BrandDesc";


const InnerHome = () => {
  return (
    <div className="max-w-[1400px] w-full mx-auto ">
      <div className="flex flex-col items-center w-full lg:mx-auto mx-1">
        <ImageGallery />
        <BrandDetails />
      </div>
      <div className="flex flex-col md:flex-row w-full md:justify-around my-2 gap-2 ">
       <div className="md:w-[65%] w-full mx-auto">
          <BrandDesc />
       </div>
        <div className="flex flex-col mx-1 lg:mx-auto md:w-[30%] w-full ">
          <SidebarContact />
          <SideBarform />
        </div>
      </div>
    </div>
  );
};

export default InnerHome;
