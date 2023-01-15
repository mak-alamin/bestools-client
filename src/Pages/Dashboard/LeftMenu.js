import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import useUserRole from "../../hooks/useUserRole";

const LeftMenu = () => {
  const [user] = useAuthState(auth);

  const [userRole] = useUserRole(user);

  return (
    <div className="drawer-side">
      <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
      <ul className="menu p-4 overflow-y-auto w-48 text-base-content bg-slate-100">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/my-orders">My Orders</Link>
        </li>

        <li>
          <Link to="/my-profile">My Profile</Link>
        </li>

        <li>
          <Link to="/my-reviews">Add Review</Link>
        </li>

        {userRole === "admin" && (
          <>
            <li>
              <Link to="/manage-products">Manage Products</Link>
            </li>
            <li>
              <Link to="/manage-orders">Manage Orders</Link>
            </li>
            <li>
              <Link to="/users">All Users</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default LeftMenu;
