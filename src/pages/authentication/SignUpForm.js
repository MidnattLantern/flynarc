import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import styles from "../../styles/SignUpForm.module.css"
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const SignUpForm = () => {
    const [signUpData, setSignUpData] = useState({
        username: "",
        password: "",
        confirmPassword: "",
    });
    const [ placeholder, setPlaceholder ] = useState({
        placeholderUsername: "Username",
        placeholderPassword: "Password",
        placeholderConfirmPassword: "Confirm Password",
    });
    const {
        username,
        password,
        confirmPassword,
    } = signUpData;
    const {
        placeholderUsername,
        placeholderPassword,
        placeholderConfirmPassword,
    } = placeholder;

    const history = useHistory();

    const handleChange = (event) => {
        setSignUpData({
            ...signUpData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.post('/dj-rest-auth/registration/', signUpData)
            console.log("Success. Submitted signup Data: ", signUpData)
            history.push('/signin')
            console.log("Redirected to /signin")
        } catch(err) {
            console.log("Error: ", err)
        }
    }

    return (
        <div>
            <Container>
                <Form className={styles.AuthenticationIsland} onSubmit={handleSubmit}>

                    <Form.Group>
                        <Form.Control
                        name="username"
                        type="text"
                        placeholder={placeholderUsername}
                        value={username}
                        onChange={handleChange}
                        />
                    </Form.Group>
                    <br/>

                    <Form.Group>
                        <Form.Control
                        name="password"
                        type="password"
                        placeholder={placeholderPassword}
                        value={password}
                        onChange={handleChange}
                        />
                    </Form.Group>
                    <br/>

                    <Form.Group>
                        <Form.Control
                        name="confirmPassword"
                        type="password"
                        placeholder={placeholderConfirmPassword}
                        value={confirmPassword}
                        onChange={handleChange}
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
