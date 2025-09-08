import React from "react";
import { Link } from "react-router-dom";
import "../Style/SkinConcernsCards.css";

const concerns = [
    {
        icon: "✨",
        name: "Anti-Aging",
        desc: "Reduce fine lines and wrinkles"
    },
    {
        icon: "🌟",
        name: "Dark Spots",
        desc: "Brighten and even skin tone"
    },
    {
        icon: "🧴",
        name: "Acne & Blemishes",
        desc: "Clear and prevent breakouts"
    },
    {
        icon: "💧",
        name: "Hydration",
        desc: "Restore moisture and plumpness"
    },
    {
        icon: "🔬",
        name: "Large Pores",
        desc: "Minimize and refine pore appearance"
    },
    {
        icon: "🌸",
        name: "Sensitivity",
        desc: "Gentle care for reactive skin"
    }
];

const SkinConcernsCards = () => (
    <div className="skin-concerns-section">
        <div className="skin-concerns-cards">
            {concerns.map((c) => (
                <div className="skin-concern-card" key={c.name}>
                    <div className="skin-concern-icon-bg">
                        <span className="skin-concern-icon">{c.icon}</span>
                    </div>
                    <h3 className="skin-concern-name">{c.name}</h3>
                    <p className="skin-concern-desc">{c.desc}</p>
                </div>
            ))}
        </div>

    </div>
);

export default SkinConcernsCards;