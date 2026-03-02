import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../pages/Cartcontext";
import { AuthContext } from "../Context/AuthContext";
// import { CartContext } from "../pages/Cartcontext";
import { SearchContext } from "../Context/SearchContext";
const Navbar = () => {
  const { cart } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
);
  return (
    <div className="Navbar-container">

      {/* Left: Logo */}
      <div className="logo-image-container">
        <img
          className="logo-image"
          src="/assets/vastrika.images/vastrika.logo.png"
          alt="Vastrika Logo"
        />
      </div>

      {/* Center: Search + Categories */}
      <div className="center-section">
        <div className="search-input-container">
          <input type="search" placeholder="Search..." className="input" value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}/>
        </div>

        <div className="menu-bar">
          <Link to="/" className="menu-link">Home</Link>
          <Link to="/sarees" className="menu-link">Sarees</Link>
          <span className="menu-item">Half Sarees</span>
          <span className="menu-item">Lehangas</span>
          <span className="menu-item">Chudidhars</span>
          <span className="menu-item">Girl Frocks</span>
        </div>
      </div>

      {/* Right: Login Button */}
      <div className="auth-buttons-container">
        <Link to="/cart">
          <span className="cart-count">{totalItems}</span>
          <FaShoppingCart className="cart-icon" />
          
        </Link>
         {user ? (
    <>
      <span className="welcome-text">Welcome, {user.name}</span>
      <Link  to="/my-orders">
        <button className="login-button">My orders</button>
      </Link>
      <button className="login-button" onClick={logout}>
        Logout
      </button>
    </>
  ) : (
    <Link to="/auth">
      <button className="login-button">Sign In</button>
    </Link>
  )}
      </div>

    </div>
  );
};

export default Navbar;
