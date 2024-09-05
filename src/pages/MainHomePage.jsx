import React from "react";
import HeroHome from "../components/core/HeroHome";
import FeatureCard from "../components/core/FeatureCard";
import FeaturedServices from "../components/core/MainCategory";
import PopularSearches from "../components/core/PopularSearches";
import RecentActivites from "../components/core/RecentActivites";
import SearchBar from "../components/common/SearchBar";

const MainHomePage = () => {
  return (
    <div>
      <SearchBar />
      <HeroHome />
      <FeatureCard />
      <FeaturedServices />
      <PopularSearches />
      <RecentActivites />
    </div>
  );
};

export default MainHomePage;
