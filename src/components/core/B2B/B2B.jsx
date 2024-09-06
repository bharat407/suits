import React from "react";
import TopBrand from './B2BCategoryTopBrand'
import TopRanked from './B2BTopRankedCategoryForYou'

const B2B = () => {
  return (
    <div className="max-w-[1400px] w-full mx-auto">
      <TopBrand/>
      <TopRanked/>
    </div>
  );
};

export default B2B;
