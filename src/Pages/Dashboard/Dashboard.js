import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useUserRole from "../../hooks/useUserRole";
import LeftMenu from "./LeftMenu";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);

  const [userRole] = useUserRole(user);

  console.log(userRole);

  if (loading) {
    return <progress className="progress w-56"></progress>;
  }

  return (
    <div className="container pt-10">
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content p-5">
          <h2 className="text-2xl font-bold text-purple-500 pb-2">
            Your Dashboard
          </h2>
          <hr />
          <Outlet></Outlet>
        </div>

        <LeftMenu></LeftMenu>
      </div>
    </div>
  );
};

export default Dashboard;
