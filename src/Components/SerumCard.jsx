import React from "react";
import QantityBtn from "./QantityBtn";
import "../Style/SerumCard.css";

const SerumCard = ({ serum, quantity, onQuantityChange, onAddToCart }) => (
    <div className="serum-card">
        <div className="serum-img-container">
            <img src={serum.img} alt={serum.name} className="serum-img" />
        </div>
        <div className="serum-info">
            <h3 className="serum-name">{serum.name}</h3>
            <p className="serum-price">${serum.price}</p>
            <p className="serum-desc">{serum.description}</p>
            <div className="serum-actions">
                <QantityBtn value={quantity} onChange={onQuantityChange} />
                <button className="serum-add-btn" onClick={onAddToCart}>
                    Add to Cart
                </button>
            </div>
        </div>
    </div>
);

export default SerumCard;
