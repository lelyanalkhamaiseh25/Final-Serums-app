import React, { useEffect, useState } from "react";
import "../Style/Cart.css";
import QantityBtn from "../Components/QantityBtn";

function Cart({ user }) {
    const [cart, setCart] = useState([]);
    const [promo, setPromo] = useState("");
    const [promoApplied, setPromoApplied] = useState(false);

    useEffect(() => {
        if (!user) return;
        fetch(`http://localhost:5000/api/users/cart/${user.email}`)
            .then((res) => res.json())
            .then((data) => setCart(data))
            .catch((err) => console.error("Error fetching cart:", err));
    }, [user]);

 
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    const saved = cart.reduce(
        (sum, item) =>
            sum + (item.oldPrice ? (item.oldPrice - item.price) * item.quantity : 0),
        0
    );

    const handleQuantityChange = async (id, newQty) => {
        if (!user) return;

        await fetch(`http://localhost:5000/api/users/cart/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: user.email, quantity: newQty }),
        });

   
        fetch(`http://localhost:5000/api/users/cart/${user.email}`)
            .then((res) => res.json())
            .then((data) => setCart(data));
    };

    const handleDelete = async (id) => {
        if (!user) return;

        await fetch(`http://localhost:5000/api/users/cart/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email: user.email }),
        });

        fetch(`http://localhost:5000/api/users/cart/${user.email}`)
            .then((res) => res.json())
            .then((data) => setCart(data));
    };

    const handlePromoApply = () => {
        setPromoApplied(true);
    };

    return (
        <div className="cart-page">
            <h1 className="cart-title">Shopping Cart</h1>
            <div className="cart-main">
                <div className="cart-items">
                    {cart.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        cart.map((item) => (
                            <div className="cart-item" key={item.id}>
                                <div className="cart-item-img">
                                    <img
                                        src={item.img}
                                        alt={item.name}
                                        className="cart-img-placeholder"
                                    />
                                </div>
                                <div className="cart-item-info">
                                    <div className="cart-item-header">
                                        <span className="cart-item-name">{item.name}</span>
                                        <button
                                            className="cart-item-delete"
                                            onClick={() => handleDelete(item.id)}
                                        >
                                            ×
                                        </button>
                                    </div>
                                    <div className="cart-item-pricing">
                                        <span className="cart-item-price">${item.price}</span>
                                        {item.oldPrice && (
                                            <span className="cart-item-oldprice">
                                                ${item.oldPrice}
                                            </span>
                                        )}

                                    </div>
                                    <div className="cart-item-actions">
                                        <QantityBtn
                                            value={item.quantity}
                                            onChange={(qty) => handleQuantityChange(item.id, qty)}
                                            min={1}
                                            max={99}
                                        />
                                    </div>
                                </div>
                                <div className="cart-item-total">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </div>
                            </div>
                        ))
                    )}
                </div>

                <div className="cart-summary">
                    <h2>Order Summary</h2>
                    <div className="cart-promo">
                        <input
                            type="text"
                            placeholder="Promo code"
                            value={promo}
                            onChange={(e) => setPromo(e.target.value)}
                            disabled={promoApplied}
                        />
                        <button onClick={handlePromoApply} disabled={promoApplied}>
                            Apply
                        </button>
                    </div>
                    <div className="cart-summary-row">
                        <span>Subtotal</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="cart-summary-row">
                        <span>You saved</span>
                        <span className="cart-summary-saved">
                            -{saved > 0 ? `$${saved.toFixed(2)}` : "$0.00"}
                        </span>
                    </div>
                    <div className="cart-summary-row">
                        <span>Shipping</span>
                        <span>Free</span>
                    </div>
                    <div className="cart-summary-row cart-summary-total">
                        <span>Total</span>
                        <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <button className="cart-checkout-btn" disabled={cart.length === 0}>
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Cart;
