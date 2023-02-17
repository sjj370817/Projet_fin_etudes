import styles from "./NavBar.module.css";
import React, { useState } from "react";
import "./NavBar.css"
import DropDownMenu from "./DropDownMenu";

function NavBar() {
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
      <div className="container">
        <div className={styles["header-container"]}>
          <nav className={`navbar  ${showLinks ? "show-nav" : "hide-nav"}`}>
            <ul className="navbar_links">
              <li>
                <a href="/" className="a_item">Home</a>
              </li>

              <li className="navbar_item">
                <DropDownMenu menu={carMenus} />
              </li>

              <li className="navbar_item">
                <DropDownMenu menu={clientMenus} />
              </li>


              <li className="navbar_item">
                <DropDownMenu menu={contractMenus} />
              </li>

              <li className="navbar_item">
                <DropDownMenu menu={invoiceMenus} />
              </li>

              <li className="navbar_item">
                <DropDownMenu menu={optionMenus} />
              </li>

              <li>
                <a href="about" className="a_item">About</a>
              </li>
            </ul>
            <div className='navbar_burger' onClick={handleShowlinks}>
                <span className='burger-bar'></span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
