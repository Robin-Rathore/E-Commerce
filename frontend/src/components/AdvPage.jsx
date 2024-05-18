import React, { useEffect, useState } from "react";
import "./AdvPage.scss";
import AOS from "aos";
import "aos/dist/aos.css";

// const DrawOutlineButton = ({ children, ...rest }) => {

//   return (

//     <button

//       {...rest}

//       className="group relative px-4 py-2 font-medium text-slate-100 transition-colors duration-[400ms] hover:text-indigo-300"

//     >

//       <span>{children}</span>

//       {/* TOP */}

//       <span className="absolute left-0 top-0 h-[2px] w-0 bg-indigo-300 transition-all duration-100 group-hover:w-full" />

//       {/* RIGHT */}

//       <span className="absolute right-0 top-0 h-0 w-[2px] bg-indigo-300 transition-all delay-100 duration-100 group-hover:h-full" />

//       {/* BOTTOM */}

//       <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-indigo-300 transition-all delay-200 duration-100 group-hover:w-full" />

//       {/* LEFT */}

//       <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-indigo-300 transition-all delay-300 duration-100 group-hover:h-full" />

//     </button>

//   );

// };

const AdvPage = () => {
  const [num, setNum] = useState(1);
  useEffect(() => {
    AOS.init({
      offset: 10,
      duration: 500,
    });
  }, []);
  return (
    <div className="main_wrapper">
      <div className="wrapper">
        <div className="right_wrapper">
          <div className="images">
            <div data-aos="zoom-in" className="image_item">
              <img
                src="https://www.shutterstock.com/image-photo/white-wireless-headphones-no-background-600nw-2071692311.jpg"
                alt=""
              />
            </div>
            <div data-aos="zoom-in-left" className="image_item">
              <img
                src="https://img.myipadbox.com/sec/product_l/TBD0602356301B.jpg"
                alt=""
              />
            </div>
            <div data-aos="zoom-in-down" className="image_item">
              <img
                src="https://rukminim2.flixcart.com/image/850/1000/xif0q/smartwatch/o/c/e/34-oq18-android-ios-parmarorama-yes-original-imagtdfk4cqdgyag.jpeg?q=90&crop=false"
                alt=""
              />
            </div>
            <div data-aos="zoom-in-right" className="image_item">
              <img
                src="https://rukminim2.flixcart.com/image/850/1000/xif0q/smartwatch/o/c/e/34-oq18-android-ios-parmarorama-yes-original-imagtdfk4cqdgyag.jpeg?q=90&crop=false"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="left_wrapper">
          <div className="product_info">
            <div className="product_title">
              <h2>Pebble Blissbuds Ultra</h2>
            </div>
            <div className="price">
              <p className="main_price">₹ 1,799</p>
              <p className="fake_price">
                M.R.P : <s>₹ 6,999</s>
              </p>
              <p className="discount">(75% Off)</p>
              <button className="sale_button">SALE</button>
            </div>
            <div className="quantity">
              <button
                className="quantity_button"
                onClick={() => setNum(num > 1 ? num - 1 : num)}
              >
                -
              </button>
              <input
                className="quantity_input"
                type="number"
                min={"1"}
                value={num}
              ></input>
              <button
                className="quantity_button"
                onClick={() => setNum(num + 1)}
              >
                +
              </button>
            </div>
            <div className="add_to_cart_button">
              <button
                className='button_cart1
       relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
        px-4 py-2 font-semibold
       uppercase transition-all duration-500
       
       before:absolute before:inset-0
       before:-z-10 before:translate-x-[150%]
       before:translate-y-[150%] before:scale-[2.5]
       before:rounded-[100%] before:bg-SecondaryColor
       before:transition-transform before:duration-1000
       before:content-[""]

       hover:scale-105 hover:text-PrimaryColor
       hover:before:translate-x-[0%]
       hover:before:translate-y-[0%]
       active:scale-95'
              >
                <span>Add To Cart</span>
              </button>
            </div>
            <div className="buy_it_now_button">
              <button
                className='button_cart1
       relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
        px-4 py-2 font-semibold
       uppercase transition-all duration-500
       
       before:absolute before:inset-0
       before:-z-10 before:translate-x-[150%]
       before:translate-y-[150%] before:scale-[2.5]
       before:rounded-[100%] before:bg-SecondaryColor
       before:transition-transform before:duration-1000
       before:content-[""]

       hover:scale-105 hover:text-PrimaryColor
       hover:before:translate-x-[0%]
       hover:before:translate-y-[0%]
       active:scale-95'
              >
                <span>Buy Now</span>
              </button>
              {/* <DrawOutlineButton>Hover me</DrawOutlineButton> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdvPage;
