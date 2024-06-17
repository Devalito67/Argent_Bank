import { Link, useNavigate } from "react-router-dom"
import "../styles/Header.css"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { setToken } from "../redux/signInSlice";
import { setPassword } from "../redux/loginSlice";

export default function Header() {
    const { signIn } = useSelector((state: RootState) => state.SignIn);
    const { firstName } = useSelector((state: RootState) => state.UserInfos);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleSignOutClick = () => {
        dispatch(setToken(""))
        dispatch(setPassword(""))
        navigate('/login', {});
    }

    const handleSignInClick = () => {
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
            {signIn ?
                <Link className="main-nav-item" to="/login">
                    <i className="fa fa-user-circle"></i>
                    &nbsp;{firstName}&nbsp;
                    <i className="fa fa-sign-out"></i>
                    <button onClick={handleSignOutClick}>&nbsp;Sign Out</button>
                </Link>
                :
                <Link className="main-nav-item" to="/login">
                    <i className="fa fa-user-circle"></i>
                    <button onClick={handleSignInClick}>&nbsp;Sign In</button>
                </Link>}
        </div>
    </nav>
}
