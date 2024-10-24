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
import Footer from "./components/common/Footer";
import Add from "./admin/pages/AddCategory";
import Display from "./admin/pages/DispayCategory";
import Login from "./admin/pages/Login";

const App = () => {
  return (
    <div className="w-full max-w-[1400px] ">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainHomePage />}></Route>
        <Route path="/b2b" element={<B2B />}></Route>
        <Route path="/Real" element={<Real />}></Route>
        <Route path="/repair" element={<Repair />}></Route>
        <Route path="/quora" element={<Quora />}></Route>
        <Route path="/innerhome" element={<InnerHome />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/addcategory" element={<Add />}></Route>
        <Route path="/displaycategory" element={<Display />}></Route>
      </Routes>
      <Analytics />
      <SpeedInsights />
      <Footer />
    </div>
  );
};

export default App;
