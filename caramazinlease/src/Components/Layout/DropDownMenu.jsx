import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./DropDownMenu.module.css";

function DropDownMenu(props) {
  const [isActive, setIsactive] = useState(false);

  const toggleActiveHandler = () => {
    setIsactive(!isActive);
  };

  return (
    <div className={styles["dropdown"]} onClick={toggleActiveHandler}>
      <div className={styles["dropdown-btn"]}>{props.menu.title}</div>
      {isActive && (
        <div className={styles["dropdown-container"]}>
          {props.menu.items.map((menu) => {
            return (
              <div className={styles["dropdown-item"]}>
                <Link to={menu.link}>{menu.title}</Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default DropDownMenu;
