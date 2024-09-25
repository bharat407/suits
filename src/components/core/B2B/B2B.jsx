import React from "react";
import TopBrand from "./B2BCategoryTopBrand";
import TopRanked from "./B2BTopRankedCategoryForYou";
import SearchBar from "../../common/SearchBar";
import FilterSection from "../../section/FilterSection";

const B2B = () => {
  return (
    <div className="max-w-[1400px] w-full mx-px">
      <SearchBar />
      <FilterSection heading="" />
      <TopBrand />
      <TopRanked />
      <TopRanked />
      <TopRanked />
    </div>
  );
};

export default B2B;
