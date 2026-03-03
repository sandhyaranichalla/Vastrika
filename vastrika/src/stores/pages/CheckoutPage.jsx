import React, { useContext, useState } from "react";
import { CartContext } from "./Cartcontext";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import "./CheckoutPage.css";
import axios from "axios";

const API_BASE_URL = process.env.REACT_APP_API_URL || "http://localhost:5000";

const CheckoutPage = () => {
  const { cart, clearCart } = useContext(CartContext);
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handlePlaceOrder = async () => {
    if (!cart.length) return;

    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/auth");
      return;
    }

    try {
      setIsPlacingOrder(true);
      const payload = {
        items: cart.map((item) => ({
          name: item.name,
          price: item.price,
          quantity: item.quantity,
          image: item.image,
        })),
        totalAmount,
        address: address.trim() || "Address not provided",
        paymentMethod,
      };

      const res = await axios.post(`${API_BASE_URL}/api/orders`, payload, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      clearCart();
      navigate("/order-success", {
        state: { orderId: res.data?.order?._id },
      });
    } catch (error) {
      alert(error.response?.data?.message || "Failed to place order");
    } finally {
      setIsPlacingOrder(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="checkout-container">
        <h2>Order Summary</h2>

        {cart.map((item, index) => (
          <div key={item._id || item.id || index} className="checkout-item">
            <img src={item.image} alt={item.name} />
            <div>
              <h4>{item.name}</h4>
              <p>₹{item.price} × {item.quantity}</p>
              <p>Total: ₹{item.price * item.quantity}</p>
            </div>
          </div>
        ))}

        <input
          type="text"
          className="checkout-input"
          placeholder="Enter delivery address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <div className="payment-section">
          <label htmlFor="paymentMethod">Payment Method</label>
          <select
            className="payment-select"
            id="paymentMethod"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="Cash on Delivery">Cash on Delivery</option>
            <option value="UPI">UPI</option>
            <option value="Credit/Debit Card">Credit/Debit Card</option>
            <option value="Net Banking">Net Banking</option>
          </select>
        </div>

        <h3 className="checkout-total">Grand Total: ₹{totalAmount}</h3>

        <button
          className="place-order-btn"
          onClick={handlePlaceOrder}
          disabled={isPlacingOrder || cart.length === 0}
        >
          {isPlacingOrder ? "Placing Order..." : "Place Order"}
        </button>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;


