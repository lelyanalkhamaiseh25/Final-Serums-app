import React from "react";
import { Link } from "react-router-dom";
import "../Style/Footer.css";

const Footer = () => (
    <footer className="footer">
        <div className="footer-content">
            <div className="footer-col logo-col">
                <h1 className="footer-logo">SERUMS</h1>
                <p className="footer-desc">
                    Premium skincare serums crafted with the finest ingredients for radiant, healthy skin.
                </p>
            </div>
            <div className="footer-col">
                <h2>Quick Links</h2>
                <ul>
                    <li><Link className="footer-links" to="/">Home</Link></li>
                    <li><Link className="footer-links" to="/Shop">Shop</Link></li>
                    <li><Link className="footer-links" to="/SkinConcerns">Skin Concerns</Link></li>
                    <li><Link className="footer-links" to="/Ingredients">Ingredients</Link></li>
                    <li><Link className="footer-links" to="/About">About</Link></li>
                </ul>
            </div>
            <div className="footer-col">
                <h2>Contact Us</h2>
                <ul>
                    <li>
                        <span>Email: Serums@gmail.com</span>
                    </li>
                    <li>
                        <span>Phone: 0798929887</span>
                    </li>
                    <li>
                        <span>Instagram</span>
                    </li>
                    <li>
                        <span>Facebook</span>
                    </li>
                </ul>
            </div>
        </div>
        <hr className="footer-divider" />
        <div className="footer-bottom">
            <span>© 2024 Serums. All rights reserved.</span>
            <span>Designed by Lelyan Alkhamaiseh</span>
        </div>
    </footer>
);

export default Footer;