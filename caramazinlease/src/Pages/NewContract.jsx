import NewContractForm from "../Components/Contract/NewContractForm";
import "./NewObject.css"

function NewContract() {
  return (
    <div className="newCard">
      <h2>Nouveau contrat</h2>
      <NewContractForm />
    </div>
  );
}

export default NewContract;
