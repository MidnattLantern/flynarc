import React from "react";
import Nav from 'react-bootstrap/Nav';
import styles from '../styles/NavBar.module.css'
import { NavLink } from "react-router-dom";
import { useCurrentAuthentication, useSetCurrentAuthentication } from "../contexts/CurrentAuthenticationContext";
import axios from "axios";

const NavBar = () => {
    const currentAuthentication = useCurrentAuthentication();
    const setCurrentAuthentication = useSetCurrentAuthentication();

    const nonAuthenticatedOptions = <div>
        <p>not authenticated</p>
    </div>

    const handleSignOut = async () => {
        try {
            await axios.post("dj-rest-auth/logout/");
            setCurrentAuthentication(null);
        } catch (err) {
            console.log(err);
        }
    };

    const authenticatedOptions = <div>
        <p>authenticated as: {currentAuthentication?.username}</p>
        <button onClick={handleSignOut}>Sign out</button>
    </div>

    return (
        <Nav>
            <NavLink className={styles.NavBarButton} exact activeClassName={styles.Active} to="/"><i className="fas fa-home" /> Home</NavLink>
            <a className={styles.NavBarButton} href="https://flynarc-api-824d94b4a80f.herokuapp.com/" target="blank">API</a>
            <NavLink className={styles.NavBarButton} exact activeClassName={styles.Active} to="/signin">Sign in</NavLink>
            <NavLink className={styles.NavBarButton} exact activeClassName={styles.Active} to="/signup">Sign up</NavLink>
            {currentAuthentication ? authenticatedOptions : nonAuthenticatedOptions}
        </Nav>
    )
};

export default NavBar;
