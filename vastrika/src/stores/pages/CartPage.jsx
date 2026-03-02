import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import  {CartContext}  from "./Cartcontext";
import "./CartPage.css";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart,
  removeFromCart,
  increaseQuantity,
  decreaseQuantity} = useContext(CartContext);
const totalAmount = cart.reduce(
  (total, item) => total + item.price * item.quantity,
  0
);

  return (
   
    <>

      <Navbar />
      <div className="cart-container">
  <h2 className="cart-title">Your Cart</h2>

  {cart.length === 0 ? (
    <p>Cart is empty</p>
  ) : (
    cart.map((item, index) => (
      <div key={item._id || item.id || index} className="cart-item">
        <img
          src={item.image}
          alt={item.name}
          className="cart-image"
        />

        <div className="cart-details">
          <h4 className="cart-name">{item.name}</h4>
          <p className="cart-price">₹{item.price}</p>

          <div className="quantity-container">
            <button
              className="quantity-btn"
              onClick={() => decreaseQuantity(item._id || item.id)}
            >
              -
            </button>

            <span>{item.quantity}</span>

            <button
              className="quantity-btn"
              onClick={() => increaseQuantity(item._id || item.id)}
            >
              +
            </button>
          </div>

          <p>Total: ₹{item.price * item.quantity}</p>

          <button
            className="remove-btn"
            onClick={() => removeFromCart(item._id || item.id)}
          >
            Remove
          </button>
        </div>
      </div>
    ))
  )}

  <div className="cart-summary">
    <h3 className="total-amount">
      Total Amount: ₹{totalAmount}
    </h3>

    <Link to="/checkout">
        <button className="checkout-btn">
          Proceed to Checkout
        </button>
    </Link>

    
  </div>
</div>
      <Footer />
    </>
  );
};

export default CartPage;
