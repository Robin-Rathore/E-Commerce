import React from "react";
import watsapp from "../images/wattsapp.png"
import SearchModel from "./SearchModel";
import user from "../images/user.png"
import cart from "../images/cart.png"
import { Link } from "react-router-dom";
import Signup from "./Signup";
import Cart from "./Cart";
const Rihgt_Header = () => {
  const User = JSON.parse(localStorage.getItem("user"))
  return (
    <div className="header-right flex gap-10">
        <a href="https://wa.me/+919720684865?text=https://www.pebblecart.com/%0a%0aHi! I need some help." className="w-6 h-6 search-icon hover:w-6.5 h-6.5 hover:transform hover:scale-110 transition-transform duration-200 ease-in"><img src={watsapp} alt="whatsapp" /></a>
        <a href="#"><SearchModel/></a>
        {
          User?._id ? (
            <Link to={User?.role == 1 ? "/admin" : "/user"} className="w-6 h-6 search-icon hover:w-6.5 h-6.5 hover:transform hover:scale-110 transition-transform duration-200 ease-in"><img src={user} alt="whatsapp" /></Link>
            
          ):(

            <Link to={"/login"} className="w-6 h-6 search-icon hover:w-6.5 h-6.5 hover:transform hover:scale-110 transition-transform duration-200 ease-in"><img src={user} alt="whatsapp" /></Link>
          )
        }
        <Cart/>
        {/* <a href="#" className="w-6 h-6 search-icon hover:w-6.5 h-6.5 hover:transform hover:scale-110 transition-transform duration-200 ease-in"><img src={cart} alt="whatsapp" /><Cart/></a> */}
    </div>
  );
};

export default Rihgt_Header;
