import React, { useEffect, useState } from 'react'
import "./SmartWatch.scss";
import Header from "../Header";
import Footer from "../Footer";
import TopSlider from '../TopSlider';
import axios from 'axios';
import ProductCard from '../ProductCard'
const Speaker = () => {
  const [items,setItems] = useState([]);
  const speakers = "Speakers"
  const getItems = async()=>{
    const {data} = await axios.post("https://ej-backend.onrender.com/api/v1/product/filteredProducts",{category:speakers})
    setItems(data?.products)
  }
  useEffect(()=>{
    getItems();
  },[]);
  return (
    <>
    <Header />
    <TopSlider/>
    <div className="wrapper_of_SmartWatch">
      <div className="main_content_SmartWatch">
        <div className="heading_SmartWatch">
          <h1>Speakers</h1>
        </div>
      </div>
      <div
        className={`min-h-screen flex flex-col justify-center px-5 pt-24 lg:pt-16 'details-open' }`}
      >
        <div className="flex flex-wrap justify-center">
          {items.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </>
  )
}

export default Speaker
