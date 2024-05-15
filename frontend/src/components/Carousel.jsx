import React, { useState } from "react";
import "./Carousel.css";

const Carousel = () => {

  const [slide, setSlide] = useState(0);
  const data = [
    { src: "https://img.freepik.com/free-vector/gradient-real-estate-linkedin-banner_23-2149150264.jpg?t=st=1715701712~exp=1715705312~hmac=3b150949a79780b334e6d005acf9bfd25365c47709fa2a3117c449ebd4432545&w=1800", alt: "Image 1" },
    { src: "https://img.freepik.com/free-vector/gradient-real-estate-facebook-cover_23-2149150267.jpg?t=st=1715701733~exp=1715705333~hmac=b191b4c32e1523381fa1cf75862ebb83361df1445120eab527b8406d7f0ccf58&w=2000", alt: "Image 2" },
    { src: "https://img.freepik.com/premium-vector/gradient-real-estate-instagram-stories_23-2149150260.jpg", alt: "Image 3" },
  ];
  return (
    <div className="main-container">
      <div className="carousel">
        {data.map((item, idx) => (
          <img
            key={idx}
            src={item.src}
            alt={item.alt}
            className={idx === slide ? "slide" : "slide slide-hidden"}
          />
        ))}
        <span className="indicators">
          {data.map((_, idx) => (
            <button
              key={idx}
              className={
                idx === slide ? "indicator" : "indicator indicator-inactive"
              }
              onClick={() => setSlide(idx)}
            ></button>
          ))}
        </span>
      </div>
      <div className="card-collection">
        <div className="heading-card">
          <h1>Explore Collections</h1>
        </div>
        <div className="cardContainer">
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
          <div className="card"></div>
        </div>
      </div>
      <div className="New-launch-box">
        <div className="heading-New-launch-box">
          <h1>New Launches</h1>
        </div>
        <div className="cardContainer-New-launch-box">
          <div className="card-New-launch-box">
            <div className="image-container"></div>
            <div className="watch-card-container">
              <div className="watch-container"></div>
              <div className="watch-container"></div>
            </div>
            <div className="information">
              <h2>Pabble Rio</h2>
              <div className="info-card-container">
                <div className="info-card">
                  <p id="pera">Premium Metal Build</p>
                </div>
                <div className="info-card">
                  <p id="pera">True HD Display</p>
                </div>
              </div>
            </div>
          </div>

          <div className="card-New-launch-box">
            <div className="image-container"></div>
            <div className="watch-card-container">
              <div className="watch-container"></div>
              <div className="watch-container"></div>
            </div>
          </div>

          <div className="card-New-launch-box">
            <div className="image-container"></div>
            <div className="down-section">
              <div className="watch-card-container">
                <div className="watch-container"></div>
                <div className="watch-container"></div>
              </div>
            </div>
          </div>

          <div className="card-New-launch-box">
            <div className="image-container"></div>
            <div className="watch-card-container">
              <div className="watch-container"></div>
              <div className="watch-container"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
