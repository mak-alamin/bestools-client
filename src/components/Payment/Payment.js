import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = ({ payingOrder }) => {
  if (!payingOrder) {
    return "";
  }

  const { _id, price, quantity } = payingOrder;

  return (
    <div>
      <h1 className="text-2xl mb-2 font-bold">Payment</h1>
      <hr />

      <h3 className="text-lg font-bold my-6">
        Pay <span className="text-info"> ${price * quantity} </span> for Order-
        {_id.slice(-6)}
      </h3>
      <Elements stripe={stripePromise}>
        <PaymentForm order={payingOrder}></PaymentForm>
      </Elements>
    </div>
  );
};

export default Payment;
