import React from "react";

const MyOrders = () => {
  return (
    <div className="container pt-1">
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content p-5">
          <h2 className="text-2xl font-bold text-purple-500">My Orders</h2>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
