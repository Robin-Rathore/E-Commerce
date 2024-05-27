import React, { useEffect, useState } from "react";
import "./SmartWatch.scss";
import Header from "../Header";
import Footer from "../Footer";
import TopSlider from "../TopSlider";
import axios from "axios";
import ProductCard from '../ProductCard'
const NewLaunches = () => {
  const [products, setProducts] = useState(null);
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
        </div>
        <div
          className={`min-h-screen flex flex-col justify-center px-5 pt-24 lg:pt-16 'details-open' }`}
        >
          <div className="flex flex-wrap justify-center gap-5 pt-8">
          {products?.map((item) => (
            <ProductCard
              key={item._id}
              id={item._id}
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
  );
};

export default NewLaunches;
