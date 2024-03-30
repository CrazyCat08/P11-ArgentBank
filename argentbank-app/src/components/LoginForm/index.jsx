import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/slices/authSlice";
import "./style.scss";

function LoginForm() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [checked, setChecked] = useState(false);
    const [emptyFormError, setEmptyFormError] = useState("");

    const token = JSON.parse(localStorage.getItem("token"));

    const isConnected = useSelector((state) => state.auth.isConnected);
    let error = useSelector((state) => state.auth.error);

    const errorMessage = emptyFormError || error;

    useEffect(() => {
        if (error) {
            setEmptyFormError("");
        }
        if (isConnected && token) {
            navigate("/dashboard");
        }
    }, [error, dispatch, isConnected, token, navigate]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (email !== "" && password !== "") {
            dispatch(login({ email, password }));
            console.log("User data: ", email, password);
            return;
        }
        setEmptyFormError("Veullez remplir tous les champs");
    };

    const toggleChecked = () => {
        setChecked((state) => !state);
    };

    return (
        <section className="sign-in-content">
            <i className="fa fa-user-circle sign-in-icon"></i>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <div className="input-wrapper">
                    <label htmlFor="email">Email</label>
                    <input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="password">Password</label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </div>
                <div className="input-remember">
                    <input
                        id="remember-me"
                        type="checkbox"
                        defaultChecked={checked}
                        onChange={toggleChecked}
                    />
                    <label htmlFor="remember-me">Remember me</label>
                </div>
                <button className="sign-in-button" type="submit">
                    Sign In
                </button>
                {errorMessage && <p className="signin-error">{errorMessage}</p>}
            </form>
        </section>
    );
}

export default LoginForm;
