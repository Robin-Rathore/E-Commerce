import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm from "./CheckoutForm";
import "../styles/stripe.css"
import axios from  'axios'
// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe(
  "pk_test_51BTUDGJAJfZb9HEBwDg86TN1KNprHjkfipXmEDMb0gSCassK5T3ZfxsAbcgKVmAIXF7oZ6ItlZZbXO6idTHE67IM007EwQ4uN3"
);

export default function StripeCheckout() {
  const [cart, setItem] = useState();
  const User = JSON.parse(localStorage?.getItem("user"));
  const [price,setPrice] = useState()

  const getCart = async () => {
    try {
      const { data } = await axios.get(
        `https://ej-backend.onrender.com/api/v1/user/getCart/${User._id}`
      );
      setItem(data?.cart?.cart);
    } catch (error) {
      console.log(error);
    }
  };
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
  useEffect(()=>{
    totalPrice()
  },[])
  useEffect(() => {
    getCart();
  }, [User?._id]);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("https://ej-backend.onrender.com/api/v1/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items:price }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);
  const appearance = {
    theme: "stripe",
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="stripe">
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  );
}
