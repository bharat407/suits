import React from "react";
import Navbar from "./components/common/Navbar";
import { Routes, Route } from "react-router-dom";
import MainHomePage from "./pages/MainHomePage";
import B2B from "./components/core/B2B/B2B";
import Real from "./pages/RealEstate";
import Repair from "./components/core/featureSection/RepairServices";
import Quora from "./components/core/QuoraForm";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import InnerHome from "./components/core/innerSection/InnerHome";
import Login from "./components/common/Login";
import Register from "./components/common/Register";

const App = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainHomePage />}></Route>
        <Route path="/register" element={<B2B />}></Route>
        <Route path="/real" element={<Real />}></Route>
        <Route path="/repair" element={<Repair />}></Route>
        <Route path="/quora" element={<Quora />}></Route>
        <Route path="/innerhome" element={<InnerHome />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Routes>
      <Analytics />
      <SpeedInsights />
    </div>
  );
};

export default App;
