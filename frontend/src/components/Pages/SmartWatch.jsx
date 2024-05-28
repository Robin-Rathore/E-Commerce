import React, { useEffect, useState } from "react";
import "./SmartWatch.scss";
import Header from "../Header";
import Footer from "../Footer";
import TopSlider from "../TopSlider";
import axios from "axios";
import ProductCard from "../ProductCard";

const SmartWatch = () => {
  const [item,setItems] = useState([])
  const smartWatch = "Watch"
  const getItems = async()=>{
    const {data} = await axios.post("https://ej-backend.onrender.com/api/v1/product/filteredProducts",{category:smartWatch})
    setItems(data?.products)
  }
  useEffect(() => {
    getItems();
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
            <h1> Watches</h1>
          </div>
        </div>
        <div className="flex flex-wrap justify-center">
          {item.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SmartWatch;
