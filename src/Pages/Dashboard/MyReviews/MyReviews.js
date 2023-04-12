import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import Loading from "../../../components/Shared/Loading";
import auth from "../../../firebase.init";

const MyReviews = () => {
  const [user, loading] = useAuthState(auth);

  console.log(user);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [defaultCheck, setDefaultCheck] = useState(true);

  const [submitLoader, setSubmitLoader] = useState(false);

  const handleRatingClick = (e) => {
    setDefaultCheck(false);
  };

  const handleAddReview = (data) => {
    let reviewData = {
      ...data,
      userName: user?.displayName,
      userEmail: user?.email,
    };

    setSubmitLoader(true);

    fetch(`http://localhost:8000/review`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(reviewData),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.acknowledged) {
          toast.success("Review added successfully");
          reset();
          setSubmitLoader(false);
        }
      });
  };

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div className="container pt-1">
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content p-5">
          <h2 className="text-2xl font-bold text-purple-500">Add Review</h2>

          <form onSubmit={handleSubmit(handleAddReview)}>
            <div className="form-control w-full max-w-xs my-3">
              <label className="label" htmlFor="review_title">
                <span className="label-text">Review Title</span>
              </label>
              <input
                type="text"
                defaultValue=""
                {...register("title")}
                id="review_title"
                className="input input-bordered w-full max-w-xs"
                required
              />{" "}
              {errors.title && (
                <p className="text-red-500">{errors.title.message}</p>
              )}
            </div>

            <div className="form-control w-full max-w-xs mb-3">
              <label className="label" htmlFor="review_desc">
                {" "}
                <span className="label-text">Your Comment: </span>
              </label>
              <textarea
                {...register("description")}
                id="review_desc"
                className="textarea textarea-bordered"
                placeholder="Write your comment here..."
              ></textarea>
            </div>

            <div className="form-control w-full max-w-xs my-6">
              <div className="rating">
                <p className="mr-3">Rating: </p>
                <input
                  type="radio"
                  defaultValue="1"
                  {...register("rating")}
                  className="mask mask-star-2 bg-green-500"
                  onClick={handleRatingClick}
                />
                <input
                  type="radio"
                  defaultValue="2"
                  {...register("rating")}
                  className="mask mask-star-2 bg-green-500"
                  onClick={handleRatingClick}
                />
                <input
                  type="radio"
                  defaultValue="3"
                  {...register("rating")}
                  className="mask mask-star-2 bg-green-500"
                  onClick={handleRatingClick}
                />
                <input
                  type="radio"
                  defaultValue="4"
                  {...register("rating")}
                  className="mask mask-star-2 bg-green-500"
                  onClick={handleRatingClick}
                />
                <input
                  type="radio"
                  defaultValue="5"
                  {...register("rating")}
                  className="mask mask-star-2 bg-green-500"
                  onClick={handleRatingClick}
                  checked={defaultCheck}
                />
              </div>
            </div>

            <div className="w-full max-w-xs my-6">
              <input
                className="btn btn-accent max-w-xs mr-4"
                value="Add Review"
                type="submit"
              />
            </div>

            {submitLoader && <Loading></Loading>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
