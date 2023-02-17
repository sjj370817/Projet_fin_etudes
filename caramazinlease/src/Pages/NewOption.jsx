import React from 'react'
import NewOptionForm from '../Components/Option/NewOptionForm'
import "./NewObject.css"

function NewOption() {
  return (
    <div className="newCard">
      <h2>Nouveau contrat</h2>
      <NewOptionForm />
    </div>
  )
}

export default NewOption