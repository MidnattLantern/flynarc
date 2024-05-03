import React, { useContext } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from '../styles/NavBar.module.css'
import { NavLink } from "react-router-dom";
import { CurrentAuthenticationContext } from "../App";

const NavBar = () => {
    const CurrentAuthentication = useContext(CurrentAuthenticationContext)

    const nonAuthenticatedOptions = <div>
        <p>not authenticated</p>
    </div>

    const authenticatedOptions = <div>
        <p>authenticated as: {CurrentAuthentication?.username}</p>
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
                {CurrentAuthentication ? authenticatedOptions : nonAuthenticatedOptions}
            </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    )
};

export default NavBar;
