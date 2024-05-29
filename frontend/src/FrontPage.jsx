import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import TopSlider from './components/TopSlider'
import Footer from './components/Footer'
import Divider from "@mui/material/Divider";
import IconsSection from './components/IconsSection';
import AdvPage from './components/AdvPage';
import VideoPage from './components/videoPage';
import Slideshow from './components/Sideshow';
import Card from './components/Card';
import ProductCard from './components/ProductCard';
import axios from 'axios';
import { User } from 'lucide-react';
import ProductList from './components/ProductList';
import ScrollToTop from './components/ScrollComponent';
const FrontPage = () => {
    const [item,setItem] = useState()
    const user = JSON.parse(localStorage?.getItem("user"));
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
      useEffect(()=>{
getCart()
      },[user?._id])
  return (
    <>
     <ScrollToTop/>
      <Header/>
      <TopSlider/>
      <Slideshow/>
      <Card/>
      <ProductList/>
      {/* <Divider style={{marginTop:"20px"}}/> */}
      <IconsSection/>
      <AdvPage/>

      <hr style={{position:"relative", top:"80px"}} className="w-full border-t border-gray-300 my-2" />
      {/**Experience pebble */}
      <div className="experiencePebble pt-28 pb-28 pl-12 pr-12">
        <div style={{display:"flex", justifyContent:"flex-start", alignItems:"center"}} className="head text-[#002D46] font-semibold text-4xl mb-6 ">Experience EJ</div>

        <div className="images flex flex-wrap justify-between " style={{ fontSize: "15px", boxShadow:"none" }}>
          <div className="tag1 flex flex-col items-center w-1/10 sm:w-1/10 md:w-1/13 lg:w-1/9 p-1">
            <img style={{maxWidth:"70%", height:"auto"}} src="https://www.pebblecart.com/cdn/shop/files/A_decade_old.gif?v=1668739055&width=130" alt="" />
            <span className="text-center">10+ Years<br />legacy</span>
          </div>

          <div className="tag1 flex flex-col items-center w-1/10 sm:w-1/10 md:w-1/13 lg:w-1/9 p-0">
            <img style={{maxWidth:"70%", height:"auto"}} src="https://www.pebblecart.com/cdn/shop/files/Trusted_Product.gif?v=1668739055&width=130" alt="" />
            <span className="text-center">Trusted<br />Products</span>
          </div>

          <div className="tag1 flex flex-col items-center w-1/10 sm:w-1/10 md:w-1/13 lg:w-1/9 p-0">
            <img style={{maxWidth:"70%", height:"auto"}} src="https://www.pebblecart.com/cdn/shop/files/Replacement.gif?v=1668739055&width=130" alt="" />
            <span className="text-center">Hassle Free<br />Replacement</span>
          </div>

          <div className="tag1 flex flex-col items-center w-1/10 sm:w-1/10 md:w-1/13 lg:w-1/9 p-0">
            <img style={{maxWidth:"70%", height:"auto"}}src="https://www.pebblecart.com/cdn/shop/files/Warranty.gif?v=1668739055&width=130" alt="" />
            <span className="text-center">Assured<br />Warranty</span>
          </div>

          <div className="tag1 flex flex-col items-center w-1/10 sm:w-1/10 md:w-1/13 lg:w-1/9 p-0">
            <img style={{maxWidth:"70%", height:"auto"}} src="https://www.pebblecart.com/cdn/shop/files/Free_shipping.gif?v=1668739055&width=130" alt="" />
            <span className="text-center">Fast & Free<br />Delivery</span>
          </div>

          <div className="tag1 flex flex-col items-center w-1/10 sm:w-1/10 md:w-1/13 lg:w-1/9 p-0">
            <img style={{maxWidth:"70%", height:"auto"}} src="https://www.pebblecart.com/cdn/shop/files/Quick_SUpport.gif?v=1668739055&width=130" alt="" />
            <span className="text-center">Quick<br />Support</span>
          </div>
        </div>
      </div>


      <hr className="w-full border-t border-gray-300 my-2" />


      {/**Official Partners */ }

      <div className="experiencePebble pt-12 pb-12 pl-12 pr-12">
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}} className="head text-[#002D46] font-semibold text-4xl mb-6">Official Partners</div>

        <div  className="images flex flex-wrap justify-between p-3 " style={{ fontSize: "15px", boxShadow:"none" }}>
            <div className="tag1 flex flex-col items-center w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/5 p-2 sm:p-1">
                <div className="tag1 bg-[#FAFAFA] rounded-lg p-2">
                    <a href="">
                        <img src="https://www.pebblecart.com/cdn/shop/files/flipkar.png?v=1670224717&width=150" alt="" />
                    </a>
                </div>
            </div>

            <div className="tag1 flex flex-col items-center w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/5 p-2 sm:p-1">
                <div className="tag1 bg-[#FAFAFA] rounded-lg p-2">
                    <a href="">
                        <img src="https://www.pebblecart.com/cdn/shop/files/amazon.png?v=1670224717&width=150" alt="" />
                    </a>
                </div>
            </div>

            <div className="tag1 flex flex-col items-center w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/5 p-2 sm:p-1">
                <div className="tag1 bg-[#FAFAFA] rounded-lg p-2">
                    <a href="">
                        <img src="https://www.pebblecart.com/cdn/shop/files/myntra.png?v=1670224717&width=150" alt="" />
                    </a>
                </div>
            </div>

            <div className="tag1 flex flex-col items-center w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/5 p-2 sm:p-1">
                <div className="tag1 bg-[#FAFAFA] rounded-lg p-2">
                    <a href="">
                        <img src="https://www.pebblecart.com/cdn/shop/files/cred.png?v=1670224717&width=150" alt="" />
                    </a>
                </div>
            </div>

            <div className="tag1 flex flex-col items-center w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/5 p-2 sm:p-1">
                <div className="tag1 bg-[#FAFAFA] rounded-lg p-2">
                    <a href="">
                        <img src="https://www.pebblecart.com/cdn/shop/files/chroma_b51cf571-24a2-4fb6-9979-615b92c980ce.png?v=1670302692&width=150" alt="" />
                    </a>
                </div>
            </div>

            <div className="tag1 flex flex-col items-center w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/5 p-2 sm:p-1">
                <div className="tag1 bg-[#FAFAFA] rounded-lg p-2">
                    <a href="">
                        <img src="https://www.pebblecart.com/cdn/shop/files/ajio.png?v=1670224717&width=150" alt="" />
                    </a>
                </div>
            </div>

            <div className="tag1 flex flex-col items-center w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/5 p-2 sm:p-1">
                <div className="tag1 bg-[#FAFAFA] rounded-lg p-2">
                    <a href="">
                        <img src="https://www.pebblecart.com/cdn/shop/files/nykaa.png?v=1670224717&width=150" alt="" />
                    </a>
                </div>
            </div>

            <div className="tag1 flex flex-col items-center w-full sm:w-full md:w-1/2 lg:w-1/3 xl:w-1/5 p-2 sm:p-1">
                <div className="tag1 bg-[#FAFAFA] rounded-lg p-2">
                    <a href="">
                        <img src="https://www.pebblecart.com/cdn/shop/files/Untitled-1_copy.png?v=1670501575&width=150" alt="" />
                    </a>
                </div>
            </div>
        </div>
      </div>
      <hr className="w-full border-t border-gray-300 my-2" />
    

      <VideoPage/>
      <Footer/>
    </>
  )
}

export default FrontPage
