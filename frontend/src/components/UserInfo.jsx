import React, { useState } from "react";
import "../styles/userInfo.css";
import emptyCart from "../images/empty-cart.png";
import { Link, useNavigate } from "react-router-dom";
const UserInfo = () => {
  const orders = ["helllo"];
  const navigate = useNavigate()
  return (
    <div className="main">
      <div className="top">
        <h1>My Orders</h1>
        <Link to={"/login"}>
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

              <button type="button"> Continue Shopping</button>
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
          <h6>Name</h6>
          <h6>Email Address</h6>
        </div>
        <div className="bottom">
          <h6>Name</h6>
          <h6>Address</h6>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
