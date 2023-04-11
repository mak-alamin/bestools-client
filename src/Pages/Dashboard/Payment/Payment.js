import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useParams } from "react-router-dom";
import Loading from "../../../components/Shared/Loading";
import useOrder from "../../../hooks/useOrder";
import PaymentForm from "./PaymentForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const Payment = () => {
  const { orderId } = useParams();

  const [order, isLoading, refetch] = useOrder(orderId);

  if (isLoading) {
    return <Loading></Loading>;
  }

  if (!order) {
    return (
      <div className="container pt-1 p-10 card bg-base-100 shadow-xl max-w-[600px]">
        <p>Order Not Found!</p>
      </div>
    );
  } else if (order?.error) {
    return (
      <div className="container pt-1 p-10 card bg-base-100 shadow-xl max-w-[600px]">
        <p className="text-error">{order.error}</p>
      </div>
    );
  } else if (order?.paid) {
    return (
      <div className="container pt-1 p-10 card bg-base-100 shadow-xl max-w-[600px]">
        <p className="text-success">This Order is already paid.</p>
      </div>
    );
  } else {
    return (
      <div className="container p-10 card bg-base-100 shadow-xl max-w-[600px]">
        <h1 className="text-2xl mb-2 font-bold">Payment</h1>
        <hr />
        <Elements stripe={stripePromise}>
          <PaymentForm orderId={orderId} order={order}></PaymentForm>
        </Elements>
      </div>
    );
  }
};

export default Payment;
