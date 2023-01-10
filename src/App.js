import { Route, Routes } from "react-router-dom";

// Import Slick Slider CSS files
// import "~slick-carousel/slick/slick-theme.css";
// import "~slick-carousel/slick/slick.css";

import "./App.css";
import About from "./Pages/About/About";
import Blog from "./Pages/Blog";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Users from "./Pages/Dashboard/Users";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
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

        <Route path="dashboard" element={<Dashboard></Dashboard>}>
          <Route path="users" element={<Users></Users>}></Route>
        </Route>

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
