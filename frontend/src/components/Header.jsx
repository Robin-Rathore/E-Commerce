import React, { useState } from "react";
import "./Header.scss";
import Example from "./Example";
import Rihgt_Header from "./Rihgt_Header";
import { BarChart, BarChart3 } from "lucide-react";
import data from "./data";

const FlyoutLink = ({ children, href}) => {
    const [open, setOpen] = useState(false);
  
  
    return (
      <div
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="relative w-fit h-fit"
      >
        <a href={href} className="relative text-black">
          {children}
          <span
            style={{
              transform: open ? "scaleX(1)" : "scaleX(0)",
              transformOrigin: open ? "left" : "right", 
              height: "0.05rem"
            }}
            className="absolute -bottom-0 -left-0 -right-1 origin-left scale-x-0 bg-black transition-transform duration-300 ease-out"
          />
        </a>
      </div>
    );
  };

  // json acess
  
  // {data.map((category) => (
  //   <div key={category.name}>
  //     <h2>{category.name}</h2>
  //     {category.products.map((product) => (
  //       <div key={product.id}>
  //         <p>{product.name}</p>
  //         {/* Render other product information here */}
  //       </div>
  //     ))}
  //   </div>
  // ))} 


const Header = () => {
  return (
    <div>
      <div className="header-wrapper">
        <header>
          <div className="sidebarx">
            
          </div>
          <div className="header-left">
          <a href="#" children={"Logo and Name"} >Logo and Name</a>
          </div>
          <div className="header-center">
            <nav className="header__inline-menu">
              <ul className="list-menu list-menu--inline" role="list">
              <Example/>
                <li>
                  <dropdown-menu className="">
                    <a
                      href="/collections/new-launches"
                      className="header__menu-item header__menu-item--top list-menu__item focus-inset"
                    >
                      <FlyoutLink><span className="label">NEW LAUNCHES</span></FlyoutLink>
                    </a>
                  </dropdown-menu>
                </li>
                <li>
                  <dropdown-menu className="">
                    <a
                      href="/collections/headphones-1"
                      className="header__menu-item header__menu-item--top list-menu__item focus-inset"
                    >
                       <FlyoutLink><span className="label">EARPHONES</span></FlyoutLink>
                    </a>
                  </dropdown-menu>
                </li>
                <li>
                  <dropdown-menu className="">
                    <a
                      href="/collections/speaker"
                      className="header__menu-item header__menu-item--top list-menu__item focus-inset"
                    >
                      <FlyoutLink><span className="label">SPEAKERS</span></FlyoutLink>
                    </a>
                  </dropdown-menu>
                </li>
                <li>
                  <dropdown-menu className="">
                    <a
                      href="/collections/accessories-1"
                      className="header__menu-item header__menu-item--top list-menu__item focus-inset"
                    >
                      <FlyoutLink><span className="label">ACCESSORIES</span></FlyoutLink>
                    </a>
                  </dropdown-menu>
                </li>
                <li>
                  <dropdown-menu className="">
                    <a
                      href="/pages/bulk-orders"
                      className="header__menu-item header__menu-item--top list-menu__item focus-inset"
                    >
                      <FlyoutLink><span className="label">BULK ORDERS</span></FlyoutLink>
                    </a>
                  </dropdown-menu>
                </li>
                <li>
                  <dropdown-menu className="">
                    <a
                      href="/blogs/corporate-gifting"
                      className="header__menu-item header__menu-item--top list-menu__item focus-inset"
                    >
                      <FlyoutLink><span className="label">BLOGS</span></FlyoutLink>
                    </a>
                  </dropdown-menu>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-right"><Rihgt_Header/></div>
        </header>
      </div>
    </div>
  );
};

export default Header;

