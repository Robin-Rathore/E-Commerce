import React, { useState } from "react";
import "../styles/userInfo.scss";
import emptyCart from "../images/empty-cart.png";
import { Link, useNavigate } from "react-router-dom";
const UserInfo = () => {
  const orders = ["helllo"];
  const navigate = useNavigate()
  return (
    <div className="main">
      <div className="top">
        <Link to={"/myOrders"} >
        <h1>My Orders</h1>
        </Link>
        <Link to={"/login"} onClick={()=>{localStorage.removeItem("user")}}>
          <p>Logout</p>
        </Link>
      </div>
      <div className="orders">
        {orders ? (
          <>
            <div className="empty">
              <img src={emptyCart} alt="empty image" srcset="" />
              <div className="write">
                <h1>Hey!, it feels so empty!</h1>
                <span>Continue Shopping and Start Ordering</span>
              </div>
              <button
                className='button_cart1
                relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
                  px-4 py-4 absolute top-4 font-semibold
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
                <span> Continue Shopping</span>
              </button>
              {/* <button type="button"> Continue Shopping</button> */}
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
      <hr />
      <div className="user">
        <h1>ACCOUNT DETAILS</h1>
        <div className="top-user">
          <h4>Name</h4>
          <h4>Email Address</h4>
          <h4>Phone</h4>
          <h4>Address</h4>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
