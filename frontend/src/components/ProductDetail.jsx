import React, {useState} from 'react'
import './ProductDetail.css';

import data from './data'

const ProductDetail = () => {
  
  const product = data[0].products[0];
  
  const { id,
    name,
    img1,
    img2,
    img3, 
    description ,
    category,
    price,
    oldprice,
    discount, 
    colour, 
    ModelNumber,
    GenericProductName ,
    ScreenSize,
    Type               ,
    DialShape          ,
    StrapMaterial      ,
    StrapSize          ,
    DisplayType        ,
    Charging           ,
    BatteryCapacity    ,
    BluetoothVersion   ,
    BatteryAverageLife ,
    WaterResistance    ,
    DialMaterial       ,
    Health             ,
    Notification       ,
    SportsMode         ,
    VoiceAssistance    ,
    CompatibleOS       ,
    WatchFaces         ,
    OtherFeatures      ,
    Dimension          ,
    Weight             ,
    OriginOfCountry    ,
    ImportedMarketedBy} = product;

  const [mainImg, setmainImg] = useState(img1);
  const [fade, setfade] = useState(false);

  const handleImageClick = (newImg) => {
      setfade(true);
      setTimeout(() => {
        setmainImg(newImg);
        setfade(false);
      }, 400);
  };
  

  return (
    <>
      <section className='pt-8 lg:py-16 lg:h-screen pl-4 pr-4 pb-[30px]' >
        <div className='container mx-auto flex flex-col lg:flex-row'>
          <div className="lg:w-1/2">
            <div className="productImage flex items-center justify-center lg:justify-start border-2 border-gray-100 rounded-lg  ${fade ? 'fade-out' : ''}`}">
              <img className= {`w-full max-w-full lg:max-w-[600px] rounded-lg ${fade ? 'fade-out' : ''}`} src={mainImg} alt="Product"  />
            </div>            

            <div className="sub-images flex flex-wrap mt-4 justify-center">
              <img className="w-1/3 lg:w-auto lg:max-w-[130px] rounded-lg p-1 border-[1px] border-gray-100"
                  style={{cursor:"pointer"} }
                  src={img1}
                  alt="Product" 
                  onClick={()=>handleImageClick(img1)}
              />

              <img className="w-1/3 lg:w-auto lg:max-w-[130px] rounded-lg p-1 border-[1px] border-gray-100"
                  style={{cursor:"pointer"}}
                  src={img2}
                  alt="Product" 
                  onClick={()=>handleImageClick(img2)}
              />

              <img className="w-1/3 lg:w-auto lg:max-w-[130px] rounded-lg p-1 border-[1px] border-gray-100"
                  style={{cursor:"pointer"}}
                  src={img3}
                  alt="Product" 
                  onClick={()=>handleImageClick(img3)}
              />
            </div>
          </div>


          <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-8">
            <div className="productName mb-2 font-bold text-[50px]   mb-2 max-w-[460px] mx-auto lg:mx-0 lg:my-0" style={{color:"#002D46"}}> {name} </div>

            <div className="description mt-2 mb-4 text-[20px]" style={{color:"#919291"}} > {description} </div>

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
              <button className='buyNow shining-btn flex-grow  text-white font-bold py-4 px-4 rounded-lg border' style={{backgroundColor:"#52B6AA"}} >Buy Now</button>
            </div>

            {/**Facilities */}
            <div className="facilities flex justify-center items-center justify-between pl-10 pr-10" >
                <div className="tag1 justify-center items-center">
                  <img className='flex justify-center items-center' src="https://www.pebblecart.com/cdn/shop/files/Free_shipping.gif?v=1668739055&width=80" alt="" />
                  <span className='flex justify-center items-center' style={{textAlign:"center"}}>
                    Free Shipping
                  </span>
                </div>

                <div className="tag1 justify-center items-center">
                  <img className='flex justify-center items-center' src="https://www.pebblecart.com/cdn/shop/files/Warranty.gif?v=1668739055&width=80" alt="" />
                  <span className='flex justify-center items-center' style={{textAlign:"center"}}>
                    1 Year Warranty
                  </span>
                </div>

                <div className="tag1 justify-center items-center">
                  <img className='flex justify-center items-center' src="https://www.pebblecart.com/cdn/shop/files/Secure_Checkout.gif?v=1670310938&width=80" alt="" />
                  <span className='flex justify-center items-center' style={{textAlign:"center"}}>
                    Secure CheckOut
                  </span>
                </div>

                

              
            </div>

            


            {/**Bulk order btn */}
            <button className="w-full py-6  rounded-3xl text-white font-semibold mb-2 mt-2 shining-btn border-[15xl] mt-5"  style={{background: "conic-gradient(from -24deg at 98.3% 0%, #8fc5be 82.800002deg, #6db4aa 133.89502deg, #fff 359.9063801765442deg)"}}>
              <p className='bulk text-[30px] text-black'>Bulk Order Query</p>
              <p className='corporate text-[15px] text-black'>Corporate Orders</p>
            </button>


            

          </div>
        </div>  

        <div className="specifications px-4 pt-8 lg:pt-16 lg:px-8 pb-[20px]">
          <div className="heading text-[#002D46] text-3xl lg:text-5xl mb-5">
            Specifications
          </div>

          <div className="sub-heading text-[#00B9AA] text-1xl lg:text-1xl font-bold mb-5">
            PRODUCT INFORMATION
          </div>

          <div className="detail mt-4 pd-[20px]"> 
            <div className="main-box w-full bg-[#F0F3F4] p-[15px] rounded-[15px]">
              <ul>
                <li className="flex justify-between mb-2">
                  <strong className="w-[35%] lg:w-[20%] text-gray-500">Product Name:</strong>
                  <span className="w-[65%] lg:w-[80%]">{ModelNumber}</span>
                </li>
                <li className="flex justify-between mb-2">
                  <strong className="w-[35%] lg:w-[20%] text-gray-500">Generic Product Name :</strong>
                  <span className="w-[65%] lg:w-[80%]">{GenericProductName}</span>                
                </li>
                <li className="flex justify-between mb-2">
                  <strong className="w-[35%] lg:w-[20%] text-gray-500">Screen Size :</strong>
                  <span className="w-[65%] lg:w-[80%]">{ScreenSize}</span>
                </li>
                <li className="flex justify-between mb-2">
                  <strong className="w-[35%] lg:w-[20%] text-gray-500">Type :</strong>
                  <span className="w-[65%] lg:w-[80%]">{Type}</span>
                </li>
                <li className="flex justify-between mb-2">
                  <strong className="w-[35%] lg:w-[20%] text-gray-500">Dial Shape :</strong>
                  <span className="w-[65%] lg:w-[80%]">{DialShape}</span>
                </li>
                <li className="flex justify-between mb-2">
                  <strong className="w-[35%] lg:w-[20%] text-gray-500">Strap Material :</strong>
                  <span className="w-[65%] lg:w-[80%]">{StrapMaterial}</span>
                </li>
                <li className="flex justify-between mb-2">
                  <strong className="w-[35%] lg:w-[20%] text-gray-500">Strap Size :</strong>
                  <span className="w-[65%] lg:w-[80%]">{StrapSize}</span>
                </li>
                <li className="flex justify-between mb-2">
                  <strong className="w-[35%] lg:w-[20%] text-gray-500">Display Type :</strong>
                  <span className="w-[65%] lg:w-[80%]">{DisplayType}</span>
                </li>
                <li className="flex justify-between mb-2">
                  <strong className="w-[35%] lg:w-[20%] text-gray-500">Charging :</strong>
                  <span className="w-[65%] lg:w-[80%]">{Charging}</span>
                </li>
                <li className="flex justify-between mb-2">
                  <strong className="w-[35%] lg:w-[20%] text-gray-500">Battery Capacity :</strong>
                  <span className="w-[65%] lg:w-[80%]">{BatteryCapacity}</span>
                </li>
                <li className="flex justify-between mb-2">
                  <strong className="w-[35%] lg:w-[20%] text-gray-500">Bluetooth Version :</strong>
                  <span className="w-[65%] lg:w-[80%]">{BluetoothVersion}</span>
                </li>
                <li className="flex justify-between mb-2">
                  <strong className="w-[35%] lg:w-[20%] text-gray-500">Battery Average Life :</strong>
                  <span className="w-[65%] lg:w-[80%]">{BatteryAverageLife}</span>
                </li>
                <li className="flex justify-between mb-2">
                  <strong className="w-[35%] lg:w-[20%] text-gray-500">Water Resistance :</strong>
                  <span className="w-[65%] lg:w-[80%]">{WaterResistance}</span>
                </li>
                <li className="flex justify-between mb-2">
                  <strong className="w-[35%] lg:w-[20%] text-gray-500">Dial Material :</strong>
                  <span className="w-[65%] lg:w-[80%]">{DialMaterial}</span>
                </li>
                <li className="flex justify-between mb-2">
                  <strong className="w-[35%] lg:w-[20%] text-gray-500">Health :</strong>
                  <span className="w-[65%] lg:w-[80%]">{Health}</span>
                </li>
                <li className="flex justify-between mb-2">
                  <strong className="w-[35%] lg:w-[20%] text-gray-500">Notification :</strong>
                  <span className="w-[65%] lg:w-[80%]">{Notification}</span>
                </li>
                <li className="flex justify-between mb-2">
                  <strong className="w-[35%] lg:w-[20%] text-gray-500">Sports Mode :</strong>
                  <span className="w-[65%] lg:w-[80%]">{SportsMode}</span>
                </li>
                <li className="flex justify-between mb-2">
                  <strong className="w-[35%] lg:w-[20%] text-gray-500">Voice Assistance :</strong>
                  <span className="w-[65%] lg:w-[80%]">{VoiceAssistance}</span>
                </li>
                <li className="flex justify-between mb-2">
                  <strong className="w-[35%] lg:w-[20%] text-gray-500">Compatible OS :</strong>
                  <span className="w-[65%] lg:w-[80%]">{CompatibleOS}</span>
                </li>
                <li className="flex justify-between mb-2">
                  <strong className="w-[35%] lg:w-[20%] text-gray-500">Watch Faces :</strong>
                  <span className="w-[65%] lg:w-[80%]">{WatchFaces}</span>
                </li>
                <li className="flex justify-between mb-2">
                  <strong className="w-[35%] lg:w-[20%] text-gray-500">Other Features :</strong>
                  <span className="w-[65%] lg:w-[80%]">{OtherFeatures}</span>
                </li>
                <li className="flex justify-between mb-2">
                  <strong className="w-[35%] lg:w-[20%] text-gray-500">Dimension :</strong>
                  <span className="w-[65%] lg:w-[80%]">{Dimension}</span>
                </li>
                <li className="flex justify-between mb-2">
                  <strong className="w-[35%] lg:w-[20%] text-gray-500">Weight :</strong>
                  <span className="w-[65%] lg:w-[80%]">{Weight}</span>
                </li>
                <li className="flex justify-between mb-2">
                  <strong className="w-[35%] lg:w-[20%] text-gray-500">Origin Of Country :</strong>
                  <span className="w-[65%] lg:w-[80%]">{OriginOfCountry}</span>
                </li>
                <li className="flex justify-between mb-2">
                  <strong className="w-[35%] lg:w-[20%] text-gray-500">Imported &amp; Marketed By:</strong>
                  <span className="w-[65%] lg:w-[80%]">{ImportedMarketedBy}</span>
                </li>
              </ul>
            </div>           
          </div>

        </div>



      </section>
    </>    
  )
}

export default ProductDetail