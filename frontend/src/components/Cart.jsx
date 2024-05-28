import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import cart from "../images/cart.png";
import CloseIcon from "@mui/icons-material/Close";
import "./Cart.scss";
import { Close } from "@mui/icons-material";
import "../styles/cart.css";
import watch3 from "../images/watch3.jpg";
import { Link } from "react-router-dom";
import axios from "axios";

const CartComponent = () => {
  const [state, setState] = React.useState({ right: false });
  const user = JSON.parse(localStorage.getItem("user"));
  const [open, setOpen] = React.useState(false);
  const [item, setItem] = React.useState(null);
  const [price, setPrice] = React.useState();
  const [num, setNum] = React.useState(0);
  const [quantity, setQuantity] = React.useState(null);
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const toggleModel = () => {
    setOpen(!open);
  };

  const getCart = async () => {
    try {
      const { data } = await axios.get(
        `https://ej-backend.onrender.com/api/v1/user/getCart/${user._id}`
      );
      setItem(data?.cart?.cart);
    } catch (error) {
      console.log(error);
    }
  };

  const totalPrice = () => {
    try {
      let total = 0;
      item?.map(
        (order) =>
          (total =
            total +
            (order.price - order.price * (order.discount / 100)) *
              parseInt(order.quantity))
      );
      setPrice(total);
    } catch (error) {
      console.log(error);
    }
  };

  const handleIncrement = (uid, quantity) => {
    setNum((prevNum) => {
      const newNum = prevNum + 1;
      const updatedQuantity = parseInt(quantity) + newNum;
      handleChange(uid, updatedQuantity);
      return newNum;
    });
    setNum(0);
  };

  const handleDecrement = (uid, quantity) => {
    setNum((prevNum) => {
      const newNum = prevNum - 1; // Prevent negative quantities
      const updatedQuantity = parseInt(quantity) + newNum;
      handleChange(uid, updatedQuantity);
      return newNum;
    });
    setNum(0);
  };

  const handleChange = async (uid, qty) => {
    try {
      const { data } = await axios.post(
        `https://ej-backend.onrender.com/api/v1/user/updateCart/${user?._id}`,
        { uid, qty }
      );
      getCart();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async(uid)=>{
    try {
      const {data} = await axios.post(`https://ej-backend.onrender.com/api/v1/user/deleteCart/${user?._id}`,{uid})
      getCart()
    } catch (error) {
      console.log(error)
    }
  }

  



  React.useEffect(() => {
    totalPrice();
  }, [item]);

  React.useEffect(() => {
    getCart();
  }, [user?._id]);
  
  const list = (anchor, items) => (
    <div className="Cart-Area">
      <div className="top">
        <div className="title">Your Cart</div>
        <Button className="button" onClick={toggleDrawer(anchor, false)}>
          <CloseIcon />{" "}
        </Button>
      </div>
      {item?.length > 0 ? (
        <>
          {item?.map((c) => (
            <div className="box">
              <hr />
              <div className="cart">
                <div className="item">
                  <img
                    src={c.image}
                    alt="item-image"
                  />
                  <h1>{c.name}</h1>
                  <Button onClick={() => handleDelete(c?.uid)}>
                    <CloseIcon />
                  </Button>
                </div>
                <div className="updated item">
                  <div className="quantity">
                    <div
                      className="minus"
                      onClick={() => handleDecrement(c.uid, c.quantity)}
                    >
                      <span>&#8722;</span>
                    </div>
                    <p>{parseInt(c.quantity) + num}</p>
                    <div
                      className="plus"
                      onClick={() => handleIncrement(c.uid, c.quantity)}
                    >
                      <span>&#43;</span>
                    </div>
                  </div>
                  <p>
                    ₹{c.price - c.price * (c.discount / 100)} M.R.P.: ₹{c.price}{" "}
                    ({c.discount}% Off)
                  </p>
                </div>
                <hr />
              </div>
              <footer>
                <div className="price">
                  <h1>Subtotal</h1>
                  <h1>₹ {price}</h1>
                </div>
                <div className="bottom">
                  <h5>
                    Inclusive of all taxes. Discount codes will be applied at
                    checkout page
                  </h5>
                  <Link
                    style={{
                      display: "inline-block",
                      textDecoration: "none",
                      color: "inherit",
                      width: "100%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    to={"/OrderDetails"}
                  >
                    <button
                      className='button_cart2
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
                      <span>Place Order ₹{price}</span>
                    </button>
                  </Link>
                  {/* <button>Place Order ₹{price}</button> */}
                </div>
              </footer>
            </div>
          ))}
        </>
      ) : (
        <>
          <Box
            sx={{
              width: anchor === "top" || anchor === "bottom" ? "auto" : 250,
            }}
            role="presentation"
            className="Cart_Element"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
          >
            <Divider style={{ color: "black" }} />
            <div className="text_In_Cart">
              <p className="EmptyCart no-spacing mini-cart__empty-text h3">
                Your cart is currently empty
              </p>
              <p className="mini-cart__empty-text">
                Not sure where to start? Try these collections:
              </p>
            </div>
          </Box>

          <div className="buttonsCart">
            <Link
              style={{
                display: "inline-block",
                textDecoration: "none",
                color: "inherit",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              to={"/smartwatch"}
            >
              <button
                className='button_cart2
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
                <span>Smart Watches</span>
              </button>
            </Link>
            <Link
              style={{
                display: "inline-block",
                textDecoration: "none",
                color: "inherit",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              to={"/newlaunches"}
            >
              <button
                className='button_cart2
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
                <span>New Launches</span>
              </button>
            </Link>
            <Link
              style={{
                display: "inline-block",
                textDecoration: "none",
                color: "inherit",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              to={"/earphones"}
            >
              <button
                className='button_cart2
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
                <span>Earphones</span>
              </button>
            </Link>
            <Link
              style={{
                display: "inline-block",
                textDecoration: "none",
                color: "inherit",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              to={"/speakers"}
            >
              <button
                className='button_cart2
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
                <span>Speakers</span>
              </button>
            </Link>
            <Link
              style={{
                display: "inline-block",
                textDecoration: "none",
                color: "inherit",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              to={"/accessories"}
            >
              <button
                className='button_cart2
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
                <span>Accessories</span>
              </button>
            </Link>
            <Link
              style={{
                display: "inline-block",
                textDecoration: "none",
                color: "inherit",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              to={"/bulkorder"}
            >
              <button
                className='button_cart2
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
                <span>Bulk Order</span>
              </button>
            </Link>
            <button
              className='button_cart2
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
              <span>Blogs</span>
            </button>
          </div>
        </>
      )}
    </div>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            style={{ minWidth: "45px" }}
            className="button1"
            onClick={toggleDrawer(anchor, true)}
          >
            <img src={cart}></img>
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor, true)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default CartComponent;
