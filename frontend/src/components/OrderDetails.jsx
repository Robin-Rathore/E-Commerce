import React, { useRef, useState } from 'react'
import Header from './Header'
import TopSlider from './TopSlider'
import Footer from './Footer'
import "./BulkOrderPage.scss";
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';

const OrderDetails = () => {
    const params = useParams();
  const id = params.id;
  console.log("Id : ", id);
  const formRef = useRef();
  const [done, setDone] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_nl4f4rj",
        "template_aqaysbg",
        formRef.current,
        "KZxXoNcMQKQANc1w7"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    toast.success("Ordered Sucessfully, we are directing to the itmes");
  };

  const isMobile = window.innerWidth <= 480;
  return (
    <>
      <div className="top_header">
    <Header/>
    </div>
    <div className="bulk_section_inner">
      <div class="header_wrapper">
        <div class="heading">
          <p>Address Details</p>
        </div>
      </div>
      <div className="formstate" style={{ boxSizing: "border-box" }}>
        <form
        //   onSubmit={handleSubmit}
          method="post"
          action="/contact#ContactForm-template--15263579570219__bulk_order"
          id="ContactForm-template--15263579570219__bulk_order"
          accept-charset="UTF-8"
          className="contact-form"
        >
          <input type="hidden" name="form_type" value="contact" />
          <input type="hidden" name="utf8" value="✓" />
          <div className="contact__fields">
            <input
              id="ContactForm-template--15263579570219__bulk_order-fname"
              className="field__input"
              type="hidden"
              name="contact[Form Type]"
              value="Bulk Query"
            />
            <div className="field">
              <label
                for="ContactForm-template--15263579570219__bulk_order-name"
                className="label1"
              >
                Full Name<span>*</span>
              </label>
              <input
                id="ContactForm-template--15263579570219__bulk_order-name"
                className="field__input required"
                autocomplete="name"
                type="text"
                name="contact[Full Name]"
                value=""
                placeholder="Type here"
                required="required"
              />
            </div>
            
          </div>
          <div className="form_fields_wrapper">
            <div className="field">
              <label
                for="ContactForm-template--15263579570219__bulk_order-phone"
                className="label1"
              >
                Phone Number<span>*</span>
              </label>
              <div className="wsphone_number">
                <span className="label1">+91</span>
                <input
                  id="ContactForm-template--15263579570219__bulk_order-phone"
                  type="tel"
                  className="field__input required"
                  autocomplete="tel"
                  name="contact[Phone number]"
                  pattern="[0-9]{10}"
                  value=""
                  placeholder="Type here"
                  required="required"
                />
              </div>
            </div>
            <div className="field">
              <label
                for="ContactForm-template--15263579570219__bulk_order-pincode"
                className="label1"
              >
                Pin Code<span>*</span>
              </label>
              <input
                id="ContactForm-template--15263579570219__bulk_order-pincode"
                type="tel"
                className="field__input required"
                maxlength="6"
                name="contact[pincode]"
                placeholder="Type here"
                required="required"
              />
            </div>
            
            
            
            <div className="field">
              <label
                for="ContactForm-template--15263579570219__bulk_order-tentativetimeline"
                className="label1"
              >
                Street, house No. city, State<span>*</span>
              </label>
              <input
                id="ContactForm-template--15263579570219__bulk_order-tentativetimeline"
                className="field__input"
                type="text"
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
              Pay Now
            </button>
            <button
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
      <Footer/>
    </>
  )
}

export default OrderDetails
