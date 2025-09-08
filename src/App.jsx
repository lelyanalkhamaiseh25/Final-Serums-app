import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Routes/Home";
import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";
import Shop from "./Routes/Shop";
import About from "./Routes/About";
import SkinConcerns from "./Routes/SkinConcerns";
import Ingredients from "./Routes/Ingredients";
function App() {

  return (
    <div className="navbar-container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/SkinConcerns" element={<SkinConcerns />} />
          <Route path="/Ingredients" element={<Ingredients />} />
          <Route path="/About" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
