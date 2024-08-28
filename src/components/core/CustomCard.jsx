import React from "react";
import restaurant from '../../assets/restaurant.svg'

const customData=[
    {
        id:1,
        name:"Restaurants",
        imgsrc:restaurant,
    },
    {
        id:2,
        name:"Restaurants",
        imgsrc:restaurant,
    },
    {
        id:3,
        name:"Restaurants",
        imgsrc:restaurant,
    },
    {
        id:4,
        name:"Restaurants",
        imgsrc:restaurant,
    },
    {
        id:5,
        name:"Restaurants",
        imgsrc:restaurant,
    },
    {
        id:6,
        name:"Restaurants",
        imgsrc:restaurant,
    },
    {
        id:7,
        name:"Restaurants",
        imgsrc:restaurant,
    },
    {
        id:8,
        name:"Restaurants",
        imgsrc:restaurant,
    },
    {
        id:9,
        name:"Restaurants",
        imgsrc:restaurant,
    },
    {
        id:10,
        name:"Restaurants",
        imgsrc:restaurant,
    },
]

function CustomCard()
{
    return(
        <div className=" w-[95%] mx-auto flex flex-wrap gap-12 ">
      {  customData.map((item) => (
          <div key={item.id} className="flex flex-col gap-2 justify-center items-center">
              <div className="w-[5rem] h-[5rem] rounded-lg border flex  justify-center items-center border-gray-400">
                <img src={item.imgsrc} alt={item.name} />

                </div>
                <h2 className="">{item.name}</h2>
            </div>
            ))}

        </div>
    )
}
export default CustomCard