import { createContext, useState } from "react";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import BestoolRoutes from "./BestoolRoutes";
import BTDrawer from "./Pages/Shared/BTDrawer/BTDrawer";
import Footer from "./Pages/Shared/Footer";
import Header from "./Pages/Shared/Header";

export const bestoolContext = createContext();

function App() {
  const [drawerInfo, setDrawerInfo] = useState({
    isOpen: false,
    content: '',
    width: 30
  });

  let bestoolValues = {
    drawerContext: drawerInfo,
    setDrawerInfo: setDrawerInfo,
  }

  return (
    <>
     <bestoolContext.Provider value={bestoolValues}>
         
        <ToastContainer></ToastContainer>
        
        <BTDrawer></BTDrawer>

        <Header></Header>

        <BestoolRoutes></BestoolRoutes>
        
        <Footer></Footer>

      </bestoolContext.Provider>
    </>
  );
}

export default App;
