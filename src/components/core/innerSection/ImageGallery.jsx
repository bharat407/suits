import React from 'react';

const ImageGallery = () => {
  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-3 gap-4">
        
        <div className="col-span-1">
          <img 
            src="https://content.jdmagicbox.com/v2/comp/bangalore/u7/080pxx80.xx80.170601133428.l7u7/catalogue/isaral-business-solutions-pvt-lt-nagarbhavi-bangalore-digital-signature-services-7tlvlj3ao4.jpg?w=1920&q=75" 
            alt="Main Logo" 
            className="w-full h-[152.9px] object-cover rounded"
          />
        </div>

        <div className="col-span-1">
          <img 
            src="https://content.jdmagicbox.com/v2/comp/bangalore/u7/080pxx80.xx80.170601133428.l7u7/catalogue/isaral-business-solutions-pvt-lt-nagarbhavi-bangalore-digital-signature-services-pbsqvq0ba5.jpg?w=1920&q=75" 
            alt="Building" 
            className="w-full h-auto object-cover rounded"
          />
        </div>

        <div className="col-span-1 flex flex-col space-y-4">

          <div className="flex space-x-2">
            <img 
              src="https://content.jdmagicbox.com/v2/comp/bangalore/u7/080pxx80.xx80.170601133428.l7u7/catalogue/isaral-business-solutions-pvt-lt-nagarbhavi-bangalore-digital-signature-services-oxgy1euafg.jpg?w=1920&q=75" 
              alt="Small Image 1" 
              className="w-1/2 h-auto object-cover rounded"
            />
            <img 
              src="https://content.jdmagicbox.com/v2/comp/bangalore/u7/080pxx80.xx80.170601133428.l7u7/catalogue/isaral-business-solutions-pvt-lt-nagarbhavi-bangalore-digital-signature-services-kvrnfg8o77.jpg?w=1920&q=75" 
              alt="Small Image 2" 
              className="w-1/2 h-auto object-cover rounded"
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="relative">
              <img 
                src="https://content.jdmagicbox.com/v2/comp/bangalore/u7/080pxx80.xx80.170601133428.l7u7/catalogue/isaral-business-solutions-pvt-ltd-rajajinagar-bangalore-digital-signature-services-yk1i11t2vs.jpg?w=1920&q=75" 
                alt="Small Image 3" 
                className="w-1/2 h-auto object-cover rounded"
              />
            </div>

            <img 
                src="https://content.jdmagicbox.com/v2/comp/bangalore/u7/080pxx80.xx80.170601133428.l7u7/catalogue/isaral-business-solutions-pvt-lt-nagarbhavi-bangalore-digital-signature-services-s5oi8i6pqm.jpg?w=1920&q=75" 
                alt="Small Image 4" 
                className="w-1/2 h-auto object-cover rounded"
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
