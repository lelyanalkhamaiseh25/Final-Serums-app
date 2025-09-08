import React, { useState, useEffect } from 'react';
import '../Style/Qantity.css';

const QantityBtn = ({ value = 1, onChange, min = 1, max = 99 }) => {
    const [count, setCount] = useState(Number(value) || 1);


    useEffect(() => {
        setCount(Number(value) || 1);
    }, [value]);

    const increment = () => {
        const newVal = Math.min(max, count + 1);
        setCount(newVal);
        if (onChange) onChange(newVal);  
    };

    const decrement = () => {
        const newVal = Math.max(min, count - 1);
        setCount(newVal);
        if (onChange) onChange(newVal); 
    };

    return (
        <div className="quantity-btn-group">
            <button type="button" className="qty-btn" onClick={decrement} disabled={count <= min}>-</button>
            <span className="serum-qty">{count}</span>
            <button type="button" className="qty-btn" onClick={increment} disabled={count >= max}>+</button>
        </div>
    );
};

export default QantityBtn;
