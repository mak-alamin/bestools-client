import { Route, Routes } from "react-router-dom";

import "./App.css";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyProfile from "./Pages/Dashboard/MyProfile/MyProfile";
import Users from "./Pages/Dashboard/Users";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import RequireAuth from "./Pages/Login/RequireAuth";
import Notfound from "./Pages/Notfound";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Footer from "./Pages/Shared/Footer";
import Header from "./Pages/Shared/Header";

function App() {
  return (
    <>
      <Header></Header>
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
        ></Route>

        <Route
          path="users"
          element={
            <RequireAuth>
              <Users></Users>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="my-profile"
          element={
            <RequireAuth>
              <MyProfile></MyProfile>
            </RequireAuth>
          }
        ></Route>

        <Route path="home" element={<Home></Home>}></Route>
        <Route path="blog" element={<Blog></Blog>}></Route>
        <Route path="login" element={<Login></Login>}></Route>
        <Route path="register" element={<Register></Register>}></Route>

        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
