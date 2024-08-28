import React from "react";
import Wedding from "./Weddingcards";
import Spa from "./SpaCard";
const MainCategory = () => {
  return (
    <div>
      <div className="flex flex-row px-2">
        <Wedding />
        <Spa />
      </div>
    </div>
  );
};

export default MainCategory;
