import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import '../styles/addProduct.css'
import axios from "axios";
const { Option } = Select;
const UpdateProduct = () => {
    const [product,setProduct]=useState([])
    const [name, setName] = useState(product?.name);
    const [description, setDescription] = useState(product?.description);
    const [price, setPrice] = useState(product?.price);
    const [discount, setDiscount] = useState(product?.discount);
    const [category, setCategory] = useState(product?.category);
    const [stock, setStock] = useState(product?.stock);
    const [color, setColor] = useState(product?.color);
    const [model, setModel] = useState(product?.model);
    const [screenSize, setScreemSize] = useState(product?.screenSize);
    const [type, setType] = useState(product?.type);
    const [displayType, setDisplayType] = useState(product?.displayType);
    const [charging, setCharging] = useState(product?.charging);
    const [battery, setBattery] = useState(product?.battery);
    const [bluetoothVersion, setBluetoothVersion] = useState(product?.bluetoothVersion);
    const params = useParams()
    const [voiceAssistance, setVoiceAssistance] = useState(product?.voiceAssistance);
    const navigate = useNavigate();
    const categories = ["Watch", "Speakers", "Headphones", "Accessories"];
    const [images, setImages] = useState([]);
    const [imagePreviews, setImagePreviews] = useState([]);
    const [backendImages,setBackendImages] = useState([])
    
    const getProduct = async()=>{
        try {
            const {data} = await axios.get(`https://ej-backend.onrender.com/api/v1/product/getProduct/${params.id}`)
            setProduct(data?.product)
            setName(data?.product?.name)
            setDescription(data?.product?.description)
            setPrice(data?.product?.price)
            setDiscount(data?.product?.discount)
            setCategory(data?.product?.category)
            setColor(data?.product?.color)
            setStock(data?.product?.stock)
            setModel(data?.product?.model)
            setScreemSize(data?.product?.screenSize)
            setType(data?.product?.type)
            setDisplayType(data?.product?.displayType)
            setCharging(data?.product?.charging)
            setBattery(data?.product?.battery)
            setBluetoothVersion(data?.product?.bluetoothVersion)
            setVoiceAssistance(data?.product?.voiceAssistance)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        getProduct()
    },[params.id])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("name", name);
        formData.append("price", price);
        formData.append("discount", discount);
        formData.append("description", description);
        formData.append("color", color);
        formData.append("bluetoothVersion",bluetoothVersion);
        formData.append("type", type);
        formData.append("category",category);
        formData.append("stock", stock);
        formData.append("model", model);
        formData.append("screenSize", screenSize);
        formData.append("charging", charging);
        formData.append("battery", battery);
        formData.append("displayType", displayType);
        for (let i = 0; i < 3; i++) {
          formData.append("images", images[i]);
        }
        
    
        try {
          const { data } = await axios.put(
            `https://ej-backend.onrender.com/api/v1/product/update/${product._id}`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            }
          );
    
          console.log(data)
          if (data.success) {
            navigate("/admin");
          }
        } catch (error) {
          console.log(error);
        }
      };
    
      
  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setImages((prevImages) => [...prevImages, ...files]);
    setImagePreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
  };
  return (
    <>
    <div className="title flex justify-content-center p-8">
      <h1>Update Product</h1>
      </div>
      <div className="form">
        <div className="card">
          <form noValidate onSubmit={handleSubmit}>
            <div className="">
              <Select
                variant={false}
                placeholder="Select Category"
                size="large"
                showSearch
                value={category}
                className="form-select mb-3"
                onChange={(value) => {
                  setCategory(value);
                }}
              >
                {categories?.map((c) => (
                  <Option value={c} key={c}>
                    {c}
                  </Option>
                ))}
              </Select>
              <div className="mb-3">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Your Name"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <textarea
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter  description"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="Enter  price"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                  placeholder="Enter  Discount"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={stock}
                  onChange={(e) => setStock(e.target.value)}
                  placeholder="Enter  Stock"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={color}
                  onChange={(e) => setColor(e.target.value)}
                  placeholder="Enter Color"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  placeholder="Enter model"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={screenSize}
                  onChange={(e) => setScreemSize(e.target.value)}
                  placeholder="Enter screenSize"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  placeholder="Enter type"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={displayType}
                  onChange={(e) => setDisplayType(e.target.value)}
                  placeholder="Enter displayType"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={charging}
                  onChange={(e) => setCharging(e.target.value)}
                  placeholder="Enter charging"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={battery}
                  onChange={(e) => setBattery(e.target.value)}
                  placeholder="Enter battery"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={bluetoothVersion}
                  onChange={(e) => setBluetoothVersion(e.target.value)}
                  placeholder="Enter bluetoothVersion"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  value={voiceAssistance}
                  onChange={(e) => setVoiceAssistance(e.target.value)}
                  placeholder="Enter voiceAssistance"
                  className="form-control"
                />
              </div>
              <div className="mb-3">
                <input
                  type="file"
                  multiple
                  onChange={handleImageChange}
                  required
                />
              </div>
              <div>
                {imagePreviews.map((src, index) => (
                  <img
                    key={index}
                    src={src}
                    alt={`Preview ${index + 1}`}
                    style={{ width: "100px", height: "100px", margin: "10px" }}
                  />
                ))}
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-primary">
                  Update Product
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default UpdateProduct