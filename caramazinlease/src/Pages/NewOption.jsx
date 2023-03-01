import React from 'react'
import NewOptionForm from '../Components/Option/NewOptionForm'
import "./NewObject.css"

function NewOption() {
  return (
    <div className="newCard" style={{color:"#04024b"}}  >
      <h2>Ajouter une option</h2>
      <NewOptionForm />
    </div>
  )
}

export default NewOption