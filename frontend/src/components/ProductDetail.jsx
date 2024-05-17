import React from 'react'

import data from './data'

const ProductDetail = () => {
  
  const product = data[0].products[0];
  
  const { id, name,description ,category,price,oldprice,discount, colour } = product;

  return (
    <>
      <section className='pt-8 pb-12 lg:py-16 lg:h-screen pl-4 pr-4'>
        <div className='container mx-auto flex flex-col lg:flex-row'>
          <div className="lg:w-1/2">
            <div className="productImage flex items-center justify-center lg:justify-start border-2 border-gray-100 rounded-lg">
              <img className="w-full max-w-full lg:max-w-[600px] rounded-lg" src="https://www.pebblecart.com/cdn/shop/files/1_8bda1d49-9e7e-4152-a7a0-2ea779ee7337.jpg?v=1700136573" alt="Product" />
            </div>            
          </div>
          <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-8">
            <div className="productName mb-2 font-bold text-[50px]   mb-2 max-w-[460px] mx-auto lg:mx-0 lg:my-0" style={{color:"#002D46"}}>{name}</div>

            <div className="description mt-2 mb-4 text-[20px]" style={{color:"#919291"}}>{description}</div>

            <div className="price flex ">              
              <div className="present-cost mr-2 font-bold" style={{fontSize:"42px", color:"#002D46"}}>&#8377;{price}</div>

              <div className="oldPrice mr-2 my-auto flex" style={{color:"#919291"}}>
                <div className="mrp my-auto">M.R.P: </div>
                <div className="old my-auto" style={{textDecoration: "line-through"}}>&#8377;{oldprice}</div>
              </div>

              <div className="discount mr-2 my-auto font-bold" style={{color:"#FF6D5C"}}> {'('}{discount}{')'} </div>
            </div>

            <div className="alltax text-sm mb-5" style={{ marginTop: "-0.5rem",color:"#002D46" }}>Inclusive of all taxes</div>

            <div className="colour-detail flex text-[25px] mb-6">
              <div className="colour-type" style={{color:"#919291"}}>Colour - </div>
              <div className="colour ml-2" style={{color:"#FF6D5C"}}> { colour}</div>
            </div>

            {/**Cart and buy */}
            <div className="cartAndBuy flex flex-col lg:flex-row mb-14">
              <button className='addCart flex-grow lg:mr-2 lg:mb-0 mb-2 font-bold py-4 px-4 rounded-lg border border-[#52B6AA]' style={{color:"#52B6AA"}}>Add to Cart</button>
              <button className='buyNow flex-grow  text-white font-bold py-4 px-4 rounded-lg border' style={{backgroundColor:"#52B6AA"}} >Buy Now</button>
            </div>

            {/**Facilities */}
            <div className="facilities flex justify-between pl-10 pr-10" >
              <div className="freeShipping">
                <img src="https://www.pebblecart.com/cdn/shop/files/Free_shipping.gif?v=1668739055&width=80" alt="" />
              </div>

              <div className="guarante">
                <img src="https://www.pebblecart.com/cdn/shop/files/Warranty.gif?v=1668739055&width=80" alt="" />
              </div>

              <div className="secureCheckout">
                <img src="https://www.pebblecart.com/cdn/shop/files/Secure_Checkout.gif?v=1670310938&width=80" alt="" />
              </div>
            </div>

            {/**Facilities details */}
            <div className="sub-details font-m flex items-center justify-between pl-10 pr-10 w-full" style={{color:"#002D46"}}>
              <div className="free-shipping flex justify-center items-center">Free Shipping</div>
              <div className="guarantee justify-center items-center">1 Year replacement Guarantee</div>
              <div className="security">Secure checkout</div>
            </div>


            {/**Bulk order btn */}
            <button className="w-full py-6  rounded-3xl text-white font-semibold mb-2 mt-2 shining-btn border-[15xl] mt-5"  style={{background: "conic-gradient(from -24deg at 98.3% 0%, #8fc5be 82.800002deg, #6db4aa 133.89502deg, #fff 359.9063801765442deg)"}}>
              <p className='bulk text-[30px] text-black'>Bulk Order Query</p>
              <p className='corporate text-[15px] text-black'>Corporate Orders</p>
            </button>

          </div>
        </div>

       


      </section>


    </>
  )
}

export default ProductDetail
