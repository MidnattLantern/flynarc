import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../styles/NavBar.module.css'
import { NavLink } from "react-router-dom";
//import { CurrentAuthenticationContext } from "../App";
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
        <Navbar expand="md" fixed="top">
        <Container className={styles.NavBarIsland}>

            <Navbar.Brand>FLYNARC</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={styles.NavBarGroup}>

                <NavLink className={styles.NavBarButton} exact activeClassName={styles.Active} to="/"><i className="fas fa-home" /> Home</NavLink>
                <NavLink className={styles.NavBarButton} exact activeClassName={styles.Active} to="https://flynarc-api-824d94b4a80f.herokuapp.com/" target="_blank">API</NavLink>
                <NavLink className={styles.NavBarButton} exact activeClassName={styles.Active} to="/signin">Sign in</NavLink>
                <NavLink className={styles.NavBarButton} exact activeClassName={styles.Active} to="/signup">Sign up</NavLink>
                {currentAuthentication ? authenticatedOptions : nonAuthenticatedOptions}
            </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    )
};

export default NavBar;
