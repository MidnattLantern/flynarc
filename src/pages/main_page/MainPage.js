import React from "react";
import { useCurrentAuthentication } from "../../contexts/CurrentAuthenticationContext";

const MainPage = () => {
    const currentAuthentication = useCurrentAuthentication();

    return (
        <div>
            <h1>Main page</h1>
            <p>Authenticated as: {currentAuthentication?.username}</p>
        </div>
    )
};

export default MainPage;
