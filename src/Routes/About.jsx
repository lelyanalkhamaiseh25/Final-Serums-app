import React from 'react';
import "../Style/About.css";

const values = [
    {
        icon: "🌿",
        title: "Natural Ingredients",
        desc: "We source only the finest, ethically-sourced ingredients from around the world"
    },
    {
        icon: "🎖️",
        title: "Scientific Excellence",
        desc: "Every formula is backed by cutting-edge research and dermatological testing"
    },
    {
        icon: "💗",
        title: "Cruelty-Free",
        desc: "We never test on animals and are committed to ethical beauty practices"
    },
    {
        icon: "👥",
        title: "Community First",
        desc: "Your skin journey matters to us, and we're here to support you every step"
    }
];

function About() {
    return (
        <div>
            <div className="about-hero">
                <h1 className="about-hero-title">About Us</h1>
                <p className="about-hero-desc">
                    Discover our story and commitment to providing the best skincare solutions
                </p>
            </div>

            <section className="about-mission">
                <h2 className="mission-title">Our Mission</h2>
                <p className="mission-desc">
                    At Serums, we believe that everyone deserves to feel confident in their skin.
                    That's why we've dedicated ourselves to creating premium, science-backed
                    formulations that deliver real results. From our sustainable sourcing practices
                    to our cruelty-free testing methods, every aspect of our business reflects our
                    commitment to both your skin and our planet.
                </p>

                <div className="mission-stats">
                    <div className="stat">
                        <div className="value">50K+</div>
                        <div className="label">Happy Customers</div>
                    </div>
                    <div className="stat">
                        <div className="value">15+</div>
                        <div className="label">Award-Winning Products</div>
                    </div>
                    <div className="stat">
                        <div className="value">98%</div>
                        <div className="label">Customer Satisfaction</div>
                    </div>
                    <div className="stat">
                        <div className="value">5</div>
                        <div className="label">Years of Excellence</div>
                    </div>
                </div>
            </section>


            <section className="about-values">
                <h2 className="about-values-title">Our Values</h2>
                <p className="about-values-desc">
                    These core principles guide everything we do, from product development to customer service
                </p>
                <div className="about-values-cards">
                    {values.map((v) => (
                        <div className="about-value-card" key={v.title}>
                            <div className="about-value-icon-bg">
                                <span className="about-value-icon">{v.icon}</span>
                            </div>
                            <h3 className="about-value-name">{v.title}</h3>
                            <p className="about-value-desc">{v.desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default About;