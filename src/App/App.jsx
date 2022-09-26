import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../pages/About/index";
import Home from "../pages/Home/index";
import Works from "../pages/Works/index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/work" element={<Works />} />
    </Routes>
  )
}
export default App;
