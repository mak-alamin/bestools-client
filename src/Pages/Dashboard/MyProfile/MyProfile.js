import React from "react";
import { Outlet } from "react-router-dom";
import LeftMenu from "../LeftMenu";

const MyProfile = () => {
  return (
    <div className="container pt-16">
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content p-5">
          <h2 className="text-2xl font-bold text-purple-500">My Profile</h2>
          <Outlet></Outlet>
        </div>

        <LeftMenu></LeftMenu>
      </div>
    </div>
  );
};

export default MyProfile;
