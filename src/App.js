import React from "react";
import Navbar from "./components/common/Navbar";
import { Routes, Route } from "react-router-dom";
import MainHomePage from "./pages/MainHomePage";
import B2B from "./components/core/B2B/B2B";
import Real from "./pages/RealEstate";
import Repair from "./components/core/featureSection/RepairServices";
import Quora from "./components/core/QuoraForm";

const App = () => {
  return (
    <div className="w-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainHomePage />}></Route>
        <Route path="/register" element={<B2B />}></Route>
        <Route path="/real" element={<Real />}></Route>
        <Route path="/repair" element={<Repair />}></Route>
        <Route path="/quora" element={<Quora />}></Route>
      </Routes>
    </div>
  );
};

export default App;
