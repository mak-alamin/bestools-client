import React from "react";

const Review = ({ review }) => {
  const { userName, title, description, rating } = review;

  function createNumberArray(n) {
    return Array.from({ length: n }, (_, index) => index + 1);
  }

  const filledStars = createNumberArray(rating);
  const emptyStars = createNumberArray(5 - rating);

  return (
    <div className="card w-96 bg-base-100 shadow-lg">
      <div className="card-body items-center text-center">
        <div className="avatar">
          <div className="w-16 mask mask-hexagon">
            <img src="./images/avator-1.jpg" alt="" />
          </div>
        </div>
        <div className="rating">
          {filledStars.map((star, index) => (
            <span key={index} className="text-green-500">
              &#9733;
            </span>
          ))}
          {emptyStars.map((star, index) => (
            <span key={index} className="text-gray-400">
              &#9733;
            </span>
          ))}
          <span className="text-4xl ml-2">{rating}</span> /5
        </div>

        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <small>Reviewed By: {userName}</small>
      </div>
    </div>
  );
};

export default Review;
