import AccountCard from "../AccountCard";

import accountsData from "../../data/accounts-summary-data.json";

function AccountsSummary() {
    return (
        <div className="accounts-summary">
            <h2 className="sr-only">Accounts</h2>
            {accountsData.map((account) => (
                <AccountCard
                    key={account.id}
                    title={account.title}
                    amount={account.amount}
                    description={account.description}
                />
            ))}
        </div>
    );
}

export default AccountsSummary;
