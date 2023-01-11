import React from "react";
import LeftMenu from "../LeftMenu";

const MyOrders = () => {
  return (
    <div className="container pt-16">
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content p-5">
          <h2 className="text-2xl font-bold text-purple-500">My Orders</h2>
        </div>

        <LeftMenu></LeftMenu>
      </div>
    </div>
  );
};

export default MyOrders;
