import React, { useEffect, useState } from "react";
import "./AdvPage.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
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
  const [product, setProduct] = useState();
  const [num, setNum] = useState(1);
  const user = JSON.parse(localStorage?.getItem("user"));
  const getProduct = async () => {
    try {
      const { data } = await axios.get(
        "https://ej-backend.onrender.com/api/v1/frontProduct/getProduct"
      );
      setProduct(data[0]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getProduct();
  }, []);

  const handleSubmit = async()=>{
    const productData = new FormData();
    productData.append("name", product?.name);
    productData.append("description", product?.description);
    productData.append("price", product?.price);
    productData.append("quantity",1);
    productData.append("category", product?.category);
    productData.append("color", product?.color);
    productData.append("bluetoothVersion", product?.bluetoothVersion);
    productData.append("discount", product?.discount);
    productData.append("uid", product?._id);
    productData.append("screensize", product?.screensize);
    productData.append("model", product?.model);
    productData.append("displayType", product?.displayType);
    productData.append("charging", product?.charging);
    productData.append("battery", product?.battery);
    productData.append("stock", product?.stock);
    productData.append("image", product?.images[0]);
    try {
      const {data}= await axios.post(
        `https://ej-backend.onrender.com/api/v1/user/addToCart/${user._id}`,
        productData
      );
      window.location.reload()
      getCart()
    } catch (error) {
      console.log(error)
    }
  }


  const getCart = async () => {
    try {
      const { data } = await axios.get(
        `https://ej-backend.onrender.com/api/v1/user/getCart/${user._id}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    AOS.init({
      offset: 10,
      duration: 500,
    });
  }, []);
  return (
    <div className="main_wrapper">
      {product ? (
        <div className="wrapper">
          <div className="right_wrapper">
            <div className="images">
              <div data-aos="zoom-in" className="image_item">
                <img
                  src={product?.images[0]}
                  alt=""
                />
              </div>
              <div data-aos="zoom-in-left" className="image_item">
                <img
                  src={product?.images[1]}
                  alt=""
                />
              </div>
              <div data-aos="zoom-in-down" className="image_item">
                <img
                  src={product?.images[2]}
                  alt=""
                />
              </div>
              <div data-aos="zoom-in-right" className="image_item">
                <img
                  src={product?.images[3]}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="left_wrapper">
            <div className="product_info">
              <div className="product_title">
                <h2>{product?.name}</h2>
              </div>
              <div className="price">
                <p className="main_price">
                  ₹{" "}
                  {product?.price - product?.price * (product?.discount / 100)}
                </p>
                <p className="fake_price">
                  M.R.P : <s>₹ {product?.price}</s>
                </p>
                <p className="discount">({product?.discount}% Off)</p>
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
                <button onClick={handleSubmit}
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
      ) : (
        <h1>...loading</h1>
      )}
    </div>
  );
};

export default AdvPage;
