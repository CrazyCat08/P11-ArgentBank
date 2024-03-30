import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import EditNameForm from "../../components/EditNameForm";
import AccountsSummary from "../../components/AccountsSummary";

import { fetchUserData } from "../../redux/slices/userSlice";

function Dashboard() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const userName = useSelector((state) => state.user.userName);
    const firstName = useSelector((state) => state.user.firstName);
    const lastName = useSelector((state) => state.user.lastName);
    const token = JSON.parse(localStorage.getItem("token"));

    const [toggleEditForm, setToggleEditForm] = useState(false);

    useEffect(() => {
        if (!token) {
            navigate("/login");
            return;
        }
        dispatch(fetchUserData({ token }));
    }, [token, navigate, dispatch]);

    const toggleEdit = () => {
        if (token) {
            setToggleEditForm((current) => !current);
        }
    };

    return (
        <main className="main bg-dark dashboard-page">
            <div className="header">
                {toggleEditForm ? (
                    <>
                        <EditNameForm
                            onClickToggleCancel={toggleEdit}
                            onClickToggleSave={toggleEdit}
                        />
                    </>
                ) : (
                    <>
                        <h1>
                            Welcome back
                            <br />"{userName}" <br />
                            {firstName} {lastName} !
                        </h1>
                        <button className="edit-button" onClick={toggleEdit}>
                            Edit Name
                        </button>
                    </>
                )}
            </div>
            <AccountsSummary />
        </main>
    );
}

export default Dashboard;
