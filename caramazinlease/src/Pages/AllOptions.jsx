import React from "react";
import OptionsTable from "../Components/Option/OptionsTable";
import { useState, useEffect } from "react";
import api from "../api/carlease";
import "./AllObject.css"

function AllOptions() {
    const [options, setOptions] = useState([]);

    useEffect(() => {
      fetchOptions();
    }, []);
  
    const fetchOptions = async () => {
      try {
        const response = await api.get("/options/");
        setOptions(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  
    return (
      <div className="container allCard" style={{color:"#04024b"}}>
        <h2>Toutes les options</h2>
        <OptionsTable options={options} refresh={fetchOptions} />
      </div>
    );
}

export default AllOptions