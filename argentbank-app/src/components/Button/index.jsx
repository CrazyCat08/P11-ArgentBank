import React from "react";

function Button({ children, onClick, className = "sign-in-button" }) {
    return (
        <button className={className} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
