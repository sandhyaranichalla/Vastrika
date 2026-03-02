import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer/Footer'
import "./Sareespage.css"
import { useNavigate } from "react-router-dom";
import { SearchContext } from "../Context/SearchContext";
import { useContext } from "react";
import axios from "axios";
import { useEffect, useState } from "react";



// const sareesdata = [
//   {
//     id: 1,
//     name: "Silk Saree",
//     price: 2999,
//     image: "/assets/vastrika.images/sarees/sarees1.avif",
//   },
//   {
//     id: 2,
//     name: "Cotton Saree",
//     price: 1499,
//     image: "/assets/vastrika.images/sarees/sarees2.avif",
//   },
//   {
//     id: 3,
//     name: "Designer Saree",
//     price: 3999,
//     image: "/assets/vastrika.images/sarees/sarees3.avif",
//   },
//   {
//     id: 4,
//     name: "Party Wear Saree",
//     price: 2599,
//     image: "/assets/vastrika.images/sarees/sarees4.avif",
//   },
//   {
//     id: 5,
//     name: "Banarasi Saree",
//     price: 4999,
//     image: "/assets/vastrika.images/sarees/sarees5.avif",
//   },
//   {
//     id: 6,
//     name: "Kanjeevaram Saree",
//     price: 6999,
//     image: "/assets/vastrika.images/sarees/sarees6.avif",
//   },
//   {
//     id: 7,
//     name: "Chiffon Saree",
//     price: 1899,
//     image: "/assets/vastrika.images/sarees/sarees7.avif",
//   },
//   {
//     id: 8,
//     name: "Georgette Saree",
//     price: 2199,
//     image: "/assets/vastrika.images/sarees/sarees8.avif",
//   },
//   {
//     id: 9,
//     name: "Linen Saree",
//     price: 1799,
//     image: "/assets/vastrika.images/sarees/sarees9.avif",
//   },
//   {
//     id: 10,
//     name: "Printed Saree",
//     price: 1299,
//     image: "/assets/vastrika.images/sarees/sarees10.avif",
//   },
//   {
//     id: 11,
//     name: "Bridal Saree",
//     price: 9999,
//     image: "/assets/vastrika.images/sarees/sarees11.avif",
//   },
//   {
//     id: 12,
//     name: "Half and Half Saree",
//     price: 2899,
//     image: "/assets/vastrika.images/sarees/sarees12.avif",
//   },
//   {
//     id: 13,
//     name: "Embroidered Saree",
//     price: 3499,
//     image: "/assets/vastrika.images/sarees/sarees13.jpg",
//   },
//   {
//     id: 14,
//     name: "Net Saree",
//     price: 2399,
//     image: "/assets/vastrika.images/sarees/sarees14.jpg",
//   },
//   {
//     id: 15,
//     name: "Traditional Saree",
//     price: 3199,
//     image: "/assets/vastrika.images/sarees/sarees15.jpg",
//   },
// ];
const Sareespage = () => {
  const navigate = useNavigate();
  // const SareesPage = () => {

  // const { searchTerm } = useContext(SearchContext);

  // const filteredProducts = sareesdata.filter((item) =>
  //   item.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  const [products, setProducts] = useState([]);

useEffect(() => {
  const fetchProducts = async () => {
    const res = await axios.get("http://localhost:5000/api/products");
    setProducts(res.data);
    
  };

  fetchProducts();
}, []);
  return (
    <div>
      <Navbar />
      <div className='sarees-container'>
        <h2 className='page-title'>Sarees Collection</h2>
        <div className="products-grid">
          {products.map((item) => (
            <div
              className="product-card"
              key={item._id}
              onClick={() => navigate(`/product/${item._id}`)}
            >
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <p className="price">₹{item.price}</p>
              <button className="add-btn">Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  )
}
export default Sareespage;