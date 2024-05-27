import React, { useEffect, useRef, useState } from "react";
import Header from "./Header";
import "./BulkOrderPage.scss";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import TopSlider from './TopSlider';
import Footer from './Footer';
import toast from 'react-hot-toast';
import emailjs from "@emailjs/browser"

const OrderDetails = () => {
  const params = useParams();
  const id = params.id;
  console.log("Id : ", id);
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"));
  const [fullAddress, setFullAddress] = useState();
  const [city, setCity] = useState();
  const [state, setState] = useState();
  const [pinCode, setPinCode] = useState();
  const [phone, setPhone] = useState();
  const [cart, setCart] = useState();
  const navigate = useNavigate();
  const [price,setPrice] = useState();

  const totalPrice = () => {
    try {
      let total = 0;
      cart?.map(
        (order) =>
          (total =
            total +
            (order.price - order.price * (order.discount / 100)) *
              parseInt(order.quantity))
      );
      setPrice(total);
    } catch (error) {
      console.log(error);
    }
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   emailjs
  //     .sendForm(
  //       "service_nl4f4rj",
  //       "template_aqaysbg",
  //       formRef.current,
  //       "KZxXoNcMQKQANc1w7"
  //     )
  //     .then(
  //       (result) => {
  //         console.log(result.text);
  //         setDone(true);
  //       },
  //       (error) => {
  //         console.log(error.text);
  //       }
  //     );
  //   toast.success("Ordered Sucessfully, we are directing to the itmes");
  // };

  const getCart = async () => {
    try {
      const { data } = await axios.get(
        `http://localhost:8080/api/v1/user/getCart/${user._id}`
      );
      setCart(data?.cart?.cart);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCart();
  }, [user?._id]);

  const handleOrder = async () => {
    try {
      const address = [fullAddress, state, city, pinCode];
      const { data } = await axios.post(
        `http://localhost:8080/api/v1/order/createOrder/${user?._id}`,
        { address, phone, cart }
      );
      resetCart();
      navigate("/user");
    } catch (error) {
      console.log(error);
    }
  };
  
  
  const handleStripe = async()=>{
    try {
      console.log("hello")
      const address = [fullAddress, state, city, pinCode];
      navigate("/stripeCheckout")
    } catch (error) {
      console.log(error)
    }
  }

  const resetCart = async () => {
    try {
      await axios.post(
        `http://localhost:8080/api/v1/user/resetCart/${user._id}`
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
useEffect(()=>{
  totalPrice()
},[])
  const isMobile = window.innerWidth <= 480;
  return (
    <>
      <div className="top_header">
        <Header />
      </div>
      <div className="bulk_section_inner">
        <div class="header_wrapper">
          <div class="heading">
            <p>Address Details</p>
          </div>
        </div>
        <div className="formstate" style={{ boxSizing: "border-box" }}>
          <form noValidate onSubmit={handleSubmit} className="contact-form">
            <div className="contact__fields">
              {/* <input
                // id="ContactForm-template--15263579570219__bulk_order-fname"
                className="field__input"
                type="hidden"
                name="contact[Form Type]"
                // value="Bulk Query"
              /> */}
              <div className="field">
                <label
                // for="ContactForm-template--15263579570219__bulk_order-name"
                // className="label1"
                >
                  Full Address<span>*</span>
                </label>
                <input
                  // id="ContactForm-template--15263579570219__bulk_order-name"
                  className="field__input required"
                  autocomplete="name"
                  type="text"
                  name="contact[Full Name]"
                  value={fullAddress}
                  onChange={(e) => setFullAddress(e.target.value)}
                  placeholder="Type here"
                  required="required"
                />
              </div>
              <div className="field">
                <label
                  htmlFor="ContactForm-template--15263579570219__bulk_order-tentativetimeline"
                  className="label1"
                >
                  Street, house No. city, State<span>*</span>
                </label>
                <input
                  id="ContactForm-template--15263579570219__bulk_order-tentativetimeline"
                  className="field__input"
                  type="text"
                  name="area"
                  maxLength="100"
                  placeholder="Type here"
                />
              </div>
            </div>
            <div className="form_fields_wrapper">
              <div className="field">
                <label
                  // for="ContactForm-template--15263579570219__bulk_order-phone"
                  className="label1"
                >
                  Phone Number<span>*</span>
                </label>
                <div className="wsphone_number">
                  <span className="label1">+91</span>
                  <input
                    // id="ContactForm-template--15263579570219__bulk_order-phone"
                    type="tel"
                    className="field__input required"
                    autocomplete="tel"
                    name="contact[Phone number]"
                    pattern="[0-9]{10}"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Type here"
                    required="required"
                  />
                </div>
              </div>
              <div className="field">
                <label
                  // for="ContactForm-template--15263579570219__bulk_order-pincode"
                  className="label1"
                >
                  Pin Code<span>*</span>
                </label>
                <input
                  // id="ContactForm-template--15263579570219__bulk_order-pincode"
                  type="tel"
                  className="field__input required"
                  maxlength="6"
                  value={pinCode}
                  onChange={(e) => setPinCode(e.target.value)}
                  name="contact[pincode]"
                  placeholder="Type here"
                  required="required"
                />
              </div>

              <div className="field">
                <label
                  // for="ContactForm-template--15263579570219__bulk_order-tentativetimeline"
                  className="label1"
                >
                  City<span>*</span>
                </label>
                <input
                  // id="ContactForm-template--15263579570219__bulk_order-tentativetimeline"
                  className="field__input"
                  type="text"
                  name="contact[Tentative Timeline]"
                  maxlength="100"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Type here"
                />
              </div>
              <div className="field">
                <label
                  // for="ContactForm-template--15263579570219__bulk_order-tentativetimeline"
                  className="label1"
                >
                  State<span>*</span>
                </label>
                <input
                  // id="ContactForm-template--15263579570219__bulk_order-tentativetimeline"
                  className="field__input"
                  type="text"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                  name="contact[Tentative Timeline]"
                  maxlength="100"
                  placeholder="Type here"
                />
              </div>
            </div>
            <div className="contact__button">
              {/* <button type="submit" className="button">
        Send message */}
              {/* </button> */}
              <button
                onClick={handleOrder}
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
