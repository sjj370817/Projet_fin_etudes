import Card from 'react-bootstrap/Card';
import api from "../api/carlease";
import { useState, useEffect } from "react";

function Home() {
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

  const [clients, setClients] = useState([]);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await api.get("/clients/");
      setClients(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    fetchContracts();
  }, []);

  const fetchContracts = async () => {
    try {
      const response = await api.get("/contracts/");
      setContracts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const [invoices, setInvoices] = useState([]);

  useEffect(() => {
    fetchInvoices();
  }, []);

  const fetchInvoices = async () => {
    try {
      const response = await api.get("/invoices/");
      setInvoices(response.data);
    } catch (error) {
      console.log(error);
    }
  };

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
    <div style={{width:"100%", display: 'flex', justifyContent: 'space-around', flexDirection: 'row'}}>
      <div>
        <div className='col'>
          <Card>
            <h3>Nombre de voitures</h3>
            <p>{cars.length}</p>
          </Card>
        </div>
        <div className='col'>
          <Card>
            <h3>Nombre de cliens</h3>
            <p>{clients.length}</p>
          </Card>
        </div>
        <div className='col'>
          <Card>
            <h3>Contrats signés</h3>
            <p>{contracts.length}</p>
          </Card>
        </div>

      </div>
      <div>
        <div className='col'>
          <Card>
            <h3>Les Factures</h3>
            <p>{invoices.length}</p>
          </Card>
        </div>
        <div className='col'>
          <Card>
            <h3>Options ajoutés</h3>
            <p>{options.length}</p>
          </Card>
        </div>
        <div className='col'>
          <Card>
            <h3>Nombre de voiture</h3>
            <p></p>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Home;
