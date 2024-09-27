import React from "react";

const ImageGallery = () => {
  return (
    <div className=" flex  flex-col sm:flex-row gap-1">
      <div className="w-full sm:w-1/3 h-48 sm:h-auto hidden sm:flex">
        <img
          src="https://img.freepik.com/free-photo/empty-chairs-table-office_1170-755.jpg"
          alt="iSaral logo"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full sm:w-1/3 h-48 sm:h-auto hidden sm:flex">
        <img
          src="https://content.jdmagicbox.com/v2/comp/bangalore/u7/080pxx80.xx80.170601133428.l7u7/catalogue/isaral-business-solutions-pvt-lt-nagarbhavi-bangalore-digital-signature-services-pbsqvq0ba5.jpg?w=1920&q=75"
          alt="Office front"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full sm:w-1/3 flex flex-row sm:flex-col gap-1">
        <div className="flex gap-1">
          <div className="h-24 sm:h-32">
            <img
              src="https://img.freepik.com/free-photo/empty-room-with-chairs-desks_23-2149008873.jpg"
              alt="Office interior 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-24 sm:h-32">
            <img
              src="https://content.jdmagicbox.com/v2/comp/bangalore/u7/080pxx80.xx80.170601133428.l7u7/catalogue/isaral-business-solutions-pvt-lt-nagarbhavi-bangalore-digital-signature-services-kvrnfg8o77.jpg?w=1920&q=75"
              alt="Office interior 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex gap-1">
          <div className="h-24 sm:h-32">
            <img
              src="https://content.jdmagicbox.com/v2/comp/bangalore/u7/080pxx80.xx80.170601133428.l7u7/catalogue/isaral-business-solutions-pvt-lt-nagarbhavi-bangalore-digital-signature-services-oxgy1euafg.jpg?w=1920&q=75"
              alt="Office sign 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-24 sm:h-32">
            <img
              src="https://content.jdmagicbox.com/v2/comp/bangalore/u7/080pxx80.xx80.170601133428.l7u7/catalogue/isaral-business-solutions-pvt-lt-nagarbhavi-bangalore-digital-signature-services-oxgy1euafg.jpg?w=1920&q=75"
              alt="Office sign 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
