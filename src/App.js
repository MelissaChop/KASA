import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Footer";
import Footer from "./components/Footer";
import "./styles/index.scss";
import Home from "./pages/Home";
import About from "./pages/About";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
      <Home />
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
