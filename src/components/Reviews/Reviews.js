import React from "react";
import useReviews from "../../hooks/useReviews";
import Loading from "../Shared/Loading";
import Review from "./Review";

const Reviews = () => {
  const [reviews, isLoading, refetch] = useReviews();

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div className="container my-10 py-10">
      <h2 className="md:text-4xl text-2xl text-center font-bold md:mb-5 mb-1">Latest Reviews</h2>

      {reviews && reviews.length ? (
        <div className="flex flex-wrap gap-10 md:p-0 p-4">
          {reviews.slice(-6).map((review, index) => {
            return <Review key={review?._id} review={review} index={index}></Review>;
          })}
        </div>
      ) : (
        <p className="text-center">No Reviews Found</p>
      )}
    </div>
  );
};

export default Reviews;
