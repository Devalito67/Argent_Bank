import { Link, useNavigate } from "react-router-dom"
import "../styles/Header.css"
import { setSignOut } from "../redux/signOutSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";

export default function Header() {
    const { signOut} = useSelector((state: RootState) => state.SignOut);
    const { firstName } = useSelector((state: RootState) => state.UserInfos);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSignOutClick = () => {
        dispatch(setSignOut());
        navigate('/login', {});
    }

    return <nav className="main-nav">
        <Link className="main-nav-logo" to="/">
            <img
                className="main-nav-logo-image"
                src="src/assets/argentBankLogo.png"
                alt="Argent Bank Logo"
            />
            <h1 className="sr-only">Argent Bank</h1>
        </Link>
        <div>
            {signOut ?
                <Link className="main-nav-item" to="/login">
                    <i className="fa fa-user-circle"></i>
                    &nbsp;{firstName}
                    <i className="fa fa-sign-out"></i>
                    <button onClick={handleSignOutClick}>&nbsp;Sign Out</button>
                </Link>
                :
                <Link className="main-nav-item" to="/login">
                    <i className="fa fa-user-circle"></i>
                    <button onClick={handleSignOutClick}>&nbsp;Sign In</button>
                </Link>}
        </div>
    </nav>
}
