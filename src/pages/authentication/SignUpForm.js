import React, { useState } from "react";
import { Alert, Container, Form } from "react-bootstrap";
import styles from "../../styles/SignUpForm.module.css"
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const SignUpForm = () => {
    const [signUpData, setSignUpData] = useState({
        username: "",
        password1: "",
        password2: "",
    });
    const [ placeholder, setPlaceholder ] = useState({
        placeholderUsername: "username",
        placeholderPassword1: "password1",
        placeholderPassword2: "password2",
    });
    const {
        username,
        password1,
        password2,
    } = signUpData;
    const {
        placeholderUsername,
        placeholderPassword1,
        placeholderPassword2,
    } = placeholder;
    const [errors, setErrors] = useState({
        username: "",
        password1: "",
        password2: "",
    });

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
//            setPlaceholder({
//            placeholderUsername: ("‼️ " + "error"),
//            placeholderPassword1: ("‼️ " + "also error"),
//            placeholderPassword2: ("‼️ " + "also also error"),
//            });
            setErrors(err.response?.data);
            console.log("error test 1: ", errors)
            console.log("error test 2: ", errors.response?.data)
        }
        setSignUpData({
            username: "",
            password1: "",
            password2: "",
        });
    }

    return (
        <div>
            <Container>
                <Form className={styles.AuthenticationIsland} onSubmit={handleSubmit}>

                    <Form.Group>
                        <Form.Control
                        name="username"
                        type="text"
                        placeholder={"Username..." + errors.username}
                        value={username}
                        onChange={handleChange}
                        />
                    </Form.Group>
                    <br/>

                    <Form.Group>
                        <Form.Control
                        name="password1"
                        type="password"
                        placeholder={"Password..." + errors.password1}
                        value={password1}
                        onChange={handleChange}
                        />
                    </Form.Group>
                    <br/>

                    <Form.Group>
                        <Form.Control
                        name="password2"
                        type="password"
                        placeholder={"Confirm Password..." + errors.password2}
                        value={password2}
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
