import React from 'react';

const ImageGallery = () => {
  return (
    <div className="container mx-auto py-2 flex gap-2 h-[20vh] md:h-[30vh] lg:h-[45vh] my-2">
      <div className=" w-[33%] h-full">
        <img
          src="https://img.freepik.com/free-photo/empty-chairs-table-office_1170-755.jpg"
          alt="Main Logo"
          className="w-full object-cover h-full object-center rounded"
        />
      </div>

      <div className="w-[33%] h-full">
        <img
          src="https://content.jdmagicbox.com/v2/comp/bangalore/u7/080pxx80.xx80.170601133428.l7u7/catalogue/isaral-business-solutions-pvt-lt-nagarbhavi-bangalore-digital-signature-services-pbsqvq0ba5.jpg?w=1920&q=75"
          alt="Building"
          className="w-full h-full object-cover rounded"
        />
      </div>

      <div className="flex flex-col w-[33%] gap-2 h-full">

        <div className="flex gap-2  h-[48.5%] w-full">
          <img
            src="https://img.freepik.com/free-photo/empty-room-with-chairs-desks_23-2149008873.jpg"
            alt="Small Image 1"
            className="w-/2 h-full object-cover rounded"
          />
          <img
            src="https://content.jdmagicbox.com/v2/comp/bangalore/u7/080pxx80.xx80.170601133428.l7u7/catalogue/isaral-business-solutions-pvt-lt-nagarbhavi-bangalore-digital-signature-services-kvrnfg8o77.jpg?w=1920&q=75"
            alt="Small Image 2"
            className="w-1/2 h-full object-cover rounded"
          />
        </div>

        <div className="flex gap-2 h-[48.5%] w-full">

          <img
            src="https://content.jdmagicbox.com/v2/comp/bangalore/u7/080pxx80.xx80.170601133428.l7u7/catalogue/isaral-business-solutions-pvt-lt-nagarbhavi-bangalore-digital-signature-services-oxgy1euafg.jpg?w=1920&q=75"
            alt="Small Image 1"
            className="w-1/2 h-auto object-cover rounded"
          />
          <img
            src="https://img.freepik.com/free-photo/group-young-business-people-working-office_158595-5207.jpg"
            alt="Small Image 2"
            className="w-1/2 h-auto object-cover rounded"
          />
        </div>
      </div>

    </div>
  );
};

export default ImageGallery;
