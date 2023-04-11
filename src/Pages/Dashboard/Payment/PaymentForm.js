import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Loading from "../../../components/Shared/Loading";

const PaymentForm = ({ orderId, order }) => {
  const stripe = useStripe();
  const elements = useElements();

  const { price, quantity, userEmail, phone, address } = order;

  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const [processing, setProcessing] = useState(false);

  const [success, setSuccess] = useState("");

  const [transactionId, setTransactionId] = useState("");

  useEffect(() => {
    if (orderId) {
      fetch("http://localhost:8000/create-payment-intent", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify({ orderId: orderId }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.clientSecret) {
            setClientSecret(data.clientSecret);
          }
        });
    }
  }, [orderId]);

  // console.log(clientSecret);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    setSuccess("");
    setProcessing(true);

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    // console.log("[PaymentMethod]", paymentMethod);

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);
      setProcessing(false);
      return;
    }

    // Confirm card payment
    const { paymentIntent, intentError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: userEmail,
            phone: phone,
            address: address,
          },
        },
      }
    );

    if (intentError) {
      setCardError(intentError?.message);
      setProcessing(false);
      return;
    }

    if (paymentIntent?.id) {
      setCardError("");

      const paymentData = {
        paid: true,
        transactionId: paymentIntent.id,
      };

      const res = axios.patch(
        `http://localhost:8000/order/${orderId}`,
        paymentData,
        {
          headers: {
            "content-type": "application/json",
            authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );

      setProcessing(false);

      setSuccess(`Congrats! Your payment is completed for Order-${orderId}`);
      setTransactionId(paymentIntent.id);
    }
  };

  if (success) {
    return (
      <>
        <p className="text-green-500 pt-3">{success}</p>
        <p className="pt-3">
          Your Transaction Id:{" "}
          <span className="text-orange-500"> {transactionId} </span>
        </p>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-lg font-bold my-6">
        Pay <span className="text-info"> ${price * quantity} </span> for Order-
        {orderId && orderId.slice(-6)}
      </h3>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        type="submit"
        disabled={!stripe || !elements || !clientSecret || success}
        className="btn btn-info mt-5 px-10 text-white"
      >
        Pay
      </button>

      {cardError && <p className="text-error pt-3">{cardError}</p>}
      {processing && <Loading></Loading>}
    </form>
  );
};

export default PaymentForm;
