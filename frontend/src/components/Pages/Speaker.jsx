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
    const {data} = await axios.post("http://localhost:8080/api/v1/product/filteredProducts",{category:speakers})
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
        <div className="flex flex-wrap justify-center gap-5 pt-8">
          {items.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              discount={item.discount}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
    <Footer />
  </>
  )
}

export default Speaker
