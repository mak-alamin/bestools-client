import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import useUserRole from "../../hooks/useUserRole";

const LeftMenu = () => {
  const [user] = useAuthState(auth);

  const [userRole] = useUserRole(user);

  return (
      <ul className="menu lg:block hidden p-4 overflow-y-auto w-48 bg-slate-200">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>

        <li>
          <Link to="/dashboard/my-orders">My Orders</Link>
        </li>

        <li>
          <Link to="/dashboard/my-profile">My Profile</Link>
        </li>

        <li>
          <Link to="/dashboard/my-reviews">Add Review</Link>
        </li>

        {userRole === "admin" && (
          <>
            <li>
              <Link to="/dashboard/products">Manage Products</Link>
            </li>
            <li>
              <Link to="/dashboard/manage-orders">Manage Orders</Link>
            </li>
            <li>
              <Link to="/dashboard/users">All Users</Link>
            </li>
          </>
        )}
      </ul>
  );
};

export default LeftMenu;
