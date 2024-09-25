import React from "react";
import ImageGallery from "./ImageGallery";
import SidebarContact from "./SidebarContact";
import SideBarform from "./SideBarform";
import BrandDetails from "./BrandDetails";
import BrandDesc from "./BrandDesc";


const InnerHome = () => {
  return (
    <div className="max-w-[1400px] flex flex-col w-full px-2 my-2 ">
      <div className="flex flex-col items-center w-full my-2 gap-2 ">
        <ImageGallery />
        <BrandDetails />
      </div>
      <div className="flex flex-col md:flex-row w-full gap-2 my-2 justify-center   ">
       <div className="md:w-[70%] w-full ">
          <BrandDesc />
       </div>
        <div className="flex w-[30%] flex-col  ">
          <SidebarContact />
          <SideBarform />
        </div>
      </div>
    </div>
  );
};

export default InnerHome;
