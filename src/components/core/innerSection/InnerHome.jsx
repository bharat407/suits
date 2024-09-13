import React from "react";
import ImageGallery from "./ImageGallery";
import SidebarContact from "./SidebarContact";
import SideBarform from "./SideBarform";
import BrandDetails from "./BrandDetails";
import BrandDesc from "./BrandDesc";


const InnerHome = () => {
  return (
    <div className="max-w-[1400px] w-full mx-auto">
      <ImageGallery />
      <BrandDetails />
      <div className="flex flex-col md:flex-row w-full ">
        <BrandDesc />
        <div className="flex flex-col w-[full] md:w-[28%]">
          <SidebarContact />
          <SideBarform />
        </div>
      </div>
    </div>
  );
};

export default InnerHome;
