import * as React from "react";
import Box from "@mui/material/Box";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import cart from "../images/cart.png";
import CloseIcon from "@mui/icons-material/Close";
import "./Cart.scss";

const Cart = () => {
  const [state, setState] = React.useState({
    right: false,
  });

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

  const list = (anchor) => (
    <div className="Cart-Area">
      <div className="top">
        <div className="title">Your Cart</div>
        <Button className="button" onClick={toggleDrawer(anchor, false)}>
          <CloseIcon />{" "}
        </Button>
      </div>
      <Box
        sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
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
      <button
        className='button_cart
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
        
        <span>smart watches</span>
      </button>
      <button
        className='button_cart
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
        
        <span>new launches</span>
      </button>
      <button
       className='button_cart
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
        
        <span>earphones</span>
      </button>
      <button
        className='button_cart
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
        
        <span>speakers</span>
      </button>
      <button
        className='button_cart
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
        
        <span>accessories</span>
      </button>
      <button
        className='button_cart
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
        
        <span>bulk order</span>
      </button>
      <button
       className='button_cart
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
        
        <span>blogs</span>
      </button>  
      </div>
    </div>
  );

  return (
    <div>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button className="toggle_button" onClick={toggleDrawer(anchor, true)}>
            <a className="w-6 h-6 search-icon hover:w-6.5 h-6.5 hover:transform hover:scale-110 transition-transform duration-500 ease-in-out">
              <img src={cart} alt="whatsapp" />
            </a>
          </Button>
          {/* <img onClick={toggleDrawer(anchor, true)} src={cart} alt='Cart'></img> */}
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Cart;
