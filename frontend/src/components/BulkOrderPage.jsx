import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";
import "./BulkOrderPage.scss";
import Header from "./Header";
import Footer from "./Footer";
const BulkOrderPage = () => {
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
          <p>Bulk Order</p>
        </div>
      </div>
      <div className="formstate" style={{ boxSizing: "border-box" }}>
        <form
          onSubmit={handleSubmit}
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
            <div className="field field--with-error">
              <label
                for="ContactForm-template--15263579570219__bulk_order-email"
                className="label1"
              >
                Email<span>*</span>
              </label>
              <input
                id="ContactForm-template--15263579570219__bulk_order-email"
                autocomplete="email"
                type="email"
                className="field__input required"
                name="contact[email]"
                spellcheck="false"
                autocapitalize="none"
                value=""
                aria-required="true"
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
                for="ContactForm-template--15263579570219__bulk_order-productname"
                className="label1"
              >
                Product Required<span>*</span>
              </label>
              <input
                id="ContactForm-template--15263579570219__bulk_order-productname"
                className="field__input"
                type="text"
                name="contact[Product Required]"
                placeholder="Type product name here"
                required="required"
              />
            </div>
            <div className="field">
              <label
                for="ContactForm-template--15263579570219__bulk_order-qtyrequired"
                className="label1"
              >
                Quantity Required<span>*</span>
              </label>
              <input
                id="ContactForm-template--15263579570219__bulk_order-qtyrequired"
                type="number"
                className="field__input required"
                min="5"
                max="999999"
                name="contact[Quantity Required]"
                placeholder="Type here"
                required="required"
              />
            </div>
            <div className="field">
              <label
                for="ContactForm-template--15263579570219__bulk_order-targetedprice"
                className="label1"
              >
                Procurement Target Price
              </label>
              <input
                id="ContactForm-template--15263579570219__bulk_order-targetedprice"
                className="field__input"
                type="text"
                name="contact[Targeted Price]"
                maxlength="100"
                placeholder="Type here"
              />
            </div>
            <div className="field">
              <label
                for="ContactForm-template--15263579570219__bulk_order-tentativetimeline"
                className="label1"
              >
                Tentative Timelines for Placing the Order
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
            <div
              style={{width:"100% ", fontWeight: "lighter" }}
              className="field full_width"
            >
              <label
                for="ContactForm-template--15263579570219__bulk_order-body"
                className="label1"
              >
                Requirement Reason<span>*</span>
              </label>
              <textarea
                id="ContactForm-template--15263579570219__bulk_order-body"
                rows="10"
                className="text-area field__input required"
                name="contact[Reason]"
                required="required"
                placeholder="Type here"
              ></textarea>
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
              SEND MESSAGE
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
              <span>RESET</span>
            </button>
          </div>
        </form>
      </div>
    </div>
      <Footer/>
    </>
  );
};

export default BulkOrderPage;
