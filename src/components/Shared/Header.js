import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useUserData from "../../hooks/useUserData";
import Loading from "../Shared/Loading";

import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const location = useLocation();

  const [user, loading] = useAuthState(auth);

  const token = location?.state?.token || localStorage.getItem("accessToken");

  const email = user?.email;

  const [userData, isLoading] = useUserData({ email, token });

  const navigate = useNavigate();

  const logout = () => {
    signOut(auth);
    localStorage.removeItem("accessToken");
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

  if (loading || isLoading) {
    return <Loading></Loading>;
  }

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
          {token && userData?.name ? (
            <div className="avator dropdown">
              <label tabIndex={0}>
                <div className="avatar online placeholder">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                    <p className="text-xl">
                      {userData?.name && userData?.name.charAt(0)}
                    </p>
                  </div>
                </div>
                <p>{userData?.name && userData?.name}</p>
                <FontAwesomeIcon icon={faAngleDown} />
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu p-2 shadow-lg bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  {" "}
                  <button className="btn btn-ghost" onClick={logout}>
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">Login</Link>
          )}

          <label
            tabIndex="1"
            htmlFor="dashboard-sidebar"
            className="btn btn-ghost lg:hidden"
          >
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
        </div>
      </div>
    </>
  );
};

export default Header;
