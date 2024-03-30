import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchUserData } from "../../redux/slices/userSlice";
import { userNameUpdate } from "../../redux/slices/userSlice";
import Button from "../Button";
import "./style.scss";

const EditNameForm = ({ onClickToggleCancel, onClickToggleSave }) => {
    const dispatch = useDispatch();

    const currentUserName = useSelector((state) => state.user.userName);
    const firstName = useSelector((state) => state.user.firstName);
    const lastName = useSelector((state) => state.user.lastName);
    const token = JSON.parse(localStorage.getItem("token"));

    const [userName, setUserName] = useState("");

    useEffect(() => {
        setUserName(currentUserName);
    }, [currentUserName]);

    const SaveUserName = (e) => {
        e.preventDefault();
        dispatch(userNameUpdate({ token, userName }));
        dispatch(fetchUserData({ token }));
    };

    return (
        <form className="edit-form-content">
            <h1>Edit user info</h1>
            <div className="edit-form-inputs">
                <div className="edit-form-input">
                    <label htmlFor="userName">User name : </label>
                    <input
                        id="userName"
                        type="text"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                    ></input>
                </div>
                <div className="edit-form-input">
                    <label htmlFor="firstName">First name : </label>
                    <input
                        id="firstName"
                        type="text"
                        value={firstName}
                        disabled
                    ></input>
                </div>
                <div className="edit-form-input">
                    <label htmlFor="lastName">Last name : </label>
                    <input
                        id="lastName"
                        type="text"
                        value={lastName}
                        disabled
                    ></input>
                </div>
            </div>
            <div className="edit-form-buttons">
                <div className="test" onClick={SaveUserName}>
                    <Button onClick={onClickToggleSave}>Save</Button>
                </div>
                <div className="test">
                    <Button onClick={onClickToggleCancel}>Cancel</Button>
                </div>
            </div>
        </form>
    );
};

export default EditNameForm;
