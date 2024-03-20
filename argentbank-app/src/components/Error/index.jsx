import { Link } from "react-router-dom";
import "./style.scss";

function Error() {
    return (
        <div className="error-container">
            <h2 className="error-container__title">Error 404</h2>
            <h3 className="error-container__subtitle">Oops, page not found!</h3>
            <Link className="error-container__link" to="/">
                Go Back Home
            </Link>
        </div>
    );
}

export default Error;
