import styles from "./NavBar.module.css";
import "./NavBar.css"
import DropDownMenu from "./DropDownMenu";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthService from "../../services/auth.service";


import EventBus from "../../common/EventBus";

function NavBar() {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
      setShowModeratorBoard(user.roles.includes("ROLE_MODERATOR"));
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
  };

  const clientMenus = {
    title: "Clients",
    items: [
      { link: "/clients", title: "Liste" },
      { link: "/newclient", title: "Nouveau" },
      { link: "/findclient", title: "Chercher" },
    ],
  };

  const carMenus = {
    title: "Voitures",
    items: [
      { link: "/cars", title: "Liste" },
      { link: "/newcar", title: "Nouveau" },
      { link: "/findcar", title: "Chercher" },
    ],
  };

  const contractMenus = {
    title: "Contrats",
    items: [
      { link: "/contracts", title: "Liste" },
      { link: "/newcontract", title: "Nouveau" },
      { link: "/findcontract", title: "Chercher" },
    ],
  };

  const invoiceMenus = {
    title: "Factures",
    items: [
      { link: "/invoices", title: "Liste" },
      { link: "/newinvoice", title: "Nouveau" },
      { link: "/findinvoice", title: "Chercher" },
    ],
  };

  const optionMenus = {
    title: "Options",
    items: [
      { link: "/options", title: "Liste" },
      { link: "/newoption", title: "Nouveau" },
      { link: "/findoption", title: "Chercher" },
    ],
  };

  const [showLinks, setShowLinks] = useState(false)

  const handleShowlinks = () => {
    setShowLinks(!showLinks)

  }

  return (
    <header className={styles.header}>
      <div>
        <div className={styles["header-container"]}>
          <nav className={`navbar  ${showLinks ? "show-nav" : "hide-nav"}`}>
            <div className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={"/homeConnexion"} className="nav-link" >
                  Home
                </Link>
              </li>

              {showModeratorBoard && (
                <li className="nav-item">
                  <Link to={"/mod"} className="nav-link">
                    Moderator Board
                  </Link>
                </li>
              )}

              {showAdminBoard && (
                <li className="nav-item">
                  <Link to={"/admin"} className="nav-link">
                    Admin Board
                  </Link>
                </li>
              )}

              {currentUser && (
                <li className="nav-item">
                  <Link to={"/user"} className="nav-link">
                    User
                  </Link>
                </li>
              )}
            </div>

            {currentUser ? (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link" style={{ textDecoration: "none", color: "rgb(221, 150, 8)" }}>
                    {currentUser.username}
                  </Link>
                </li>
                <li className="nav-item" >
                  <a href="/login" className="nav-link" onClick={logOut} style={{ textDecoration: "none", color: "rgb(221, 150, 8)" }}>
                    LogOut
                  </a>
                </li>
                <ul className="navbar_links">
                  <li>
                    <a href="/home" className="a_item">Home</a>
                  </li>

                  <li className="navbar_item" style={{ cursor: "pointer" }}>
                    <DropDownMenu menu={carMenus} />
                  </li>

                  <li className="navbar_item" style={{ cursor: "pointer" }}>
                    <DropDownMenu menu={clientMenus} />
                  </li>


                  <li className="navbar_item" style={{ cursor: "pointer" }}>
                    <DropDownMenu menu={contractMenus} />
                  </li>

                  <li className="navbar_item" style={{ cursor: "pointer" }}>
                    <DropDownMenu menu={invoiceMenus} />
                  </li>

                  <li className="navbar_item" style={{ cursor: "pointer" }}>
                    <DropDownMenu menu={optionMenus} />
                  </li>

                  <li>
                    <a href="about" className="a_item">About</a>
                  </li>
                </ul>
                <div className='navbar_burger' onClick={handleShowlinks}>
                  <span className='burger-bar'></span>
                </div>
              </div>
            ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link" style={{ textDecoration: "none", color: "rgb(221, 150, 8)" }}>
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/register"} className="nav-link" style={{ textDecoration: "none", color: "rgb(221, 150, 8)" }}>
                    Sign Up
                  </Link>
                </li>
              </div>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
