import React from "react";

const ImageGallery = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Large logo image */}
        <div className="bg-blue-900 rounded-lg overflow-hidden h-64 sm:h-80 lg:h-[45vh]">
          <img
            src="https://img.freepik.com/free-photo/empty-chairs-table-office_1170-755.jpg"
            alt="iSaral logo"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Office front image */}
        <div className="rounded-lg overflow-hidden h-64 sm:h-80 lg:h-[45vh]">
          <img
            src="https://content.jdmagicbox.com/v2/comp/bangalore/u7/080pxx80.xx80.170601133428.l7u7/catalogue/isaral-business-solutions-pvt-lt-nagarbhavi-bangalore-digital-signature-services-pbsqvq0ba5.jpg?w=1920&q=75"
            alt="Office front"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Office interior images container */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          <div className="rounded-lg overflow-hidden h-40 sm:h-48 lg:h-[21.5vh]">
            <img
              src="https://img.freepik.com/free-photo/empty-room-with-chairs-desks_23-2149008873.jpg"
              alt="Office interior 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden h-40 sm:h-48 lg:h-[21.5vh]">
            <img
              src="https://content.jdmagicbox.com/v2/comp/bangalore/u7/080pxx80.xx80.170601133428.l7u7/catalogue/isaral-business-solutions-pvt-lt-nagarbhavi-bangalore-digital-signature-services-kvrnfg8o77.jpg?w=1920&q=75"
              alt="Office interior 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden h-40 sm:h-48 lg:h-[21.5vh]">
            <img
              src="https://content.jdmagicbox.com/v2/comp/bangalore/u7/080pxx80.xx80.170601133428.l7u7/catalogue/isaral-business-solutions-pvt-lt-nagarbhavi-bangalore-digital-signature-services-oxgy1euafg.jpg?w=1920&q=75"
              alt="Office sign"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden h-40 sm:h-48 lg:h-[21.5vh] bg-gray-200 flex flex-col sm:flex-row items-stretch">
            <div className="flex-1 bg-gray-500 flex items-center justify-center text-white text-sm font-semibold p-2">
              +18 More
            </div>
            <div className="flex-1 bg-gray-600 flex items-center justify-center text-white text-sm font-semibold p-2">
              Add More images
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
