import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import Sidebar from "./Layout/SideBar/Sidebar";
import Header from "./Layout/Header/Header";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Account from "./Pages/Account/Account";
import Calculator from "./Pages/Calculator/Calculator";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Mint from "./Pages/Mint/Mint";
import View from "./Pages/View/View";
import Traits from "./Pages/Traits/Traits";
function App() {
  const [open, setOpen] = useState(false);
  const openHeader = (val) => {
    setOpen(val);
  };
  const location = useLocation();
  return (
    <div className="App">
      <Header func={openHeader} />
      <div className="bottom-App">
        <Sidebar func={openHeader} open={open} />
        <div className="right-div">
          <AnimatePresence exitBeforeEnter>
            <Routes key={location.pathname} location={location}>
              {/* <Route path="/" element={<Dashboard />}></Route>
              <Route path="/account" element={<Account />}></Route>
              <Route path="/calculator" element={<Calculator />}></Route> */}
              <Route path="/" element={<Mint />}></Route>
              <Route path="/view" element={<View />}></Route>
              <Route path="/traits" element={<Traits />}></Route>
            </Routes>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default App;
