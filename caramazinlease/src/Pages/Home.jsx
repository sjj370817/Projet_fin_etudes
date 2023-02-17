import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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

  const [contracts, setContracts]= useState([]);

  useEffect(()=> {
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
    <Container>
      <Row>
        <Col>
          <Card>
            <h2>Nombre de voitures</h2>
            <p>{cars.length}</p>
          </Card>
        </Col>
        <Col>
          <Card>
            <h2>Nombre de cliens</h2>
            <p>{clients.length}</p>
          </Card>
        </Col>
        <Col>
          <Card>
          <h2>Contrats signés</h2>
            <p>{contracts.length}</p>
          </Card>
        </Col>

      </Row>
      <Row>
      <Col>
          <Card>
          <h2>Les Factures</h2>
            <p>{invoices.length}</p>
          </Card>
        </Col>
        <Col>
          <Card>
          <h2>Options ajoutés</h2>
            <p>{options.length}</p>
          </Card>
        </Col>
        <Col>
          <Card>
          <h2>Nombre de voiture</h2>
            <p></p>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
