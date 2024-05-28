import React, { useEffect, useState } from "react";
import "./SmartWatch.scss";
import Header from "../Header";
import Footer from "../Footer";
import TopSlider from "../TopSlider";
import axios from "axios";
import ProductCard from '../ProductCard'
const NewLaunches = () => {
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        "https://ej-backend.onrender.com/api/v1/product/getProducts"
      );
      setProducts(data?.products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <>
      <div className="top_heade">
        <Header />
        <TopSlider />
      </div>
      <div className="wrapper_of_SmartWatch">
        <div className="main_content_SmartWatch">
          <div className="heading_SmartWatch">
            <h1>New Launches</h1>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          {products.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewLaunches;
