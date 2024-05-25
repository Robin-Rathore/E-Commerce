import React, {useEffect, useState} from 'react'
import './ProductDetail.css';

import data from './data'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

const ProductDetail = () => {
  
  const [product,setProduct] = useState();
  const params = useParams();
  const id = params.id;
  const navigate = useNavigate()
  const getProduct = async () => {
    const {data} = await axios.get(
      `http://localhost:8080/api/v1/product/getProduct/${id}`
    );
    setProduct(data?.product)
  };
  useEffect(() => {
    getProduct();
  }, [id]);

  // const { 
  //   name,
  //   img1,
  //   img2,
  //   img3, 
  //   description ,
  //   category,
  //   price,
  //   oldprice,
  //   discount, 
  //   colour, 
  //   ModelNumber,
  //   GenericProductName ,
  //   ScreenSize,
  //   Type               ,
  //   DialShape          ,
  //   StrapMaterial      ,
  //   StrapSize          ,
  //   DisplayType        ,
  //   Charging           ,
  //   BatteryCapacity    ,
  //   BluetoothVersion   ,
  //   BatteryAverageLife ,
  //   WaterResistance    ,
  //   DialMaterial       ,
  //   Health             ,
  //   Notification       ,
  //   SportsMode         ,
  //   VoiceAssistance    ,
  //   CompatibleOS       ,
  //   WatchFaces         ,
  //   OtherFeatures      ,
  //   Dimension          ,
  //   Weight             ,
  //   OriginOfCountry    ,
  //   ImportedMarketedBy} = product;

  const [mainImg, setmainImg] = useState(product?.images[0]);
  const [fade, setfade] = useState(false);
  const [selectedPhoto,setSelectedPhoto] = useState()
  const handleImageClick = (newImg) => {
      setfade(true);
      setTimeout(() => {
        setmainImg(newImg);
        setfade(false);
      }, 400);
  };
  
  const user =JSON.parse(localStorage.getItem('user'))

  const handleSubmit = async()=>{
    const productData = new FormData();
    productData.append("name", product?.name);
    productData.append("description", product?.description);
    productData.append("price", product?.price);
    productData.append("quantity",1);
    productData.append("category", product?.category);
    productData.append("color", product?.color);
    productData.append("bluetoothVersion", product?.bluetoothVersion);
    productData.append("discount", product?.discount);
    productData.append("uid", product?._id);
    productData.append("screensize", product?.screensize);
    productData.append("model", product?.model);
    productData.append("displayType", product?.displayType);
    productData.append("charging", product?.charging);
    productData.append("battery", product?.battery);
    productData.append("stock", product?.stock);
    productData.append("image", product?.images[0]);
    try {
      const {data}= await axios.post(
        `http://localhost:8080/api/v1/user/addToCart/${user._id}`,
        productData
      );
      window.location.reload();
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    
    <>
    <Header/>
      <section className='pt-8 lg:py-16 lg:h-screen pl-4 pr-4 pb-[30px]' >
        <div className='container mx-auto flex flex-col lg:flex-row'>
          <div className="lg:w-1/2">
            <div className="productImage flex items-center justify-center lg:justify-start border-2 border-gray-100 rounded-lg  ${fade ? 'fade-out' : ''}`}">
              <img className= {`w-full max-w-full lg:max-w-[600px] rounded-lg ${fade ? 'fade-out' : ''}`} src={`http://localhost:8080/${selectedPhoto ? selectedPhoto :product?.images[0]}`} alt="Product"  />
            </div>            

            <div className="sub-images flex flex-wrap mt-4 justify-center">
              <img className="w-1/3 lg:w-auto lg:max-w-[130px] rounded-lg p-1 border-[1px] border-gray-100"
                  style={{cursor:"pointer"} }
                  src={`http://localhost:8080/${product?.images[0]}`}
                  alt="Product" 
                  onClick={()=>{handleImageClick(product?.images[0]);setSelectedPhoto(product?.images[0])}}
              />

              <img className="w-1/3 lg:w-auto lg:max-w-[130px] rounded-lg p-1 border-[1px] border-gray-100"
                  style={{cursor:"pointer"}}
                  src={`http://localhost:8080/${product?.images[1]}`}
                  alt="Product" 
                  onClick={()=>{handleImageClick(product?.images[1]);setSelectedPhoto(product?.images[1])}}
              />

              <img className="w-1/3 lg:w-auto lg:max-w-[130px] rounded-lg p-1 border-[1px] border-gray-100"
                  style={{cursor:"pointer"}}
                  src={`http://localhost:8080/${product?.images[2]}`}
                  alt="Product" 
                  onClick={()=>{handleImageClick(product?.images[2]);setSelectedPhoto(product?.images[2])}}
              />
            </div>
          </div>


          <div className="lg:w-1/2 mt-8 lg:mt-0 lg:ml-8">
            <div className="productName mb-2 font-bold text-[50px]   mb-2 max-w-[460px] mx-auto lg:mx-0 lg:my-0" style={{color:"#002D46"}}> {product?.name} </div>

            <div className="description mt-2 mb-4 text-[20px]" style={{color:"#919291"}} > {product?.description} </div>

            <div className="price flex ">              
              <div className="present-cost mr-2 font-bold" style={{fontSize:"32px", color:"#002D46"}}>&#8377;{product?.price-(product?.price * (product?.discount/100))}</div>

              <div className="oldPrice mr-2 my-auto flex" style={{color:"#919291"}}>
                <div className="mrp my-auto">M.R.P: </div>
                <div className="old my-auto" style={{textDecoration: "line-through"}}>&#8377;{product?.price}</div>
              </div>

              <div className="discount mr-2 my-auto font-bold" style={{color:"#FF6D5C"}}> {'('}{product?.discount}{')'} %</div>
            </div>

            <div className="alltax text-sm mb-5" style={{ marginTop: "-0.5rem",color:"#002D46" }}>Inclusive of all taxes</div>

            <div className="colour-detail flex text-[25px] mb-6">
              <div className="colour-type" style={{color:"#919291"}}>Colour - </div>
              <div className="colour ml-2" style={{color:"#FF6D5C"}}> { product?.color}</div>
            </div>

            {/**Cart and buy */}
            <div style={{display:"flex", flexDirection:"row", gap:"20px"}} className="cartAndBuy flex flex-col lg:flex-row mb-14">
            <button type='button' onClick={handleSubmit}
            
              className='button_cart1
              relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] 
              px-4 py-2 font-semibold
              uppercase transition-all duration-500
              
              before:absolute before:inset-0
              before:-z-10 before:translate-x-[150%]
              before:translate-y-[150%] before:scale-[2.5]
              before:rounded-[100%] before:bg-SecondaryColor
              before:transition-transform before:duration-1000
              before:content-[""]

              hover:scale-105 hover:text-PrimaryColor
              hover:before:translate-x-[0%]
              hover:before:translate-y-[0%]
              active:scale-95'
            >
              
              <span  >Add To Cart</span>
            </button>
              <button className='button_cart1 buyNow shining-btn flex-grow  text-white font-bold py-4 px-4 rounded-lg border' style={{backgroundColor:"#52B6AA"}} >Buy Now</button>
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
                  <span className="w-[65%] lg:w-[80%]">{product?.model}</span>
                </li>
                <li className="flex justify-between mb-2">
                  <strong className="w-[35%] lg:w-[20%] text-gray-500">Generic Product Name :</strong>
                  <span className="w-[65%] lg:w-[80%]">{product?.category}</span>                
                </li>
                <li className="flex justify-between mb-2">
                  <strong className="w-[35%] lg:w-[20%] text-gray-500">Screen Size :</strong>
                  <span className="w-[65%] lg:w-[80%]">{product?.screenSize}</span>
                </li>
                <li className="flex justify-between mb-2">
                  <strong className="w-[35%] lg:w-[20%] text-gray-500">Type :</strong>
                  <span className="w-[65%] lg:w-[80%]">{product?.type}</span>
                </li>
                
                <li className="flex justify-between mb-2">
                  <strong className="w-[35%] lg:w-[20%] text-gray-500">Display Type :</strong>
                  <span className="w-[65%] lg:w-[80%]">{product?.displayType}</span>
                </li>
                <li className="flex justify-between mb-2">
                  <strong className="w-[35%] lg:w-[20%] text-gray-500">Charging :</strong>
                  <span className="w-[65%] lg:w-[80%]">{product?.charging}</span>
                </li>
                <li className="flex justify-between mb-2">
                  <strong className="w-[35%] lg:w-[20%] text-gray-500">Battery Capacity :</strong>
                  <span className="w-[65%] lg:w-[80%]">{product?.battery}</span>
                </li>
                <li className="flex justify-between mb-2">
                  <strong className="w-[35%] lg:w-[20%] text-gray-500">Bluetooth Version :</strong>
                  <span className="w-[65%] lg:w-[80%]">{product?.bluetoothVersion}</span>
                </li>
                
                
                <li className="flex justify-between mb-2">
                  <strong className="w-[35%] lg:w-[20%] text-gray-500">Notification :</strong>
                  <span className="w-[65%] lg:w-[80%]">{Notification}</span>
                </li>
                
                <li className="flex justify-between mb-2">
                  <strong className="w-[35%] lg:w-[20%] text-gray-500">Voice Assistance :</strong>
                  <span className="w-[65%] lg:w-[80%]">{product?.voiceAssistance}</span>
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