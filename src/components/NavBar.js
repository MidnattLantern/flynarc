import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from '../styles/NavBar.module.css'

const NavBar = () => {
    return (
        <Navbar expand="md" fixed="top">
        <Container className={styles.NavBarIsland}>
            <Navbar.Brand href="/">FLYNARC</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className={styles.NavBarGroup}>

                <Nav.Link className={styles.NavBarButton} href="/"><i className="fas fa-home" /> Home</Nav.Link>
                <Nav.Link className={styles.NavBarButton} href="https://flynarc-api-824d94b4a80f.herokuapp.com/" target="_blank">API</Nav.Link>
                <Nav.Link className={styles.NavBarButton} href="/sign-in">Sign in</Nav.Link>
                <Nav.Link className={styles.NavBarButton} href="/sign-up">Sign up</Nav.Link>

            </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
    )
};

export default NavBar;
