import React, { useEffect, useState } from "react";
import { Select } from "antd";
import { useNavigate } from "react-router-dom";
import "../../styles/addProduct.css";
import axios from "axios";
const { Option } = Select;
const Add = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);
  const [discount, setDiscount] = useState(null);
  const [category, setCategory] = useState(null);
  const [stock, setStock] = useState(null);
  const [color, setColor] = useState("");
  const [model, setModel] = useState("");
  const [screenSize, setScreemSize] = useState("");
  const [type, setType] = useState("");
  const [displayType, setDisplayType] = useState("");
  const [charging, setCharging] = useState("");
  const [battery, setBattery] = useState("");
  const [bluetoothVersion, setBluetoothVersion] = useState("");
  const [voiceAssistance, setVoiceAssistance] = useState("");
  const navigate = useNavigate();
  const categories = ["Watch", "Speakers", "Headphones", "Accessories"];
  const [images, setImages] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [products,setProducts]=useState([])

    const fetchProducts = async () => {
        try {
            const {data} = await axios.get('https://ej-backend.onrender.com/api/v1/product/getProducts');
            console.log(data)
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(()=>{
      fetchProducts();
    },[])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("discount", discount);
    formData.append("description", description);
    formData.append("color", color);
    formData.append("bluetoothVersion", bluetoothVersion);
    formData.append("type", type);
    formData.append("category", category);
    formData.append("stock", stock);
    formData.append("model", model);
    formData.append("screenSize", screenSize);
    formData.append("charging", charging);
    formData.append("battery", battery);
    formData.append("displayType", displayType);
    for (let i = 0; i < images.length; i++) {
      formData.append("images", images[i]);
    }

    try {
      //   console.log(
      // name,
      // description,
      // color,
      // type,
      // bluetoothVersion,
      // category,
      // discount,
      // price,
      // stock,
      // model,
      // screenSize,
      // charging,
      // battery,
      // displayType,
      //     formData
      //   );
      const { data } = await axios.post(
        "https://ej-backend.onrender.com/api/v1/product/create",
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
      <h1>Create A Product</h1>
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
                  Create Product
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Add;
