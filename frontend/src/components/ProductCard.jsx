import React, { useEffect, useState } from "react";
import { wathcInformationFirstWatch, wathcInformationSecondWatch, wathcInformationThird, wathcInformationforth } from "./StaticData";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Carousel.scss";
const ProductCard = () => {
  useEffect(() => {
    AOS.init({
      offset: 10,
      duration: 500,
    });
  }, []);
  return (
    <div className="main-container">
      <div className="underline">
        <hr />
      </div>
      <div className="New-launch-box">
        <div className="heading-card">
          <h1>New Launches</h1>
        </div>
        <div className="cardContainer-New-launch-box">
       <a href="" className="Acnhor-tag-card">
       <div className="card-New-launch-box">
            <div className="image-container">
            <img  src="//www.pebblecart.com/cdn/shop/files/1_b43d36a1-af61-46b2-bcae-9ccb3c325ac3.jpg?v=1714727741&amp;width=500" alt="Pebble Rio" srcset="//www.pebblecart.com/cdn/shop/files/1_b43d36a1-af61-46b2-bcae-9ccb3c325ac3.jpg?v=1714727741&amp;width=165 165w, //www.pebblecart.com/cdn/shop/files/1_b43d36a1-af61-46b2-bcae-9ccb3c325ac3.jpg?v=1714727741&amp;width=360 360w, //www.pebblecart.com/cdn/shop/files/1_b43d36a1-af61-46b2-bcae-9ccb3c325ac3.jpg?v=1714727741&amp;width=500 500w" width="250" height="250" className="motion-reduce" sizes="(min-width: 1600px) 367px, (min-width: 990px) calc((100vw - 10rem) / 4), (min-width: 750px) calc((100vw - 10rem) / 3), calc(100vw - 3rem)" fetchpriority="high"></img>
            </div>
            <div className="watch-card-container">
              <div className="watch-container">
             <div className="watch-container-child">
             <img  src="//www.pebblecart.com/cdn/shop/files/1_b43d36a1-af61-46b2-bcae-9ccb3c325ac3.jpg?v=1714727741&amp;width=100 " loading="lazy" width="50" height="50" alt="WINTER BLUE"/>
             </div>
              </div>
              <div className="watch-container">
                <div className="watch-container-child">
                <img src="//www.pebblecart.com/cdn/shop/files/1_b4638282-9011-402a-a16d-3aac55283693.jpg?v=1714727741&amp;width=100 " loading="lazy" width="50" height="50" alt="JET BLACK"/>
                </div>
              </div>
            </div>
            <div className="information">
              <h3>{ wathcInformationFirstWatch.name}</h3>
              <div className="info-card-container">
                <div className="info-card">
                  <p id="pera"> {wathcInformationFirstWatch.Highlight} </p>
                </div>
                <div className="info-card">
                  <p id="pera"> {wathcInformationFirstWatch.HighlightSecond} </p>
                </div>
              </div>
              <div className="product-details-container">
                  <p> {wathcInformationFirstWatch.ProductDetails} </p>
                </div>
                <div className="price2"><h5> {wathcInformationFirstWatch.price} </h5></div>
                <div className="price-container">
              <div className="peice-log">
                <img className="discount_logo" src="//www.pebblecart.com/cdn/shop/files/wow-removebg-preview.png?v=1707281388&amp;width=100" alt="Pebble" width="50" height="30" loading="lazy"/>
                </div>
                <div className="price1"><h5> {wathcInformationforth.discount} </h5></div>
              </div>
            </div>
            <div className="hover-text">
              <strong> {wathcInformationFirstWatch.hoverText} </strong>
            </div>
          </div>
       </a>

          <a href=""  className="Acnhor-tag-card">
          <div className="card-New-launch-box">
            <div className="image-container">
            <img src="//www.pebblecart.com/cdn/shop/files/1_2_6d11a3ab-2740-4685-83b1-fbb6a897e9d9.jpg?v=1715685109&amp;width=500" alt="Pebble Mega" srcset="//www.pebblecart.com/cdn/shop/files/1_2_6d11a3ab-2740-4685-83b1-fbb6a897e9d9.jpg?v=1715685109&amp;width=165 165w, //www.pebblecart.com/cdn/shop/files/1_2_6d11a3ab-2740-4685-83b1-fbb6a897e9d9.jpg?v=1715685109&amp;width=360 360w, //www.pebblecart.com/cdn/shop/files/1_2_6d11a3ab-2740-4685-83b1-fbb6a897e9d9.jpg?v=1715685109&amp;width=500 500w" width="250" height="250" className="motion-reduce" sizes="(min-width: 1600px) 367px, (min-width: 990px) calc((100vw - 10rem) / 4), (min-width: 750px) calc((100vw - 10rem) / 3), calc(100vw - 3rem)" fetchpriority="high" />
            </div>
             <div className="watch-card-container">
              <div className="watch-container">
             <div className="watch-container-child">
             <img src="//www.pebblecart.com/cdn/shop/files/1_2_6d11a3ab-2740-4685-83b1-fbb6a897e9d9.jpg?v=1715685109&amp;width=100 " loading="lazy" width="50" height="50" alt="MIDNIGHT GOLD"/>
             </div>
              </div>
              <div className="watch-container">
                <div className="watch-container-child">
                <img src="//www.pebblecart.com/cdn/shop/files/1_a29d6098-202a-472a-8545-eb18fdbf8b02.jpg?v=1715685109&amp;width=100 " loading="lazy" width="50" height="50" alt="MOONLIGHT GREY"/>
                </div>
              </div>
            </div>
            <div className="information">
              <h3> {wathcInformationSecondWatch.name} </h3>
              <div className="info-card-container">
                <div className="info-card">
                  <p id="pera"> {wathcInformationSecondWatch.Highlight} </p>
                </div>
                <div className="info-card">
                  <p id="pera"> {wathcInformationSecondWatch.HighlightSecond} </p>
                </div>
              </div>
              <div className="product-details-container">
                  <p> {wathcInformationSecondWatch.ProductDetails} </p>
                </div>
                <div className="price2"><h5> {wathcInformationSecondWatch.price} </h5>
                </div>
                <div className="price-container">
              <div className="peice-log">
                <img className="discount_logo" src="//www.pebblecart.com/cdn/shop/files/wow-removebg-preview.png?v=1707281388&amp;width=100" alt="Pebble" width="50" height="30" loading="lazy"/>
                </div>
                <div className="price1"><h5> {wathcInformationforth.discount} </h5></div>
              </div>                
            </div>
            <div className="hover-text">
            <strong> {wathcInformationSecondWatch.hoverText} </strong>
            </div>
          </div>
          </a>
          
          <a href="" className="Acnhor-tag-card">
          <div className="card-New-launch-box">
            <div className="image-container">
            <img src="//www.pebblecart.com/cdn/shop/files/SMWGXFUM3HQ7XHWB_0.jpg?v=1715604712&amp;width=500" alt="Pebble Vienna" srcset="//www.pebblecart.com/cdn/shop/files/SMWGXFUM3HQ7XHWB_0.jpg?v=1715604712&amp;width=165 165w, //www.pebblecart.com/cdn/shop/files/SMWGXFUM3HQ7XHWB_0.jpg?v=1715604712&amp;width=360 360w, //www.pebblecart.com/cdn/shop/files/SMWGXFUM3HQ7XHWB_0.jpg?v=1715604712&amp;width=500 500w" width="250" height="250" className="motion-reduce" sizes="(min-width: 1600px) 367px, (min-width: 990px) calc((100vw - 10rem) / 4), (min-width: 750px) calc((100vw - 10rem) / 3), calc(100vw - 3rem)" fetchpriority="high"/>
            </div>
            <div className="down-section">
            <div className="watch-card-container">
              <div className="watch-container">
             <div className="watch-container-child">
             <img src="//www.pebblecart.com/cdn/shop/files/1_25.jpg?v=1715604712&amp;width=100 " loading="lazy" width="50" height="50" alt="Classic Silver"/>
             </div>
              </div>
              <div className="watch-container">
                <div className="watch-container-child">
                <img src="//www.pebblecart.com/cdn/shop/files/SMWGXFUM3HQ7XHWB_0.jpg?v=1715604712&amp;width=100 " loading="lazy" width="50" height="50" alt="Classic Black"/>
                </div>
              </div>
            </div>
            </div>
            <div className="information">
              <h3> { wathcInformationThird.name }</h3>
              <div className="info-card-container">
                <div className="info-card">
                  <p id="pera"> {wathcInformationThird.Highlight} </p>
                </div>
                <div className="info-card">
                  <p id="pera"> {wathcInformationThird.HighlightSecond} </p>
                </div>
              </div>
              <div className="product-details-container">
                  <p> {wathcInformationThird.ProductDetails} </p>
                </div>
                <div className="price2"><h5> {wathcInformationThird.price} </h5>
                </div>
                <div className="price-container">
              <div className="peice-log">
                <img className="discount_logo" src="//www.pebblecart.com/cdn/shop/files/wow-removebg-preview.png?v=1707281388&amp;width=100" alt="Pebble" width="50" height="30" loading="lazy"/>
                </div>
                <div className="price1"><h5> {wathcInformationforth.discount} </h5></div>
              </div>
            </div>
            <div className="hover-text">
              <strong> {wathcInformationThird.hoverText} </strong>
            </div>
          </div>
          </a>

          <a href="" className="Acnhor-tag-card">
          <div className="card-New-launch-box">
            <div className="image-container">
            <img src="//www.pebblecart.com/cdn/shop/files/royal_catalogue_imgBrown.jpg?v=1714735721&amp;width=500" alt="Pebble Royale" srcset="//www.pebblecart.com/cdn/shop/files/royal_catalogue_imgBrown.jpg?v=1714735721&amp;width=165 165w, //www.pebblecart.com/cdn/shop/files/royal_catalogue_imgBrown.jpg?v=1714735721&amp;width=360 360w, //www.pebblecart.com/cdn/shop/files/royal_catalogue_imgBrown.jpg?v=1714735721&amp;width=500 500w" width="250" height="250" className="motion-reduce" sizes="(min-width: 1600px) 367px, (min-width: 990px) calc((100vw - 10rem) / 4), (min-width: 750px) calc((100vw - 10rem) / 3), calc(100vw - 3rem)" fetchpriority="high"/>
            </div>
            <div className="watch-card-container">
              <div className="watch-container">
             <div className="watch-container-child">
             <img src="//www.pebblecart.com/cdn/shop/files/royal_catalogue_imgBrown.jpg?v=1714735721&amp;width=100 " loading="lazy" width="50" height="50" alt="PFB79 Whisky Brown"/>
             </div>
              </div>
              <div className="watch-container">
                <div className="watch-container-child">
                <img src="//www.pebblecart.com/cdn/shop/files/royal_catalogue_imgGreen.jpg?v=1714738004&amp;width=100 " loading="lazy" width="50" height="50" alt="PFB79 Pine Green"/>
                </div>
              </div>
            </div>
            <div className="information">
              <h3> {wathcInformationforth.name} </h3>
              <div className="info-card-container">
                <div className="info-card">
                  <p id="pera"> {wathcInformationforth.Highlight} </p>
                </div>
                <div className="info-card">
                  <p id="pera"> {wathcInformationforth.HighlightSecond} </p>
                </div>
              </div>
              <div className="product-details-container">
                  <p> {wathcInformationforth.ProductDetails} </p>
                </div>
                <div className="price2"><h5> {wathcInformationforth.price} </h5></div>
              <div className="price-container">
              <div className="peice-log">
                <img className="discount_logo" src="//www.pebblecart.com/cdn/shop/files/wow-removebg-preview.png?v=1707281388&amp;width=100" alt="Pebble" width="50" height="30" loading="lazy"/>
                </div>
                <div className="price1"><h5> {wathcInformationforth.discount} </h5></div>
              </div>
            </div>
            <div className="hover-text">
             <strong> {wathcInformationforth.hoverText} </strong>
            </div>
          </div>
          </a>
        </div>
      </div>
      <div className="underline">
        <hr />
      </div>
    </div>
  );
};

export default ProductCard;
