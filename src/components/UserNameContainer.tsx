import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

interface UserNameContainerType {
  handleClick: () => void;
}

export default function UserNameContainer({handleClick}:UserNameContainerType) {
  const userInfos = useSelector((state: RootState)=> state.UserInfos)
  return (
    <div className="userName-container">
    <h1>Welcome back<br />{userInfos.firstName} {userInfos.lastName}!</h1>
    <button onClick={handleClick} className="edit-button">Edit Name</button>
  </div>
  )
}
