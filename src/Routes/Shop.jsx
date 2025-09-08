import React, { useEffect, useState } from "react";
import SerumCard from "../Components/SerumCard";
import "../Style/Shop.css";

function Shop({ user }) {
    const [serums, setSerums] = useState([]);
    const [counts, setCounts] = useState([]);

    // Fetch products from backend
    useEffect(() => {
        fetch("http://localhost:5000/api/products")
            .then((res) => res.json())
            .then((data) => {
                setSerums(data);
                setCounts(Array(data.length).fill(1)); // start with quantity = 1
            })
            .catch((err) => console.error("Error fetching products:", err));
    }, []);

    // Update quantity for a given index
    const handleQuantityChange = (idx, value) => {
        setCounts((prev) => {
            const updated = [...prev];
            updated[idx] = Math.max(1, Number(value) || 1);
            return updated;
        });
    };

    // Add product to cart
    const handleAddToCart = async (idx) => {
        if (!user) {
            alert("You must be logged in to add products to the cart.");
            return;
        }

        const product = serums[idx];
        const qty = Math.max(1, Number(counts[idx]) || 1);

        try {
            const res = await fetch("http://localhost:5000/api/users/cart", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: user.email,       // current logged-in user
                    product_id: product.id,  // product ID from DB
                    quantity: qty,           // chosen quantity
                }),
            });

            const data = await res.json();

            if (res.ok) {
                alert(`${qty} of ${product.name} added to cart!`);
            } else {
                alert(data.message || "Error adding to cart");
            }
        } catch (err) {
            console.error("Add to cart error:", err);
            alert("Error connecting to server");
        }
    };

    return (
        <div>
            <div className="shop-hero">
                <h1 className="shop-hero-title">Shop All Serums</h1>
                <p className="shop-hero-desc">
                    Discover our complete collection of premium skincare serums
                </p>
            </div>

            <div className="shop-serum-cards">
                {serums.map((serum, idx) => (
                    <SerumCard
                        key={serum.id}
                        serum={serum}
                        quantity={counts[idx]}
                        onQuantityChange={(val) => handleQuantityChange(idx, val)}
                        onAddToCart={() => handleAddToCart(idx)}
                    />
                ))}
            </div>
        </div>
    );
}

export default Shop;
