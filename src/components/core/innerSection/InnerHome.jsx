import React from "react";
import ImageGallery from "./ImageGallery";
import SidebarContact from "./SidebarContact";
import SideBarform from "./SideBarform";
import BrandDetails from "./BrandDetails";
import BrandDesc from "./BrandDesc";
import QuoraForm from "../QuoraForm";

const InnerHome = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="space-y-4 sm:space-y-6 lg:space-y-8">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <ImageGallery />
        </div>
        <div className="">
          <BrandDetails />
        </div>
      </div>
      <div className="mt-4 sm:mt-6 lg:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <BrandDesc />
          </div>
          <div className="mt-3">
            <QuoraForm />
          </div>
        </div>
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <SidebarContact />
          </div>
          <div className="bg-white rounded-lg shadow-md p-4 sm:p-6">
            <SideBarform />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnerHome;
