import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyOrders from "./Pages/Dashboard/MyOrders/MyOrders";
import MyProfile from "./Pages/Dashboard/MyProfile/MyProfile";
import MyReviews from "./Pages/Dashboard/MyReviews/MyReviews";
import Orders from "./Pages/Dashboard/Orders/Orders";
import Payment from "./Pages/Dashboard/Payment/Payment";
import Products from "./Pages/Dashboard/Products/Products";
import Users from "./Pages/Dashboard/Users/Users";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import RequireAuth from "./Pages/Login/RequireAuth";
import Notfound from "./Pages/Notfound";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Purchase from "./Pages/Purchase/Purchase";
import Tools from "./Pages/Tools/Tools";

const BestoolRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="home" element={<Home></Home>}></Route>

      <Route path="tools" element={<Tools></Tools>}></Route>

      <Route path="about" element={<About></About>}></Route>
      <Route path="my-portfolio" element={<Portfolio></Portfolio>}></Route>

      <Route path="blog" element={<Blog></Blog>}></Route>

      <Route path="login" element={<Login></Login>}></Route>
      <Route path="register" element={<Register></Register>}></Route>

      <Route
        path="purchase/:id"
        element={
          <RequireAuth>
            <Purchase></Purchase>
          </RequireAuth>
        }
      ></Route>

      {/* Dashboard Routes */}
      <Route
        path="dashboard"
        element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }
      >
        <Route path="users" element={<Users></Users>}></Route>

        <Route
          index
          path="my-profile"
          element={<MyProfile></MyProfile>}
        ></Route>

        <Route path="my-orders" element={<MyOrders></MyOrders>}></Route>

        <Route path="payment" element={<Payment></Payment>}></Route>

        <Route path="my-reviews" element={<MyReviews></MyReviews>}></Route>

        <Route path="products" element={<Products></Products>}></Route>

        <Route path="manage-orders" element={<Orders></Orders>}></Route>
      </Route>
      {/* Dashboard Routes end */}

      <Route path="*" element={<Notfound></Notfound>}></Route>
    </Routes>
  );
};

export default BestoolRoutes;
