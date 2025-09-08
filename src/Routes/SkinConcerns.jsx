import React from "react";
import { Link } from "react-router-dom";
import "../Style/SkinConcerns.css";
import SkinConcernsCards from "../Components/SkinConcernsCards";

function SkinConcerns() {
    return (
        <div>
            <div className="skinconcerns-hero">
                <h1 className="skinconcerns-hero-title">Skin Concerns</h1>
                <p className="skinconcerns-hero-desc">
                    Explore our science-backed solutions for your unique skin needs.<br />
                    Find the right actives and serums for every concern, from acne to aging.
                </p>
            </div>

            <section className="skinconcerns-section">
                <h2 className="skinconcerns-section-title">Our Targeted Solutions</h2>
                <p className="skinconcerns-section-desc">
                    We address a wide range of skin concerns with proven ingredients and gentle, effective formulations.
                </p>
                <SkinConcernsCards />
                <Link to="/shop" className="skinconcerns-shop-btn">Shop Now</Link>
            </section>
            <section className="howtouse-section">
                <h2 className="howtouse-title">How to Use</h2>
                <div className="howtouse-steps">
                    <div className="howtouse-step">
                        <div className="howtouse-step-circle">1</div>
                        <div className="howtouse-step-label">Cleanse</div>
                        <div className="howtouse-step-desc">Start with clean, dry skin</div>
                    </div>
                    <div className="howtouse-step">
                        <div className="howtouse-step-circle">2</div>
                        <div className="howtouse-step-label">Apply</div>
                        <div className="howtouse-step-desc">Use 2-3 drops, gently pat into skin</div>
                    </div>
                    <div className="howtouse-step">
                        <div className="howtouse-step-circle">3</div>
                        <div className="howtouse-step-label">Moisturize</div>
                        <div className="howtouse-step-desc">Follow with your favorite moisturizer</div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default SkinConcerns;  