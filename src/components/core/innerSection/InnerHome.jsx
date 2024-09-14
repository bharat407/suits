import React from "react";
import ImageGallery from "./ImageGallery";
import SidebarContact from "./SidebarContact";
import SideBarform from "./SideBarform";
import BrandDetails from "./BrandDetails";
import BrandDesc from "./BrandDesc";


const InnerHome = () => {
  return (
    <div className="max-w-[1400px] w-full mx-auto overflow-hidden">
      <div className="flex flex-col items-center w-full mx-2 ">
        <ImageGallery />
        <BrandDetails />
      </div>
      <div className="flex flex-col md:flex-row w-full justify-center my-2 gap-2 ">
       <div className="w-[65%]">
          <BrandDesc />
       </div>
        <div className="flex flex-col w-[full] ">
          <SidebarContact />
          <SideBarform />
        </div>
      </div>
    </div>
  );
};

export default InnerHome;
