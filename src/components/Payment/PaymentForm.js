import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";

const PaymentForm = ({ order }) => {
  const stripe = useStripe();
  const elements = useElements();

  console.log(order);

  const orderId = order?.id ? order.id : "";

  const { userEmail, phone, address } = order;

  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const [success, setSuccess] = useState("");

  const [transactionId, setTransactionId] = "";

  useEffect(() => {
    fetch("http://localhost:8000/create-payment-intent", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify({ orderId }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.clientSecret) {
          setClientSecret(data.clientSecret);
        }
      });
  }, [orderId]);

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

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setCardError(error.message);

      return;
    }

    console.log("[PaymentMethod]", paymentMethod);

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
      return;
    }

    console.log(paymentIntent);

    if (paymentIntent?.id) {
      setCardError("");
      setSuccess("Congrats! Your payment is completed.");
      setTransactionId(paymentIntent.id);
    }
  };

  if (success) {
    return (
      <>
        <p className="text-green-500 pt-3">{success}</p>
        <p className="pt-3">Your Transaction Id: {transactionId}</p>
      </>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
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
        disabled={!stripe || !elements || !clientSecret}
        className="btn btn-info mt-5 px-10 text-white"
      >
        Pay
      </button>

      {cardError && <p className="text-error pt-3">{cardError}</p>}
    </form>
  );
};

export default PaymentForm;
