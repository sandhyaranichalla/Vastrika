import React, { useState, useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import "./AuthPage.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLogin) {
        const res = await axios.post(
          "http://localhost:5000/api/auth/login",
          { email, password }
        );

        login(res.data.user, res.data.token);
        navigate("/");
      } else {
        await axios.post(
          "http://localhost:5000/api/auth/register",
          { name, email, password }
        );

        alert("Registration successful. Please login.");
        setIsLogin(true);
      }
    } catch (error) {
      alert(error.response?.data?.message || "Error occurred");
    }
  };

  return (
  <div className="auth-container">
    <div className="auth-box">
      <h2>{isLogin ? "Login" : "Sign Up"}</h2>

      <form onSubmit={handleSubmit}>
        {!isLogin && (
          <input
            type="text"
            placeholder="Name"
            required
            onChange={(e) => setName(e.target.value)}
          />
        )}

        <input
          type="email"
          placeholder="Email"
          required
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit" className="auth-btn">
          {isLogin ? "Login" : "Create Account"}
        </button>
      </form>

      <button
        className="toggle-btn"
        onClick={() => setIsLogin(!isLogin)}
      >
        {isLogin
          ? "Don't have an account? Sign Up"
          : "Already have an account? Login"}
      </button>
    </div>
  </div>
);
};

export default AuthPage;