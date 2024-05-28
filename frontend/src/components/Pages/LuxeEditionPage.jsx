import React, { useEffect, useState } from 'react'
import Header from '../Header'
import TopSlider from '../TopSlider'
import Footer from '../Footer'
import axios from 'axios'

const LuxeEditionPage = () => {
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
          <h1>Luxe Edition</h1>
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

export default LuxeEditionPage
