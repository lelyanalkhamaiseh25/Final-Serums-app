import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "../Style/Navbar.css";

const NavBar = ({ user, onLogout }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        onLogout();
        localStorage.removeItem("user");
        navigate("/");
    };

    return (
        <nav>
            <div className="navLeft">
                <Link to="/" className="title">Serums</Link>
            </div>

            <div className="navMiddle">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Shop">Shop</Link></li>
                    <li><Link to="/SkinConcerns">Skin Concerns</Link></li>
                    <li><Link to="/Ingredients">Ingredients</Link></li>
                    <li><Link to="/About">About</Link></li>
                    {user?.role === "admin" && (
                        <li><Link to="/admin">Admin</Link></li>
                    )}
                </ul>
            </div>

            <div className="navRight">
                {!user ? (
                    <Link to="/Login" className="navBtn">Login</Link>
                ) : (
                    <>
                        <button className="navBtn" onClick={handleLogout}>
                            Logout
                        </button>

                        {user?.role !== "admin" && (
                            <Link to="/Cart" className="navBtn">
                                Cart
                            </Link>
                        )}
                    </>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
