import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Style/Login.css";

const Login = ({ onLogin }) => {
    const [isSignup, setIsSignup] = useState(false);

    // fields
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = async () => {
        // basic checks
        if (isSignup) {
            if (!fullName || !email || !password || !confirmPassword) {
                alert("Please fill in all fields");
                return;
            }
            if (password !== confirmPassword) {
                alert("Passwords do not match");
                return;
            }
        } else {
            if (!email || !password) {
                alert("Please fill in email and password");
                return;
            }
        }

        const url = isSignup
            ? "http://localhost:5000/api/auth/signup"
            : "http://localhost:5000/api/auth/login";

        // for signup we also send fullName + confirmPassword, role fixed to "user"
        const body = isSignup
            ? { email, password, confirmPassword, fullName, role: "user" }
            : { email, password };

        try {
            const res = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            const data = await res.json();

            if (res.ok) {
                onLogin(data.user);
                localStorage.setItem("user", JSON.stringify(data.user));

                if (data.user.role === "admin") {
                    navigate("/admin");
                } else {
                    navigate("/");
                }
            } else {
                alert(data.message || "Invalid email or password");
            }
        } catch (err) {
            console.error("Auth error:", err);
            alert("Error connecting to server");
        }
    };

    return (
        <div className="login-container">
            <h2>{isSignup ? "Sign Up" : "Login"}</h2>

            {isSignup && (
                <input
                    type="text"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
            )}

            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            {isSignup && (
                <input
                    type="password"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
            )}

            <button onClick={handleSubmit}>
                {isSignup ? "Sign Up" : "Login"}
            </button>

            <p>
                {isSignup ? "Already have an account?" : "Don’t have an account?"}{" "}
                <span
                    className="login-toggle"
                    onClick={() => setIsSignup(!isSignup)}
                >
                    {isSignup ? "Login" : "Sign Up"}
                </span>
            </p>
        </div>
    );
};

export default Login;