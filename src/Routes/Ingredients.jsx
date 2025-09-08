import React, { useEffect, useState } from 'react';
import "../Style/Ingredients.css";

const fetchIngredients = () =>
    Promise.resolve([
        {
            id: 1,
            name: "Niacinamide",
            sub: "Vitamin B3",
            desc: "A versatile ingredient that addresses multiple skin concerns simultaneously.",
            benefits: ["Minimizes pores", "Reduces redness", "Controls oil", "Improves barrier"],
            concentration: "5-10%",
            icon: "leaf",
            color: "green"
        },
        {
            id: 2,
            name: "Peptides",
            sub: "Oligopeptides",
            desc: "Building blocks of proteins that signal skin to produce more collagen.",
            benefits: ["Firms skin", "Reduces wrinkles", "Boosts collagen", "Improves elasticity"],
            concentration: "3-5%",
            icon: "lab",
            color: "pink"
        },
        {
            id: 3,
            name: "Salicylic Acid",
            sub: "BHA",
            desc: "A beta hydroxy acid that penetrates deep into pores to clear congestion.",
            benefits: ["Unclogs pores", "Smooths texture", "Reduces acne", "Controls oil"],
            concentration: "0.5-2%",
            icon: "star",
            color: "orange"
        },
        {
            id: 4,
            name: "Vitamin C",
            sub: "L-Ascorbic Acid",
            desc: "A powerful antioxidant that brightens skin and protects against environmental damage.",
            benefits: ["Brightens skin", "Protects from free radicals", "Reduces dark spots", "Boosts collagen"],
            concentration: "10-20%",
            icon: "star",
            color: "orange"
        },
        {
            id: 5,
            name: "Retinol",
            sub: "Vitamin A",
            desc: "The gold standard for anti-aging, proven to stimulate collagen production.",
            benefits: ["Reduces wrinkles", "Minimizes pores", "Improves texture", "Evens skin tone"],
            concentration: "0.25-1%",
            icon: "lab",
            color: "pink"
        },
        {
            id: 6,
            name: "Hyaluronic Acid",
            sub: "Sodium Hyaluronate",
            desc: "A moisture magnet that can hold up to 1000 times its weight in water.",
            benefits: ["Deep hydration", "Reduces fine lines", "Plumps skin", "Improves elasticity"],
            concentration: "1-2%",
            icon: "shield",
            color: "blue"
        }
    ]);


const icons = {
    leaf: (
        <svg width="44" height="44" fill="none"><circle cx="22" cy="22" r="22" fill="#6edba8" /><path d="M30 18c-6 0-12 6-12 12" stroke="#fff" strokeWidth="2" strokeLinecap="round" /><path d="M18 30c0-6 6-12 12-12" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>
    ),
    lab: (
        <svg width="44" height="44" fill="none"><circle cx="22" cy="22" r="22" fill="#f8a7b5" /><rect x="16" y="12" width="12" height="18" rx="3" stroke="#fff" strokeWidth="2" /><path d="M16 22h12" stroke="#fff" strokeWidth="2" /></svg>
    ),
    star: (
        <svg width="44" height="44" fill="none"><circle cx="22" cy="22" r="22" fill="#ffb36b" /><path d="M22 13v7m0 0 3-3m-3 3-3-3m3 3v7m0 0 3 3m-3-3-3 3" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>
    ),
    shield: (
        <svg width="44" height="44" fill="none"><circle cx="22" cy="22" r="22" fill="#6edbfa" /><path d="M22 13c3.866 0 7 3.134 7 7v5c0 4.418-3.582 8-8 8s-8-3.582-8-8v-5c0-3.866 3.134-7 7-7Z" stroke="#fff" strokeWidth="2" /></svg>
    )
};

function Ingredients() {
    const [ingredients, setIngredients] = useState([]);

    useEffect(() => {
        fetchIngredients().then(data => setIngredients(data));
    }, []);

    return (
        <div>
            <div className="ingredients-hero">
                <h1 className="ingredients-hero-title">Active Ingredients</h1>
                <p className="ingredients-hero-desc">
                    Discover the science behind our formulations<br />
                    Each ingredient is carefully selected and clinically proven to deliver exceptional skincare results
                </p>
            </div>

            <section className="key-ingredients-section">
                <h2 className="key-ingredients-title">Our Key Ingredients</h2>
                <p className="key-ingredients-desc">
                    Science-backed actives that form the foundation of our premium formulations
                </p>
                <div className="key-ingredients-cards">
                    {ingredients.map(ing => (
                        <div className="key-ingredient-card" key={ing.id}>
                            <div className={`key-ingredient-icon key-ingredient-icon-${ing.color}`}>
                                {icons[ing.icon]}
                            </div>
                            <div className="key-ingredient-content">
                                <h3 className="key-ingredient-name">{ing.name}</h3>
                                <div className="key-ingredient-sub">{ing.sub}</div>
                                <div className="key-ingredient-desc">{ing.desc}</div>
                                <div className="key-ingredient-benefits">
                                    <strong>Key Benefits:</strong>
                                    <ul>
                                        {ing.benefits.map((b, i) => <li key={i}>{b}</li>)}
                                    </ul>
                                    <div className="key-ingredient-conc">Concentration: <span>{ing.concentration}</span></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
     
                <a href="/shop" className="explore-serums-btn">Explore Serums</a>
            </section>

    
            <section className="sourcing-section">
                <h2 className="sourcing-title">How We Source Our Ingredients</h2>
                <p className="sourcing-desc">
                    We partner with certified suppliers worldwide to ensure the highest quality, purity, and potency of every active ingredient in our formulations.
                </p>
                <div className="sourcing-cards">
                    <div className="sourcing-card">
                        <div className="sourcing-icon sourcing-icon-pink">
                    
                            <svg width="48" height="48" fill="none"><circle cx="24" cy="24" r="22" fill="#f8a7b5" /><path d="M24 15c4 0 7 3 7 7v5c0 4-3 8-7 8s-7-4-7-8v-5c0-4 3-7 7-7Z" stroke="#fff" strokeWidth="2" /></svg>
                        </div>
                        <div className="sourcing-card-title">Certified Pure</div>
                        <div className="sourcing-card-desc">All ingredients undergo rigorous testing for purity and potency before formulation.</div>
                    </div>
                    <div className="sourcing-card">
                        <div className="sourcing-icon sourcing-icon-pink">
                 
                            <svg width="48" height="48" fill="none"><circle cx="24" cy="24" r="22" fill="#f8a7b5" /><path d="M32 20c-7 0-14 7-14 14" stroke="#fff" strokeWidth="2" strokeLinecap="round" /><path d="M18 34c0-7 7-14 14-14" stroke="#fff" strokeWidth="2" strokeLinecap="round" /></svg>
                        </div>
                        <div className="sourcing-card-title">Sustainably Sourced</div>
                        <div className="sourcing-card-desc">We prioritize eco-friendly and ethical sourcing practices for all raw materials.</div>
                    </div>
                    <div className="sourcing-card">
                        <div className="sourcing-icon sourcing-icon-pink">
    
                            <svg width="48" height="48" fill="none"><circle cx="24" cy="24" r="22" fill="#f8a7b5" /><rect x="16" y="12" width="16" height="20" rx="4" stroke="#fff" strokeWidth="2" /><path d="M16 24h16" stroke="#fff" strokeWidth="2" /></svg>
                        </div>
                        <div className="sourcing-card-title">Lab Tested</div>
                        <div className="sourcing-card-desc">Independent laboratory verification ensures safety and efficacy standards.</div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Ingredients;