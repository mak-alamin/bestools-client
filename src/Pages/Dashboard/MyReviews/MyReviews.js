import React from "react";

const MyReviews = () => {
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
        </div>
      </div>
    </div>
  );
};

export default MyReviews;
