import React from "react";
import { Container, Form } from "react-bootstrap";
import styles from "../../styles/SignUpForm.module.css"

const SignUpForm = () => {

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
                    <br/>

                    <Form.Group>
                        <Form.Control
                        type="password"
                        placeholder="Confirm Password"
                        />
                    </Form.Group>
                    <hr/>

                    <div className={styles.SignUpDiv}>
                        <button className={styles.Button}>
                            Sign up
                        </button>
                        <p className={styles.SignInParagraph}>
                            or <a href="signin" className={styles.Anchor}>Sign in</a>
                        </p>
                    </div>

                </Form>
            </Container>
        </div>
    )
};

export default SignUpForm;
