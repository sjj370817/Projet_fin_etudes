import NavBar from "./Components/Layout/NavBar";
import { Routes, Route } from "react-router-dom";
import AllCars from "./Pages/AllCars";
import AllClients from "./Pages/AllClients";
import AllContracts from "./Pages/AllContracts";
import AllInvoices from "./Pages/AllInvoices";
import AllOptions from "./Pages/AllOptions";
import NewClient from "./Pages/NewClient";
import NewCar from "./Pages/NewCar";
import NewContract from "./Pages/NewContract";
import NewInvoice from "./Pages/NewInvoice";
import NewOption from "./Pages/NewOption";
import FindCar from "./Pages/FindCar";
import FindClient from "./Pages/FindClient";
import FindContract from "./Pages/FindContract";
import FindInvoice from "./Pages/FindInvoice";
import FindOption from "./Pages/FindOption";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Error from "./Pages/Error";
import Footer from "./Components/Layout/Footer";
import "./App.css"


// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>

        <Route path="/cars" element={<AllCars />}></Route>
        <Route path="/findcar" element={<FindCar />}></Route>
        <Route path="/newcar" element={<NewCar />}></Route>

        <Route path="/clients" element={<AllClients />}></Route>
        <Route path="/newclient" element={<NewClient />}></Route>
        <Route path="/findclient" element={<FindClient />}></Route>

        <Route path="/contracts" element={<AllContracts />}></Route>
        <Route path="/newcontract" element={<NewContract />}></Route>
        <Route path="/findcontract" element={<FindContract />}></Route>

        <Route path="/invoices" element={<AllInvoices />}></Route>
        <Route path="/newinvoice" element={<NewInvoice />}></Route>
        <Route path="/findinvoice" element={<FindInvoice />}></Route>

        <Route path="/options" element={<AllOptions />}></Route>
        <Route path="/newoption" element={<NewOption />}></Route>
        <Route path="/findoption" element={<FindOption />}></Route>

        <Route path="*" element={<Error />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
