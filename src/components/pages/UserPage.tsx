import { useEffect, useState } from "react"
import "../../styles/UserPage.css"
import EditUserName from "../EditUserName"
import Account from "../Account"
import { useLocation } from "react-router-dom"
import UserNameContainer from "../UserNameContainer"
import { useDispatch, useSelector } from "react-redux"
import { setFirstName, setLastName } from "../../redux/userInfosSlice"
import { setSignIn } from "../../redux/signOutSlice"
import { RootState } from "../../redux/store"

export default function UserPage() {
  // state
  const [editName, setEditName] = useState(false);
  const { token } = useSelector((state: RootState) => state.RememberMe)
  const location = useLocation();
  const dispatch = useDispatch();

  console.log(location.state);

  useEffect(() => {
    if (location.state && location.state.profile && location.state.profile.body && location.state.token) {
      dispatch(setFirstName(location.state.profile.body.firstName));
      dispatch(setLastName(location.state.profile.body.lastName));
      dispatch(setSignIn(true))
    }
  }, [location.state, dispatch]);

  // comportements
  const handleClick = () => {
    setEditName(!editName);
  }

  // affichage
  return <div className="main-container bg-dark">
    {editName ? <EditUserName handleClick={handleClick} token={token} /> :
      <UserNameContainer handleClick={handleClick} />}
    <h2 className="sr-only">Accounts</h2>
    <Account title="Argent Bank Checking (x8349)" amount="2,082.79" description="Available Balance" />
    <Account title="Argent Bank Savings (x6712)" amount="10,928.42" description="Available Balance" />
    <Account title="Argent Bank Credit Card (x8349)" amount="184.30" description="Current Balance" />
  </div>
}
