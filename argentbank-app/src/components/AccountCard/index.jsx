// import PropTypes from "prop-types";

function AccountCard({ title, amount, description }) {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{title}</h3>
                <p className="account-amount">${amount}</p>
                <p className="account-amount-description">{description}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">
                    View transactions
                </button>
            </div>
        </section>
    );
}

// AccountCard.propTypes = {
//     title: PropTypes.string.isRequired,
//     amount: PropTypes.number.isRequired,
//     description: PropTypes.string.isRequired,
// };

export default AccountCard;
