import { Link } from "react-router-dom";

interface SignOutType {
  handleSignOutClick: () => void;
  firstName: string;
}

export default function SignOut({handleSignOutClick, firstName}: SignOutType) {
  return (
    <Link className="main-nav-item" to="/login">
    <i className="fa fa-user-circle"></i>
    &nbsp;{firstName}
    <i className="fa fa-sign-out"></i>
    <button onClick={handleSignOutClick}>&nbsp;Sign Out</button>
</Link>
  )
}
