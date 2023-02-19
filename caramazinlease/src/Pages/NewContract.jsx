import NewContractForm from "../Components/Contract/NewContractForm";
import "./NewObject.css"

function NewContract() {
  return (
    <div className="newCard"  style={{minHeight: "1180px"}}>
      <h2>Nouveau contrat</h2>
      <NewContractForm />
    </div>
  );
}

export default NewContract;
