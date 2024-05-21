import React, { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import "./Carousel.scss"
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "../images/SliderImage1.jpeg"
import img2 from "../images/SliderImage2.jpeg"
import img3 from "../images/SliderImage3.jpeg"
import img4 from "../images/SliderImage4.jpeg"
import img5 from "../images/SliderImage5.jpeg"
import imgbg1 from "../images/SliderImagebg1.jpeg"
const viewPortWidth = window.innerWidth;
const imgs = viewPortWidth >= 520 ? 
  [
    "https://img.freepik.com/free-vector/dark-style-realistic-smart-watch-horizontal-banner-with-advertising-site-vector-illustration_1284-30193.jpg?t=st=1716268785~exp=1716272385~hmac=59eb9330d3a7f3ba471fbfc5e99d7c2f1b75ecfd2ada0fd5d95fe617f6488422&w=2000",
    "https://img.freepik.com/free-photo/rendering-smart-home-device_23-2151039302.jpg?t=st=1716270114~exp=1716273714~hmac=71ed42d48d47ffc3386039b073db9d7657c71d68f84c151dc42e228168fb9780&w=2000",
    "https://img.freepik.com/free-photo/rendering-smart-home-device_23-2151039304.jpg?t=st=1716272506~exp=1716276106~hmac=2a0130073d49e843ca2f6f1380906bd523bf171353fd5f43f0b482674026eaaa&w=2000",
    "https://img.freepik.com/premium-photo/technology-panoramic-banner-collage_23-2151252958.jpg?w=1800",
    "https://fdn.gsmarena.com/imgroot/news/21/06/huawei-watch-3-announced/-728x314/gsmarena_000.jpg",
    imgbg1,
    "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  ] :
  [
    img1,
    img3,
    "https://img.freepik.com/free-photo/rendering-smart-home-device_23-2151039302.jpg?t=st=1716270114~exp=1716273714~hmac=71ed42d48d47ffc3386039b073db9d7657c71d68f84c151dc42e228168fb9780&w=2000",
    "https://img.freepik.com/free-photo/rendering-smart-home-device_23-2151039304.jpg?t=st=1716272506~exp=1716276106~hmac=2a0130073d49e843ca2f6f1380906bd523bf171353fd5f43f0b482674026eaaa&w=2000",
    img2,
    img4,
    img5,
  ];


const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 4;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

 const Sideshow = () => {
  const [imgIndex, setImgIndex] = useState(0);
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 1000,
    });
  }, []);
  const dragX = useMotionValue(0);

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imgs.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imgs.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };

  return (
    <div  className="relative overflow-hidden  py-8">
      <motion.div
        drag="x"
        dragConstraints={{
          left: 0,
          right: 0,
        }}
        style={{
          x: dragX,
        }}
        animate={{
          translateX: `-${imgIndex * 100}%`,
        }}
        transition={SPRING_OPTIONS}
        onDragEnd={onDragEnd}
        className=" flex cursor-grab items-center active:cursor-grabbing"
      >
        <Images imgIndex={imgIndex} />
      </motion.div>

      <Dots imgIndex={imgIndex} setImgIndex={setImgIndex} />
      <GradientEdges />
    </div>
  );
};

const Images = ({ imgIndex }) => {
  return (
    <>
      {imgs.map((imgSrc, idx) => {
        return (
          <motion.div
            data-aos="zoom-out"
            key={idx}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            animate={{
              scale: imgIndex === idx ? 0.95 : 0.85,
            }}
            transition={SPRING_OPTIONS}
            className="Slider-width aspect-video w-screen shrink-0 rounded-xl bg-neutral-800 object-cover"
          />
        );
      })}
    </>
  );
};

const Dots = ({ imgIndex, setImgIndex }) => {
  return (
    <div className="-mt-12 absolute flex w-full justify-center gap-2">
      {imgs.map((_, idx) => {
        return (
          <button
            key={idx}
            onClick={() => setImgIndex(idx)}
            className={`h-2.5 w-2.5 rounded-full transition-colors ${
              idx === imgIndex ? "bg-white" : "bg-white-custom"
            }`}
          />
        );
      })}
    </div>
  );
};

const GradientEdges = () => {
  return (
    <>
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 w-[10vw] max-w-[100px] " />
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 w-[10vw] max-w-[100px] " />
    </>
  );
};

export default Sideshow;