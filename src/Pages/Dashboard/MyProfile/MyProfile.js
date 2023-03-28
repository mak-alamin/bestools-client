import React from "react";
import UpdateProfile from "./UpdateProfile";

const MyProfile = () => {
  return (
    <div className="container">
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content p-5">
          <h2 className="text-2xl font-bold text-purple-500 mb-2">My Profile</h2>

          <UpdateProfile></UpdateProfile>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
