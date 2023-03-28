import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import LeftMenu from "./LeftMenu";

const Dashboard = () => {
  const location = useLocation();
  return (
    <div className="container pt-10">
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content p-5">
          {location.pathname === "/dashboard" && (
            <>
              <h2 className="text-2xl font-bold text-purple-500 pb-2">
                Your Dashboard
              </h2>
            </>
          )}

          <Outlet></Outlet>
        </div>

        <LeftMenu></LeftMenu>
      </div>
    </div>
  );
};

export default Dashboard;
