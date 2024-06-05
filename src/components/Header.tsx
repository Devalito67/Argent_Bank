import { Link, useNavigate } from "react-router-dom"
import "../styles/Header.css"
import { useState } from "react"
import SignOut from "./SignOut"

export default function Header() {
    const [signOut, setSignOut] = useState(false);
    const navigate= useNavigate();

    const handleSignOutClick = () => {
        setSignOut(!signOut)
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
           { signOut ? <SignOut handleSignOutClick={handleSignOutClick} /> :
            <div className="main-nav-item" to="/login">
                <i className="fa fa-user-circle"></i>
                <button onClick={handleSignOutClick}>&nbsp;Sign In</button>
            </div>}
        </div>
    </nav>
}
