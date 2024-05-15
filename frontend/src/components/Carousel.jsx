import React, { useState } from "react";
import "./Carousel.css"
const Carousel = () => {
const [slide, setSlide] = useState(0);
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
            className={idx === slide ? "indicator" : "indicator indicator-inactive"}
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
     <div className="image-container">

   </div>
     <div className="watch-card-container">
  <div className="watch-container">
    
  </div>
  <div className="watch-container">
    
  </div>
</div>
<div className="information">
  <h2>Pabble Rio</h2>
  <div className="info-card-container">
    <div className="info-card">
      <p id="pera" >Premium Metal Build</p>
    </div>
    <div className="info-card">
      <p id="pera" >True HD Display</p>
    </div>
   

  </div>
</div>
      </div>
      
      <div className="card-New-launch-box">
     <div className="image-container">

   </div>
     <div className="watch-card-container">
  <div className="watch-container">
    
  </div>
  <div className="watch-container">
    
    </div>
</div>
      </div>

      <div className="card-New-launch-box">
     <div className="image-container">

   </div>
     <div className="down-section">
     <div className="watch-card-container">
  <div className="watch-container">
    
  </div>
  <div className="watch-container">
    
    </div>
</div>
     </div>
      </div>

      <div className="card-New-launch-box">
     <div className="image-container">

   </div>
     <div className="watch-card-container">
  <div className="watch-container">
    
  </div>
  <div className="watch-container">
    
    </div>
</div>
      </div>
    </div>
  </div>
   </div>
  );
};

export default Carousel;