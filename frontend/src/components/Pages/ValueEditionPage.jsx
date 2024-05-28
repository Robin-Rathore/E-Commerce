import React, { useEffect, useState } from 'react'
import Footer from '../Footer'
import TopSlider from '../TopSlider'
import Header from '../Header'
import axios from 'axios'

const ValueEditionPage = () => {
  const [items, setItems] = useState([]);
  const smartWatch = "watch";
  const getItems = async () => {
    const { data } = await axios.post(
      "http://localhost:8080/api/v1/product/filteredProducts",
      { category: smartWatch }
    );
    setItems(data?.products);
  };
  useEffect(() => {
    getItems();
  }, []);
  return (
    <>
      <div className="top_heade">
        <Header />
        <TopSlider/>
      </div>
    <div className="wrapper_of_SmartWatch">
      <div className="main_content_SmartWatch">
        <div className="heading_SmartWatch">
          <h1>Value Edition</h1>
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
          {items.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
    </div>
    <Footer />
    </>
  )
}

export default ValueEditionPage
