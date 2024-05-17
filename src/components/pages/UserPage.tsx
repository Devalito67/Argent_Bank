import { useState } from "react"
import "../../styles/UserPage.css"
import EditUserName from "../EditUserName"
import Account from "../Account"

export default function UserPage() {
  // state
  const [editName, setEditName] = useState(false)

  // comportements
  const handleClick = () => {
    setEditName(!editName);
  }

  // affichage
  return <div className="main-container bg-dark">
    {editName ? <EditUserName handleClick={handleClick} /> :
      <div className="header">
        <h1>Welcome back<br />Prénom Nom!</h1>
        <button onClick={handleClick} className="edit-button">Edit Name</button>
      </div>}
    <h2 className="sr-only">Accounts</h2>
    <Account title="Argent Bank Checking (x8349)" amount="2,082.79" description="Available Balance" />
    <Account title="Argent Bank Savings (x6712)" amount="10,928.42" description="Available Balance" />
    <Account title="Argent Bank Credit Card (x8349)" amount="184.30" description="Current Balance" />
  </div>
}
