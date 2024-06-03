import { useEffect, useState } from "react"
import "../../styles/UserPage.css"
import EditUserName from "../EditUserName"
import Account from "../Account"
import { useLocation } from "react-router-dom"
import UserNameContainer from "../UserNameContainer"

export default function UserPage() {
  // state
  const [editName, setEditName] = useState(false);
  const [firstName, setFirstName] = useState("firstname");
  const [lastName, setLastName] = useState("lastname");
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.profile && location.state.profile.body) {
      setFirstName(location.state.profile.body.firstName);
      setLastName(location.state.profile.body.lastName);
    }
  }, [location.state]);

  // comportements
  const handleClick = () => {
    setEditName(!editName);
  }

  // affichage
  return <div className="main-container bg-dark">
    {editName ? <EditUserName handleClick={handleClick} firstName={firstName} lastName={lastName} setFirstName={setFirstName} setLastName={setLastName}/> :
      <UserNameContainer handleClick={handleClick} firstName={firstName} lastName={lastName}/>}
    <h2 className="sr-only">Accounts</h2>
    <Account title="Argent Bank Checking (x8349)" amount="2,082.79" description="Available Balance" />
    <Account title="Argent Bank Savings (x6712)" amount="10,928.42" description="Available Balance" />
    <Account title="Argent Bank Credit Card (x8349)" amount="184.30" description="Current Balance" />
  </div>
}
