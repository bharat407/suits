import React from "react";
import Navbar from "./components/common/Navbar";
import { Routes, Route } from "react-router-dom";
import MainHomePage from "./pages/MainHomePage";
import B2B from "./components/core/B2B/B2B";

const App = () => {
  return (
    <div className="w-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<MainHomePage />}></Route>
        <Route path="/b2b" element={<B2B />}></Route>
      </Routes>
    </div>
  );
};

export default App;
