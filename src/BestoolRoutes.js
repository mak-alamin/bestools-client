import React from 'react';
import auth from "./firebase.init";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Route, Routes } from "react-router-dom";
import useUserRole from "./hooks/useUserRole";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import MyProfile from "./Pages/Dashboard/MyProfile/MyProfile";
import MyReviews from "./Pages/Dashboard/MyReviews/MyReviews";
import Orders from "./Pages/Dashboard/Orders/Orders";
import Products from "./Pages/Dashboard/Products/Products";
import Users from "./Pages/Dashboard/Users/Users";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import RequireAuth from "./Pages/Login/RequireAuth";
import Notfound from "./Pages/Notfound";
import Portfolio from "./Pages/Portfolio/Portfolio";

const BestoolRoutes = () => {
  const[user] = useAuthState(auth);

  const [userRole] = useUserRole(user);

    return (
        <>
            <Routes>
          <Route path="/" element={<Home></Home>}></Route>

          <Route path="about" element={<About></About>}></Route>

          <Route path="my-portfolio" element={<Portfolio></Portfolio>}></Route>

          <Route
            path="dashboard"
            element={
              <RequireAuth>
                <Dashboard></Dashboard>
              </RequireAuth>
            }
          >
            <Route path="users" element={<Users userRole={userRole}></Users>} ></Route>

            <Route
              index
              path="my-profile"
              element={<MyProfile></MyProfile>}
            ></Route>

            <Route path="my-orders" element={<MyOrders></MyOrders>}></Route>

            <Route path="my-reviews" element={<MyReviews></MyReviews>}></Route>
          
            <Route path="products" element={ <Products userRole={userRole}></Products> }></Route>

            <Route path="manage-orders" element={ <Orders></Orders> }></Route>
          </Route>

          <Route path="home" element={<Home></Home>}></Route>
          <Route path="blog" element={<Blog></Blog>}></Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="register" element={<Register></Register>}></Route>

          <Route path="*" element={<Notfound></Notfound>}></Route>
        </Routes>
        </>
    );
};

export default BestoolRoutes;