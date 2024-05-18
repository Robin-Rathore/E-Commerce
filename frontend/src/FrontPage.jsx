import React from 'react'
import Header from './components/Header'
import TopSlider from './components/TopSlider'
import Footer from './components/Footer'

const FrontPage = () => {
  return (
    <>
      <Header/>
      <TopSlider/>
      {/* <Carousel/> */}


      {/**Experience pebble */}
      <div className="experiencePebble p-12">
        <div className="head text-[#002D46] font-semibold text-5xl mb-6">Experience Pebble</div>

        <div className="images flex flex-wrap justify-between p-6 text-[#919291]" style={{ fontSize: "22px" }}>
          <div className="tag1 flex flex-col items-center w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/6 p-2">
            <img src="https://www.pebblecart.com/cdn/shop/files/A_decade_old.gif?v=1668739055&width=130" alt="" />
            <span className="text-center">10+ Years<br />legacy</span>
          </div>

          <div className="tag1 flex flex-col items-center w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/6 p-2">
            <img src="https://www.pebblecart.com/cdn/shop/files/Trusted_Product.gif?v=1668739055&width=130" alt="" />
            <span className="text-center">Trusted<br />Products</span>
          </div>

          <div className="tag1 flex flex-col items-center w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/6 p-2">
            <img src="https://www.pebblecart.com/cdn/shop/files/Replacement.gif?v=1668739055&width=130" alt="" />
            <span className="text-center">Hassle Free<br />Replacement</span>
          </div>

          <div className="tag1 flex flex-col items-center w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/6 p-2">
            <img src="https://www.pebblecart.com/cdn/shop/files/Warranty.gif?v=1668739055&width=130" alt="" />
            <span className="text-center">Assured<br />Warranty</span>
          </div>

          <div className="tag1 flex flex-col items-center w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/6 p-2">
            <img src="https://www.pebblecart.com/cdn/shop/files/Free_shipping.gif?v=1668739055&width=130" alt="" />
            <span className="text-center">Fast & Free<br />Delivery</span>
          </div>

          <div className="tag1 flex flex-col items-center w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/6 p-2">
            <img src="https://www.pebblecart.com/cdn/shop/files/Quick_SUpport.gif?v=1668739055&width=130" alt="" />
            <span className="text-center">Quick<br />Support</span>
          </div>
        </div>
      </div>


      <hr className="w-full border-t border-gray-300 my-2" />


      {/**Official Partners */ }

      <div className="experiencePebble p-12">
        <div className="head text-[#002D46] font-semibold text-5xl mb-6">Experience Pebble</div>

        <div className="images flex flex-wrap justify-between p-6 text-[#919291]" style={{ fontSize: "22px" }}>
            <div className="tag1 flex flex-col items-center w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/8 p-2">
                <div className="tag1 bg-[#FAFAFA] rounded-lg p-2">
                    <a href="">
                        <img src="https://www.pebblecart.com/cdn/shop/files/flipkar.png?v=1670224717&width=150" alt="" />
                    </a>
                </div>
            </div>

            <div className="tag1 flex flex-col items-center w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/8 p-2">
                <div className="tag1 bg-[#FAFAFA] rounded-lg p-2">
                    <a href="">
                        <img src="https://www.pebblecart.com/cdn/shop/files/amazon.png?v=1670224717&width=150" alt="" />
                    </a>
                </div>
            </div>

            <div className="tag1 flex flex-col items-center w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/8 p-2">
                <div className="tag1 bg-[#FAFAFA] rounded-lg p-2">
                    <a href="">
                        <img src="https://www.pebblecart.com/cdn/shop/files/myntra.png?v=1670224717&width=150" alt="" />
                    </a>
                </div>
            </div>

            <div className="tag1 flex flex-col items-center w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/8 p-2">
                <div className="tag1 bg-[#FAFAFA] rounded-lg p-2">
                    <a href="">
                        <img src="https://www.pebblecart.com/cdn/shop/files/cred.png?v=1670224717&width=150" alt="" />
                    </a>
                </div>
            </div>

            <div className="tag1 flex flex-col items-center w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/8 p-2">
                <div className="tag1 bg-[#FAFAFA] rounded-lg p-2">
                    <a href="">
                        <img src="https://www.pebblecart.com/cdn/shop/files/chroma_b51cf571-24a2-4fb6-9979-615b92c980ce.png?v=1670302692&width=150" alt="" />
                    </a>
                </div>
            </div>

            <div className="tag1 flex flex-col items-center w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/8 p-2">
                <div className="tag1 bg-[#FAFAFA] rounded-lg p-2">
                    <a href="">
                        <img src="https://www.pebblecart.com/cdn/shop/files/ajio.png?v=1670224717&width=150" alt="" />
                    </a>
                </div>
            </div>

            <div className="tag1 flex flex-col items-center w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/8 p-2">
                <div className="tag1 bg-[#FAFAFA] rounded-lg p-2">
                    <a href="">
                        <img src="https://www.pebblecart.com/cdn/shop/files/nykaa.png?v=1670224717&width=150" alt="" />
                    </a>
                </div>
            </div>

            <div className="tag1 flex flex-col items-center w-1/2 sm:w-1/2 md:w-1/4 lg:w-1/8 p-2">
                <div className="tag1 bg-[#FAFAFA] rounded-lg p-2">
                    <a href="">
                        <img src="https://www.pebblecart.com/cdn/shop/files/Untitled-1_copy.png?v=1670501575&width=150" alt="" />
                    </a>
                </div>
            </div>
        </div>
      </div>



      
      


      <Footer/>
    </>
  )
}

export default FrontPage
