import NewContractForm from "../Components/Contract/NewContractForm";
import "./NewObject.css"

function NewContract() {
  return (
    <div className="newCard" style={{color:"#04024b"}} >
      <h2>Nouveau contrat</h2>
      <NewContractForm />
    </div>
  );
}

export default NewContract;
