import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import Shop from "./Routes/Shop";
import Home from "./Routes/Home";
import Cart from "./Routes/Cart";
import About from "./Routes/About";
import SkinConcerns from "./Routes/SkinConcerns";
import Ingredients from "./Routes/Ingredients";
import Login from "./Routes/Login";
import Navbar from "./Components/NavBar";
import Footer from "./Components/Footer";


function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
  }, []);

  const handleLogin = (loggedInUser) => {
    setUser(loggedInUser);
    localStorage.setItem("user", JSON.stringify(loggedInUser));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <div className="navbar-container">
      <Router>
        <Navbar user={user} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/Shop" element={<Shop user={user} />} />
          <Route path="/SkinConcerns" element={<SkinConcerns />} />
          <Route path="/Ingredients" element={<Ingredients />} />
          <Route path="/About" element={<About />} />
          <Route path="/Cart" element={<Cart user={user} />} />
          <Route path="/Login" element={<Login onLogin={handleLogin} />} />

        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
