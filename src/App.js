import React from "react";
//import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Error404 from "./pages/Error404";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Error404 />
      <Footer />
    </div>
  );
}

export default App;
