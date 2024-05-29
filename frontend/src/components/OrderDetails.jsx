import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import "./BulkOrderPage.scss";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Footer from "./Footer";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";

const OrderDetails = () => {
  const params = useParams();
  const id = params.id;
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const [fullName, setFullName] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [pinCode, setPinCode] = useState("");
  const [phone, setPhone] = useState("");
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();
  const [price, setPrice] = useState(0);

  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map(
        (order) =>
          (total +=
            (order.price - order.price * (order.discount / 100)) *
            parseInt(order.quantity))
      );
      setPrice(total);
    } catch (error) {
      console.log(error);
    }
  };

  const getCart = async () => {
    try {
      const { data } = await axios.get(
        `https://ej-backend.onrender.com/api/v1/user/getCart/${user._id}`
      );
      setCart(data?.cart?.cart);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCart();
  }, [user?._id]);

  useEffect(() => {
    totalPrice();
  }, [cart]);

  const handleOrder = async () => {
    try {
      const address = [fullName, state, city, pinCode];
      await axios.post(
        `https://ej-backend.onrender.com/api/v1/order/createOrder/${user?._id}`,
        { address, phone, cart }
      );
      resetCart();
      navigate("/user");
    } catch (error) {
      console.log(error);
    }
  };

  const resetCart = async () => {
    try {
      await axios.post(
        `https://ej-backend.onrender.com/api/v1/user/resetCart/${user._id}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_rzx0e9x",
        "template_n8tr94i",
        formRef.current,
        "HS_Of_pFKjhABRiDE"
      )
      .then(
        (result) => {
          console.log("Result:", result.text);
          setDone(true);
        },
        (error) => {
          console.log("Error:", error.text);
        }
      );
    toast.success("Ordered Successfully, we are directing to the items");
  };

  const isMobile = window.innerWidth <= 480;
  return (
    <>
      <div className="top_header">
        <Header />
      </div>
      <div className="bulk_section_inner">
        <div className="header_wrapper">
          <div className="heading">
            <p>Address Details</p>
          </div>
        </div>
        <div className="formstate" style={{ boxSizing: "border-box" }}>
          <form ref={formRef} noValidate onSubmit={handleSubmit} className="contact-form">
            <div className="contact__fields">
              <div className="field">
                <label htmlFor="bulk_order-name" className="label1">
                  Full Name<span>*</span>
                </label>
                <input
                  className="field__input required"
                  autoComplete="name"
                  type="text"
                  name="from_name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Type here"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="bulk_order-street" className="label1">
                 email <span>*</span>
                </label>
                <input
                  id="bulk_order-street"
                  className="field__input"
                  type="text"
                  name="email"
                  maxLength="100"
                  placeholder="Type here"
                />
              </div>
            </div>
            <div className="form_fields_wrapper">
              <div className="field">
                <label htmlFor="bulk_order-phone" className="label1">
                  Phone Number<span>*</span>
                </label>
                <div className="wsphone_number">
                  <span className="label1">+91</span>
                  <input
                    type="tel"
                    className="field__input required"
                    autoComplete="tel"
                    name="mobile"
                    pattern="[0-9]{10}"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Type here"
                    required
                  />
                </div>
              </div>
              <div className="field">
                <label htmlFor="bulk_order-pincode" className="label1">
                  Pin Code<span>*</span>
                </label>
                <input
                  type="tel"
                  className="field__input required"
                  maxLength="6"
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value)}
                  name="pin"
                  placeholder="Type here"
                  required
                />
              </div>
              <div className="field">
                <label htmlFor="bulk_order-city" className="label1">
                  City<span>*</span>
                </label>
                <input
                  className="field__input"
                  type="text"
                  name="city"
                  maxLength="100"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Type here"
                />
              </div>
              <div className="field">
                <label htmlFor="bulk_order-state" className="label1">
                  State<span>*</span>
                </label>
                <input
                  className="field__input"
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  name="state"
                  maxLength="100"
                  placeholder="Type here"
                />
              </div>
            </div>
            <div className="contact__button" style={{ display: "flex", justifyContent: "center" }}>
              <button
                onClick={handleOrder}
                className='button_cart1 relative z-0 flex items-center gap-2 overflow-hidden rounded-lg border-[1px] px-4 py-2 font-semibold uppercase transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-SecondaryColor before:transition-transform before:duration-1000 before:content-[""] hover:scale-105 hover:text-PrimaryColor hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95'
              >
                <span>Cash On Delivery</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default OrderDetails;
