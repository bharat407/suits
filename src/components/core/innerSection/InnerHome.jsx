import React from "react";
import ImageGallery from "./ImageGallery";
import SidebarContact from "./SidebarContact";
import SideBarform from "./SideBarform";
import BrandDetails from "./BrandDetails";
import BrandDesc from "./BrandDesc";


const InnerHome = () => {
  return (
    <div className="w-full">
      <ImageGallery />
      <SidebarContact />
      <SideBarform />
      <BrandDetails />
      <BrandDesc />
    </div>
  );
};

export default InnerHome;
