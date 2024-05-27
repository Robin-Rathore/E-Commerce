// ProductCard.jsx

import React, { useEffect, useState } from 'react';
import "./ProductCard.scss";
import { Link } from 'react-router-dom';
import axios from 'axios';


const ProductCard = ({ product }) => {
  return (
    
    <Link to={`/productDetail/${product._id}`}  className="product_Card_Wrapper max-w-lg bg-gray-50 rounded overflow-hidden m-4 border-[1px] border-gray-150 rounded">
      <img className="w-full" src={`http://localhost:8080/${product.images[0]}`} alt={product.name} />
      <div className="more-images flex">
        <a href="" className="w-1/5 m-2 shining-blue rounded border-[1px] border-blue">
          <img className='rounded'  src={`http://localhost:8080/${product.images[1]}`} alt={product.name} />
        </a>

        <a href="" className="w-1/5 m-2 shining-blue rounded border-[1px] border-blue">
          <img className='rounded' src={`http://localhost:8080/${product.images[2]}`} alt={product.name} />
        </a>       
        
      </div>
      
      <div className="product_card_Font px-2 py-2">
        <div className="product_card_Font_Title font-bold text-[#002D46] text-lg mb-2">{product.name}</div>
        <p className="text-gray-400 text-base">{product.ScreenSize} {product.Type} {product.DisplayType}</p>      
        
      </div>

      <div className="pricing flex flex-wrap ">
        <div className="font-bold text-[#002D46] text-lg mb-2 ml-2">&#8377;{product.price}</div>
        <div className="old ml-2 my-auto ml-2 text-gray-400" style={{textDecoration: "line-through"}}>&#8377;{product.oldPrice}</div>
        <div className="discount mr-2 my-auto ml-3 font-bold" style={{color:"#FF6D5C"}}> {'('}{product?.discount}{')'} </div>
      </div>

      <div className="offer px-2 py-2 flex flex-wrap  text-[#002D46] ">
        <img className='h-12 w-12' src="https://www.pebblecart.com/cdn/shop/files/wow-removebg-preview.png?v=1707281388&width=100" alt=""/>
        <div className="second  my-auto ml-3 font-bold "> &#8377;{product.price}</div>
        <div className="third my-auto ml-2"> with Bank offer</div>
      </div>
    </Link>
  );
};

const ProductList = () => {
  const [products,setProducts] = useState([]);
  const getProducts = async()=>{
    try {
      const { data } = await axios.get(
        "http://localhost:8080/api/v1/product/getLatest"
      );
      setProducts(data?.products);
      console.log(data?.products)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getProducts()
  },[])
  return (
    <>
    <div  className="head text-[#002D46] font-semibold text-4xl m-6 ">New Launches</div>      
    <div className="flex flex-wrap justify-center">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
    </>
  );
};

export default ProductList;
