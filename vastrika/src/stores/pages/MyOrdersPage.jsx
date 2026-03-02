import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import { AuthContext } from "../Context/AuthContext";

const MyOrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const { user } = useContext(AuthContext);
  

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await axios.get(
          "http://localhost:5000/api/orders/my-orders",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        
        setOrders(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchOrders();
  }, [user]);

  return (
    <>
      <Navbar />
      <div style={{ padding: "150px 60px", minHeight: "100vh" }}>
        <h2>My Orders</h2>

        {orders.length === 0 ? (
          <p>No orders yet.</p>
        ) : (
          orders.map((order) => (
            <div key={order._id} style={{ margin: "20px 0", border: "1px solid #ccc", padding: "20px" }}>
              <h4>Order ID: {order._id}</h4>
              <p>Total: ₹{order.totalAmount}</p>
              <p>Address: {order.address}</p>
              <p>Payment: {order.paymentMethod || "Cash on Delivery"}</p>
              <p>Date: {new Date(order.createdAt).toLocaleString()}</p>

              <h5>Items:</h5>
              {order.items.map((item, index) => (
                <div key={index}>
                  {item.name} - ₹{item.price} × {item.quantity}
                </div>
              ))}
            </div>
          ))
        )}
      </div>
      <Footer />
    </>
  );
};

export default MyOrdersPage;
