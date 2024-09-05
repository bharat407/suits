import React from "react";
import Navbar from "./components/common/Navbar";

import { SpeedInsights } from "@vercel/speed-insights/react";
import { Analytics } from "@vercel/analytics/react";
import MainCategory from "./components/core/MainCategory";
import Hotel from "./components/core/Hotel";
import HeroHome from "./components/core/HeroHome";

import Service from "./components/core/Service";
import Search from "./components/common/SearchBar";
import PopularSearches from "./components/core/PopularSearches";
import { Routes, Route } from "react-router-dom";
import MainHomePage from "./pages/MainHomePage";
import B2B from './pages/B2B';

const App = () => {
  return (
    <div className="w-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainHomePage/>}></Route>
        <Route path="/b2b" element={<B2B/>}></Route>
      </Routes>
    </div>
  );
};

export default App;
