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
import "./App.css"

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

/*La partie connexion*/


import Login from './Components/Login';
import Profile from './Components/Profile';
import BoardModerator from './Components/BoardModerator';
import BoardAdmin from './Components/BoardAdmin';
import BoardUser from './Components/BoardUser';
import HomeConnexion from "./Components/HomeConnexion";
import Register from './Components/Register';
import AuthenticatedRoute from "./Components/Layout/AuthenticatedRoute";
import StoreAuth from "./context/StoreAuth";


function App() {

  return (
    <div style={{ minHeight: "100%" }}>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/homeconnexion" element={<HomeConnexion />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={
            <StoreAuth><Profile /></StoreAuth>
        } />
        <Route path="/user" element={ <StoreAuth><BoardUser /></StoreAuth>} />
        <Route path="/mod" element={<StoreAuth><BoardModerator /></StoreAuth>} />
        <Route path="/admin" element={<StoreAuth><BoardAdmin /></StoreAuth>} />
        <Route path="/auth/*" element={<AuthenticatedRoute/>}/>

        <Route path="/home" element={<StoreAuth><Home /></StoreAuth>}></Route>
        <Route path="/about" element={<StoreAuth><About /></StoreAuth>}></Route>

        <Route path="/cars" element={<StoreAuth><AllCars /></StoreAuth>}></Route>
        <Route path="/findcar" element={<StoreAuth><FindCar /></StoreAuth>}></Route>
        <Route path="/newcar" element={<StoreAuth><NewCar /></StoreAuth>}></Route>

        <Route path="/clients" element={<StoreAuth><AllClients /></StoreAuth>}></Route>
        <Route path="/newclient" element={<StoreAuth><NewClient /></StoreAuth>}></Route>
        <Route path="/findclient" element={<StoreAuth><FindClient /></StoreAuth>}></Route>

        <Route path="/contracts" element={<StoreAuth><AllContracts /></StoreAuth>}></Route>
        <Route path="/newcontract" element={<StoreAuth><NewContract /></StoreAuth>}></Route>
        <Route path="/findcontract" element={<StoreAuth><FindContract /></StoreAuth>}></Route>

        <Route path="/invoices" element={<StoreAuth><AllInvoices /></StoreAuth>}></Route>
        <Route path="/newinvoice" element={<StoreAuth><NewInvoice /></StoreAuth>}></Route>
        <Route path="/findinvoice" element={<StoreAuth><FindInvoice /></StoreAuth>}></Route>

        <Route path="/options" element={<StoreAuth><AllOptions /></StoreAuth>}></Route>
        <Route path="/newoption" element={<StoreAuth><NewOption /></StoreAuth>}></Route>
        <Route path="/findoption" element={<StoreAuth><FindOption /></StoreAuth>}></Route>

        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
