import React from "react";
import Wedding from "./Weddingcards";
import Spa from "./SpaCard";
import Service from "./Service";
import Daily from "./Daily";
const MainCategory = () => {
  return (
    <div className=" p-7 mt-3 mx-auto max-w-[1400px]">
      <div className="flex flex-row px-2">
        <Wedding />
        <Spa />
      </div>
      <div className=" flex flex-row px-2">
        <Service />
        <Daily />
      </div>
    </div>
  );
};

export default MainCategory;
