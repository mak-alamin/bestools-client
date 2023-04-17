import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const Checkout = ({
  productInfo,
  quantity,
  setThankYou,
  setThankYouContent,
}) => {
  const productId = productInfo?.id;
  const { price } = productInfo;

  const [user, loading] = useAuthState(auth);

  const email = user?.email;

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      try {
        const res = await fetch(`http://localhost:8000/user/${email}`, {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCheckoutSubmit = (formData) => {
    const order = {
      productId: productId,
      price: price,
      quantity: quantity,
      userEmail: email,
      ...formData,
    };

    fetch(`http://localhost:8000/order`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.acknowledged) {
          setThankYou(1);
          setThankYouContent(
            `Congrats! Your order has been placed. You can manage your orders here:`
          );
        }
      });
  };

  if (loading || isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="checkout-area md:w-1/2 md:mt-0 mt-5">
      <form onSubmit={handleSubmit(handleCheckoutSubmit)}>
        <h1 className="font-bold text-2xl text-center mb-2">Checkout</h1>
        <hr />

        <div className="form-control w-full mt-5">
          <p>
            <strong>Your Name:</strong> {data?.name}
          </p>
        </div>

        <div className="form-control w-full">
          <p>
            <strong>Your Email: </strong> {email}
          </p>
        </div>

        <div className="form-control w-full">
          <label htmlFor="address"> Your Address </label>
          <input
            type="text"
            defaultValue={data?.address}
            {...register("address")}
            id="address"
            className="input input-bordered w-full"
          />{" "}
          {errors.address && (
            <p className="text-red-500">{errors.address.message}</p>
          )}
        </div>

        <div className="form-control w-full">
          <label htmlFor="phone"> Your Phone </label>
          <input
            type="text"
            defaultValue={data?.phone}
            {...register("phone")}
            id="phone"
            className="input input-bordered w-full"
          />{" "}
          {errors.phone && (
            <p className="text-red-500">{errors.phone.message}</p>
          )}
        </div>

        <div className="form-control">
          <strong className="text-dark">
            {" "}
            Total Price:{" "}
            <span className="text-[#006c63]">${quantity * price}</span>{" "}
          </strong>
        </div>

        <input
          className="btn btn-accent w-full mt-4"
          value="Place Order"
          type="submit"
        />
      </form>
    </div>
  );
};

export default Checkout;
