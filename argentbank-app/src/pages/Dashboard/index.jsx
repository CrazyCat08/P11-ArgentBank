import Welcome from "../../components/Welcome";
import UserEdit from "../../components/UserEdit";
import AccountsSummary from "../../components/AccountsSummary";

function Dashboard() {
    return (
        <main className="main bg-dark">
            <div className="header">
                <Welcome />
                <UserEdit />
            </div>
            <AccountsSummary />
        </main>
    );
}

export default Dashboard;
