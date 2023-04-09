import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useLocation, useParams } from "react-router-dom";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const { id } = useParams();

  const location = useLocation();

  console.log(location);

  const order = location.state?.order;

  if (!order) {
    return (
      <div className="container pt-1">
        <p>Order Not Found!</p>
      </div>
    );
  } else {
    const { _id, price, quantity } = order;

    return (
      <div className="container p-10 card bg-base-100 shadow-xl">
        <h1 className="text-2xl mb-2 font-bold">Payment</h1>
        <hr />

        <h3 className="text-lg font-bold my-6">
          Pay <span className="text-info"> ${price * quantity} </span> for
          Order-
          {_id.slice(-6)}
        </h3>
        <Elements stripe={stripePromise}>
          <PaymentForm order={order}></PaymentForm>
        </Elements>
      </div>
    );
  }
};

export default Payment;
