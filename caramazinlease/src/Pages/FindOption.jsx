import React, { useState } from "react";
import OptionRow from "../Components/Option/OptionIRow";
import FindOptionForm from "../Components/Option/FindOptionForm";
// import { Link } from "react-router-dom";

function FindOption() {
  const [option, setOption] = useState(null);

  const updateOption = (findedOption) => {
    setOption(findedOption);
  };

  return (
    <div>
      <h2>Trouver une option</h2>
      <FindOptionForm setOption={updateOption} />
      {option && <OptionRow option={option} />}
      {/* <Link to="/newcontract">OK</Link> */}
    </div>
  );
}

export default FindOption;
