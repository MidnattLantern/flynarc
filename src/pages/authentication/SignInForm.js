import React from "react";
import { Container, Form } from "react-bootstrap";
import styles from "../../styles/SignInForm.module.css"

const SignInForm = () => {

    return (
        <div>
            <Container>
                <Form className={styles.AuthenticationIsland}>

                    <Form.Group>
                        <Form.Control
                        type="text"
                        placeholder="Username"
                        />
                    </Form.Group>
                    <br/>

                    <Form.Group>
                        <Form.Control
                        type="password"
                        placeholder="Password"
                        />
                    </Form.Group>
                    <hr/>

                    <div className={styles.SignInDiv}>
                        <button className={styles.Button}>
                            Sign in
                        </button>
                        <p className={styles.SignUpParagraph}>
                            or <a href="signup" className={styles.Anchor}>Sign up</a>
                        </p>
                    </div>
                </Form>
            </Container>
        </div>
    )
};

export default SignInForm;
