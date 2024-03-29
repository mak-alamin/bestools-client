import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useUserRole from "../../hooks/useUserRole";

const Header = () => {
  const navigate = useNavigate();

  const [user] = useAuthState(auth);

  const [userRole] = useUserRole(user);

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userInfo");

    navigate("/login");
  };

  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/tools">Tools</Link>
      </li>
      <li>
        <Link to="/about">About Us</Link>
      </li>
      <li>
        <Link to="/blog">Blog</Link>
      </li>

      <li>
        <Link to="/my-portfolio">My Portfolio</Link>
      </li>
    </>
  );

  return (
    <>
      <div className="container navbar bg-base-100 border-b z-50">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            BESTools
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>

        <div className="navbar-end">
          {userInfo ? (
            <div className="avator dropdown">
              <label tabIndex={0}>
                <div className="avatar online placeholder">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                    <p className="text-xl">
                      {userInfo?.name && userInfo?.name.charAt(0)}
                      {userInfo?.displayName && userInfo?.displayName.charAt(0)}
                    </p>
                  </div>
                </div>
                <p className="md:block hidden">
                  {userInfo?.name && userInfo?.name}
                  {userInfo?.displayName && userInfo?.displayName}
                </p>
                <FontAwesomeIcon icon={faAngleDown} />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow-lg bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>

                <li className="lg:hidden">
                  <Link to="/dashboard/my-orders">My Orders</Link>
                </li>

                <li className="lg:hidden">
                  <Link to="/dashboard/my-profile">My Profile</Link>
                </li>

                <li className="lg:hidden">
                  <Link to="/dashboard/my-reviews">Add Review</Link>
                </li>

                {userRole === "admin" && (
                  <>
                    <li className="lg:hidden">
                      <Link to="/dashboard/products">Manage Products</Link>
                    </li>
                    <li className="lg:hidden">
                      <Link to="/dashboard/manage-orders">Manage Orders</Link>
                    </li>
                    <li className="lg:hidden">
                      <Link to="/dashboard/users">All Users</Link>
                    </li>
                  </>
                )}

                <li>
                  {" "}
                  <button className="btn btn-ghost" onClick={logout}>
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            ""
          )}

          {!user && !userInfo && (
            <Link to="/login" className="btn btn-info btn-sm">
              Login
            </Link>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
