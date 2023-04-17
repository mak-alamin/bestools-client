import { createContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import BestoolRoutes from "./BestoolRoutes";
import BTDrawer from "./components/Shared/BTDrawer/BTDrawer";
import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";

export const bestoolContext = createContext();

function App() {
  const [drawerInfo, setDrawerInfo] = useState({
    isOpen: false,
    content: "",
    width: 30,
  });

  const [userInfo, setUserInfo] = useState(null);

  let bestoolValues = {
    drawerContext: drawerInfo,
    setDrawerInfo: setDrawerInfo,
    userInfo: userInfo,
    setUserInfo: setUserInfo,
  };

  return (
    <>
      <bestoolContext.Provider value={bestoolValues}>
        <ToastContainer></ToastContainer>

        <BTDrawer></BTDrawer>

        <Header userInfo={userInfo} setUserInfo={setUserInfo}></Header>

        <BestoolRoutes userInfo={userInfo} setUserInfo={setUserInfo}></BestoolRoutes>

        <Footer></Footer>
      </bestoolContext.Provider>
    </>
  );
}

export default App;
