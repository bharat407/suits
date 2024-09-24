import React from "react";
import { FaSearch } from "react-icons/fa";


const a2z=[
  {id :"1",
    service: "Car"
  },
  {id :"2",
    service: "AC"
  },
  {id :"3",
    service: "Mobile Phone"
  },
  {id :"4",
    service: "TV"
  },
  {id :"5",
    service: "Computer"
  },
  {id :"6",
    service: "Motercycle"
  },
  {id :"7",
    service: "Water Purifier"
  },
  {id :"8",
    service: "Laptop"
  },
  {id :"9",
    service: "Refrigerator"
  },
  {id :"10",
    service: "Juicer"
  },
  {id :"11",
    service: "Mixer"
  },
  {id :"12",
    service: "Generator"
  },
  {id :"13",
    service: "Washing Machine"
  },
]


const ServiceCard = ({ imageSrc, Service }) => {
  return (
    <div className="flex gap-3 items-center ">
      <img src={imageSrc} alt="service icon" className="w-[30px]" />
      <h3>{Service}</h3>
    </div>
  );
};


const RepairServices = () => {
  return (
    <div className="w-full my-4 max-w-[1400px] ">
      <div className="h-[30vh] w-full">
        <img src="https://rapidsignsbc.com/wp-content/uploads/2016/10/repair-top-banner-2.jpg" className="h-full w-full object-cover object-center rounded-md" alt="" />
      </div>
      <div className="flex flex-col w-full px-6">
        <div className="flex md:w-[45%]  lg:w-[20%] w-[90%] border border-gray-300 items-center gap-2 rounded-lg  my-3 px-2 py-2">
          <FaSearch></FaSearch>
          <input type="text" placeholder="Search All Category" />
        </div>
        <div className="flex w-full flex-wrap ">
          <div className="flex flex-col gap-4 basis-[50%] my-2 md:basis-[33%] ">
            <ServiceCard imageSrc={"https://akam.cdn.jdmagicbox.com/images/icons/android/2x/i_ac.png?w=48&q=75"} Service={"AC"} />
            <ServiceCard imageSrc={"https://akam.cdn.jdmagicbox.com/images/icons/android/2x/i_car.png?w=48&q=75"} Service={"Laptop"} />
            <ServiceCard imageSrc={"https://akam.cdn.jdmagicbox.com/images/icons/android/2x/i_refrigerator.png?w=48&q=75"} Service={"Refrigirator"} />
            <ServiceCard imageSrc={"https://akam.cdn.jdmagicbox.com/images/icons/android/2x/i_waterpurifier.png?w=48&q=75"} Service={"Water Purifier"} />
          </div>
          <div className="flex flex-col gap-4 basis-[50%] my-2 md:basis-[33%]">
            <ServiceCard imageSrc={"https://akam.cdn.jdmagicbox.com/images/icons/android/2x/i_car.png?w=48&q=75"} Service={"Car"} />
            <ServiceCard imageSrc={"https://akam.cdn.jdmagicbox.com/images/icons/android/2x/i_mobilephone.png?w=48&q=75"} Service={"Mobile Phone"} />
            <ServiceCard imageSrc={"https://akam.cdn.jdmagicbox.com/images/icons/android/2x/i_tv.png?w=48&q=75"} Service={"Tv"} />
          </div>
          <div className="flex flex-col gap-4 basis-[50%] my-2 md:basis-[33%]">
            <ServiceCard imageSrc={"https://akam.cdn.jdmagicbox.com/images/icons/android/2x/i_computer.png?w=48&q=75"} Service={"Computer"} />
            <ServiceCard imageSrc={"https://akam.cdn.jdmagicbox.com/images/icons/android/2x/i_motorcycle.png?w=48&q=75"} Service={"Motercycle"} />
            <ServiceCard imageSrc={"https://akam.cdn.jdmagicbox.com/images/icons/android/2x/i_washingmachine.png?w=48&q=75"} Service={"washing machine"} />
          </div>
        </div>
        <h3 className="my-8 text-2xl font-semibold">Explore More From A to Z</h3>
        <div className="flex flex-wrap gap-3">
          {
            a2z.map((item) => {
              return (
                <div key={item.id} className="px-2 py-1 bg-slate-300 rounded-lg">
                  <h4 className="font-medium">{item.service}</h4>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default RepairServices;
