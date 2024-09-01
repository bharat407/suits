import React from "react";
import astroBaba from "../../assets/astrologer_baba.webp";
import FeatureCard from "./FeatureCard";
import chatIcon from "../../assets/chaticon.png";
import calling from "../../assets/call.png";
import shoping from "../../assets/shop.png";
import kalash from "../../assets/kalsh.png";

const BannerHome = () => {
  const data = [
    {
      id: 1,
      source: chatIcon,
      text: "Chat With Astrologer",
    },
    {
      id: 2,
      source: calling,
      text: "Talk To Astrologer",
    },
    {
      id: 3,
      source: shoping,
      text: "Astromall Shop",
    },
    {
      id: 4,
      source: kalash,
      text: "Book A Pooja",
    },
  ];
  return (
    <div className=" max-w-[1400px] w-screen min-h-[80vh] bg-black flex flex-col justify-center items-center ">
      <div className=" bg-[yellow] rounded-xl w-[96%]  m-2 py-4 lg:py-0  lg:m-[0] md:w-[80%] md:flex flex flex-col md:flex-row ">
        <div className="image-section flex basis-[40%] justify-center items-center">
          <img src={astroBaba} alt="" />
        </div>
        <div className="flex flex-col gap-2 basis-[60%] justify-center items-center">
          <h2 className="text-slate-800 text-2xl">
            200+ Celebs recommends Astrotalk
          </h2>
          <h1 className="text-3xl font-semibold">Chat With Astrologer</h1>
          <button className="bg-black px-6 py-2 rounded-2xl text-white">
            Chat Now
          </button>
        </div>
      </div>
      <div className="w-80% md:flex md:flex-wrap flex justify-center items-center flex-col md:flex-row ">
        {data.map((item) => (
          <FeatureCard key={item.id} text={item.text} source={item.source} />
        ))}
      </div>
    </div>
  );
};

export default BannerHome;
