import React, { useState } from "react";
import OptionRow from "../Components/Option/OptionIRow";
import FindOptionForm from "../Components/Option/FindOptionForm";
import "./FindObject.css"
import { Link } from "react-router-dom";

function FindOption() {
  const [option, setOption] = useState(null);

  const updateOption = (findedOption) => {
    setOption(findedOption);
  };

  return (
    <div className="findCard"style={{color:"#04024b"}}  >
      <h2>Trouver une option</h2>
      <FindOptionForm setOption={updateOption} />
      {option && <OptionRow option={option} />}
      {/* <Link to="/newcontract">OK</Link> */}
      <Link to="/options">
        <div className="findButton"><button>Toutes les options</button></div>
      </Link>
    </div>
  );
}

export default FindOption;
