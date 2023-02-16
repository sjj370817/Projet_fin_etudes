import styles from "./NavBar.module.css";
import React ,{ useState} from "react";
import "./NavBar.css"
import { Link } from "react-router-dom";
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
          <div className={styles.logo}>Carmazing</div>
          <nav className={`navbar  ${showLinks ? "show-nav" : "hide-nav"}`}>
            <ul className="navbar_links">
              <li className="navbar_item">
                <Link to="/">Home</Link>
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
              
              <li className="navbar_item">
                <Link to="/about">About</Link>
              </li>
            </ul>
            <button className='navbar_burger' onClick={handleShowlinks}>
                    <span className='burger-bar'></span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
