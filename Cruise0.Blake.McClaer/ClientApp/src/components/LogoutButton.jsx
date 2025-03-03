﻿import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
        <button className="btn btn-danger btn-block w-25"
            onClick={() => logout({ returnTo: window.location.origin })}>
                Log Out
            </button>
         )
    );
};

export default LogoutButton;