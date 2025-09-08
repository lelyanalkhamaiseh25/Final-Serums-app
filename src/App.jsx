import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Home from "./Routes/Home";
import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";


function App() {

  return (
    <div className="navbar-container">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
