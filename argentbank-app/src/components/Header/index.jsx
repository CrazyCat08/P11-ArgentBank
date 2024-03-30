import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
// import { fetchUserData } from "../../redux/slices/userSlice";
import logo from "../../assets/img/argentBankLogo.webp";
import "./style.scss";

function Header() {
    const dispatch = useDispatch();
    const isConnected = useSelector((state) => state.auth.isConnected);
    const token = useSelector((state) => state.auth.token);
    const user = useSelector((state) => state.user);
    console.log("token: ", token);
    console.log("user: ", user);
    const userName = useSelector((state) => state.user.userName);

    console.log("is it Connected?: ", isConnected);
    console.log("userName is: ", userName);

    const navigate = useNavigate();

    const logoutHandler = () => {
        dispatch(logout());
        // sessionStorage.clear();
        // localStorage.clear();
        navigate("/");
    };

    return (
        <header>
            <nav className="main-nav">
                <Link className="main-nav-logo" to="/">
                    <img
                        className="main-nav-logo-image"
                        src={logo}
                        alt="Argent Bank Logo"
                    />
                    <h1 className="sr-only">Argent Bank</h1>
                </Link>
                {isConnected ? (
                    <div className="connected">
                        <Link to="/dashboard">
                            <i className="fa-solid fa-2x fa-circle-user" />
                            {userName}
                            {/* userNameTest */}
                        </Link>
                        <Link to="/" onClick={logoutHandler}>
                            <i className="fa-solid fa-arrow-right-from-bracket" />
                            Sign out
                        </Link>
                    </div>
                ) : (
                    <div className="not-connected">
                        <Link to="/login" className="main-nav-item">
                            <i className="fa fa-user-circle"></i>
                            Sign In
                        </Link>
                    </div>
                )}
            </nav>
        </header>
    );
}

export default Header;
