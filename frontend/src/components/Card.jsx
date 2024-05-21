import React, { useEffect } from "react";
import "./Carousel.scss";
import AOS from "aos";
import "aos/dist/aos.css";
function Card() {
  useEffect(() =>{
    const delay = 1000;

    const timer = setTimeout(()=>{
      AOS.init({
        offset:100,
        duration: 500,
      });
    }, delay);
    return ()=> clearTimeout(timer);
  },[]);
  return (
    <div className="card-collection">
      <div className="heading-card">
        <h1>Explore Collections</h1>
      </div>
      <div className="cardContainer">
        <a href="">
          <div data-aos="zoom-in" className="card">
            <div className="iamge-holder">
              <img
                src="//www.pebblecart.com/cdn/shop/files/285x291_Luxe_Edition.png?v=1691742387&amp;width=350"
                alt=""
                srcset="//www.pebblecart.com/cdn/shop/files/285x291_Luxe_Edition.png?v=1691742387&amp;width=165 165w, //www.pebblecart.com/cdn/shop/files/285x291_Luxe_Edition.png?v=1691742387&amp;width=350 350w"
                width="160"
                height="160"
                loading="lazy"
                class="image-fit collection__image"
                sizes="(min-width: 750px) 50vw, 100vw"
              />
            </div>
            <div className="image-text">
              <h2> Luxe Edition</h2>
            </div>
          </div>
        </a>
        <a href="">
          <div data-aos="zoom-in" className="card">
            <div className="image-holder">
              <img
                src="//www.pebblecart.com/cdn/shop/files/285x291_Gifting_Edition_2.png?v=1691750170&amp;width=350"
                alt=""
                srcset="//www.pebblecart.com/cdn/shop/files/285x291_Gifting_Edition_2.png?v=1691750170&amp;width=165 165w, //www.pebblecart.com/cdn/shop/files/285x291_Gifting_Edition_2.png?v=1691750170&amp;width=350 350w"
                width="160"
                height="160"
                loading="lazy"
                class="image-fit collection__image"
                sizes="(min-width: 750px) 50vw, 100vw"
              />
            </div>
            <div className="image-text">
              <h2> Best Sellers</h2>
            </div>
          </div>
        </a>
        <a href="">
          <div data-aos="zoom-in" className="card">
            <div className="image-holder">
              <img
                src="//www.pebblecart.com/cdn/shop/files/285x291_Womens_Edition.png?v=1691748672&amp;width=350"
                alt=""
                srcset="//www.pebblecart.com/cdn/shop/files/285x291_Womens_Edition.png?v=1691748672&amp;width=165 165w, //www.pebblecart.com/cdn/shop/files/285x291_Womens_Edition.png?v=1691748672&amp;width=350 350w"
                width="160"
                height="160"
                loading="lazy"
                class="image-fit collection__image"
                sizes="(min-width: 750px) 50vw, 100vw"
              />
            </div>
            <div className="image-text">
              <h2> Women's Edition</h2>
            </div>
          </div>
        </a>
        <a href="">
          <div data-aos="zoom-in" className="card">
            <div className="image-holder">
              <img
                src="//www.pebblecart.com/cdn/shop/files/285x291_Value_Edition_1.png?v=1691750192&amp;width=350"
                alt=""
                srcset="//www.pebblecart.com/cdn/shop/files/285x291_Value_Edition_1.png?v=1691750192&amp;width=165 165w, //www.pebblecart.com/cdn/shop/files/285x291_Value_Edition_1.png?v=1691750192&amp;width=350 350w"
                width="160"
                height="160"
                loading="lazy"
                class="image-fit collection__image"
                sizes="(min-width: 750px) 50vw, 100vw"
              />
            </div>
            <div className="image-text">
              <h2> Value Edition</h2>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}
export default Card;
