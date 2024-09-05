import React from "react";
import HeroHome from "../components/core/HeroHome";
import FeatureCard from "../components/core/FeatureCard";
import FeaturedServices from "../components/core/MainCategory";
import PopularSearches from "../components/core/PopularSearches";
import RecentActivity from "../components/core/RecentActivity";
import SearchBar from "../components/common/SearchBar";

const MainHomePage = () => {
  return (
    <div className="w-screen max-w-[1400px] mx-auto">
      <SearchBar />
      <HeroHome />
      <FeatureCard />
      <FeaturedServices />
      <PopularSearches />
      <RecentActivity/>
    </div>
  );
};

export default MainHomePage;
