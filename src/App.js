import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
//import Footer from "./components/Footer";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Error404" element={<Error404 />} />
    </Routes>
  );
}

export default App;
