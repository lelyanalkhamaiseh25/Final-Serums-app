import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import homepic4 from "../assets/homepic4.png";
import SerumCard from "../Components/SerumCard";
import SkinConcernsCards from "../Components/SkinConcernsCards";
import Bootstrap from "../Components/Bootstrap";

import "../Style/Home.css";

export const Home = ({ user }) => {   
    const [bestSellers, setBestSellers] = useState([]);
    const [counts, setCounts] = useState([]);


    useEffect(() => {
        fetch("http://localhost:5000/api/products")
            .then((res) => res.json())
            .then((data) => {
                const topFour = data.slice(0, 4); 
                setBestSellers(topFour);
                setCounts(Array(topFour.length).fill(1));
            })
            .catch((err) => console.error("Error fetching products:", err));
    }, []);

    const handleQuantityChange = (idx, value) => {
        setCounts((prev) => {
            const updated = [...prev];
            updated[idx] = value;
            return updated;
        });
    };


    const handleAddToCart = async (idx) => {
        if (!user) {
            alert("Please log in to add items to cart.");
            return;
        }

        const product = bestSellers[idx];

        try {
            const res = await fetch("http://localhost:5000/api/users/cart", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: user.email,
                    product_id: product.id,
                    quantity: counts[idx],
                }),
            });

            const data = await res.json();

            if (res.ok) {
                alert(`${counts[idx]} of ${product.name} added to cart!`);
            } else {
                alert(data.message || "Error adding to cart");
            }
        } catch (err) {
            console.error("Add to cart error:", err);
            alert("Error connecting to server");
        }
    };

    const [joke, setJoke] = useState("");


    useEffect(() => {
        fetch("http://localhost:5000/api/jokes/random")
            .then((res) => res.json())
            .then((data) => {
                if (data.type === "single") {
                    setJoke(data.joke);
                } else if (data.type === "twopart") {
                    setJoke(`${data.setup} — ${data.delivery}`);
                }
            })
            .catch((err) => console.error("Error fetching joke:", err));
    }, []);

    return (
        <div>
      
            <div className="home-hero-section">
                <img src={homepic4} alt="Serum bottles" className="home-image" />
                <div className="home-content">
                    <h1 className="home-title">
                        Transform Your Skin with <br /> Premium Serums
                    </h1>
                    <p className="home-desc">
                        Discover our carefully curated collection of luxury skincare serums,
                        formulated with the finest ingredients for radiant, healthy skin.
                    </p>
                    <Bootstrap />
                </div>
            </div>

    
            <div className="bestseller-section">
                <h2 className="bestseller-title">Best Seller Serums</h2>
                <p className="bestseller-desc">
                    Our most-loved formulations, scientifically proven to deliver visible results
                </p>

                <div className="bestseller-cards">
                    {bestSellers.map((serum, idx) => (
                        <SerumCard
                            key={serum.id}
                            serum={serum}
                            quantity={counts[idx]}
                            onQuantityChange={(val) => handleQuantityChange(idx, val)}
                            onAddToCart={() => handleAddToCart(idx)}  
                        />
                    ))}
                </div>

                <Link to="/Shop">
                    <button className="view-products-btn">View Products</button>
                </Link>
            </div>

            <section className="skin-concerns-section">
                <h2 className="skin-concerns-title">Skin Concerns</h2>
                <p className="skin-concerns-desc">
                    Our most-loved formulations, scientifically proven to deliver visible results
                </p>

                <SkinConcernsCards />
                <Link to="/SkinConcerns">
                    <button className="skin-concern-btn">Explore Solutions</button>
                </Link>

                <div className="subscribe-box">
                    <h2 className="subscribe-title">Get 15% Off Your First Order</h2>
                    <p className="subscribe-desc">
                        Lorem Ipsum is simply dummy text <br />
                        of the printing and typesetting <br />
                        industry.
                    </p>
                    <input
                        className="subscribe-input"
                        type="text"
                        placeholder="Email"
                        disabled
                    />
                    <button className="subscribe-btn" disabled>
                        Subscribe
                    </button>
                </div>
        
                <div className="alert alert-info" style={{ marginTop: "20px" }}>
                    <strong>😂 Random Joke:</strong> {joke || "Loading a joke..."}
                </div>

            </section>
        </div>
    );
};

export default Home;
