// ProductCard.jsx

import React from 'react';
import "./ProductCard.scss";


const ProductCard = ({ product }) => {
  return (
    
    <a href='' className="product_Card_Wrapper max-w-lg bg-gray-50 rounded overflow-hidden m-4 border-[1px] border-gray-150 rounded">
      <img className="w-full" src={product.image} alt={product.name} />
      <div className="more-images flex">
        <a href="" className="w-1/5 m-2 shining-blue rounded border-[1px] border-blue">
          <img className='rounded'  src={product.image} alt={product.name} />
        </a>

        <a href="" className="w-1/5 m-2 shining-blue rounded border-[1px] border-blue">
          <img className='rounded' src={product.image} alt={product.name} />
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
    </a>
  );
};

const products = [
  {
    name: "Nike Air01",
    price: '198',
    oldPrice:'270',
    discount:'12% off',
    image: 'https://www.pebblecart.com/cdn/shop/files/1_2_6d11a3ab-2740-4685-83b1-fbb6a897e9d9.jpg?v=1715685109',
    ScreenSize :" ( 5.23 cm)",
    Type : "Amoled Smartwatch",
    DisplayType : "Amoled Display",

  },
  {
    name: 'Pebble Mega',    
    price: '255',
    oldPrice:'270',
    discount:'12%',
    image: 'https://www.pebblecart.com/cdn/shop/files/3_0f6e0532-1ea5-4372-affd-46bc67edad52.jpg?v=1715685109',
    ScreenSize :" ( 5.23 cm)",
    Type : "Amoled Smartwatch",
    DisplayType : "Amoled Display",
  },
  {
    name: 'Pebble Viena',
    price: '340',
    oldPrice:'270',
    discount:'12%',
    image: 'https://www.pebblecart.com/cdn/shop/files/2_2.jpg?v=1715685109',
    ScreenSize :" ( 5.23 cm)",
    Type : "Amoled Smartwatch",
    DisplayType : "Amoled Display",
  },
  {
    name: 'Pebble Viena',
    price: '340',
    oldPrice:'270',
    discount:'12%',
    image: 'https://www.pebblecart.com/cdn/shop/files/2_2.jpg?v=1715685109',
    ScreenSize :" ( 5.23 cm)",
    Type : "Amoled Smartwatch",
    DisplayType : "Amoled Display",
  },
];

const ProductList = () => {
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
