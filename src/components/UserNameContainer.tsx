interface UserNameContainerType {
  firstName : string;
  lastName: string;
  handleClick: () => void;
}


export default function UserNameContainer({firstName, lastName, handleClick}:UserNameContainerType) {
  return (
    <div className="userName-container">
    <h1>Welcome back<br />{firstName} {lastName}!</h1>
    <button onClick={handleClick} className="edit-button">Edit Name</button>
  </div>
  )
}
