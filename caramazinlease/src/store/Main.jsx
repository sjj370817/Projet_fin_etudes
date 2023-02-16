import { createContext, useState } from "react";

const MainContext = createContext({
  client: null,
  car: null,
  contract: null,
  invoice: null, 
  option: null,
  action: "",
  setClient: () => {},
  setCar: () => {},
  setContract: () => {},
  setInvoice: () => {},
  setOption: () => {},
  setAction: () => {},
});

export function MainContextProvider(props) {
  const [client, setClient] = useState();
  const [car, setCar] = useState();
  const [contract, setContract] = useState();
  const[invoice, setInvoice]= useState();
  const[option, setOption]=useState();
  const [action, setAction] = useState();

  const context = {
    car: car,
    client: client,
    contract: contract,
    invoice: invoice,
    option: option,
    action: action,
    setClient: (client) => {
      setClient(client);
    },
    setCar: (car) => {
      setCar(car);
    },
    setContract: (contract) => {
      setContract(contract);
    },
    setInvoice: (invoice) => {
      setInvoice(invoice);
    },
    setOption: (option) => {
      setOption(option);
    },
    setAction: (action) => {
      setAction(action);
    },
  };

  return (
    <MainContext.Provider value={context}>
      {props.children}
    </MainContext.Provider>
  );
}

export default MainContext;
