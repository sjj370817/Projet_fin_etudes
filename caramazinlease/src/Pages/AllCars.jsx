import React from "react";
import CarsList from "../Components/Car/CarsList";
import { useState, useEffect } from "react";
import api from "../api/carlease";
/*
props = paramètres (fonctions classiques)
state = variables locales = représente l'ensembles des données dynamiques d'une page
*/

function AllCars() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await api.get("/cars/");
      setCars(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h2>Toutes les voitures</h2>
      <CarsList cars={cars} refresh={fetchCars} />
    </div>
  );
}

export default AllCars;
