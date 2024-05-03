import React, { useContext, useState } from "react";
import { Container, Form } from "react-bootstrap";
import styles from "../../styles/SignInForm.module.css"
import axios from "axios";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { setCurrentAuthenticationContext } from "../../App";
import { useSetCurrentAuthentication } from "../../contexts/CurrentAuthenticationContext";

const SignInForm = () => {
    const setAuthentication = useSetCurrentAuthentication();

    const [signInData, setSignInData] = useState({
        username: "",
        password: "",
    });
    const {
        username,
        password,
    } = signInData;
    const [ placeholder, setPlaceholder] = useState({
        username: "",
        password:"",
    });
    const history = useHistory();

    const handleChange = (event) => {
        setSignInData({
            ...signInData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const {data} = await axios.post("/dj-rest-auth/login/", signInData);
            setAuthentication(data.user)
            console.log("signed in")
            history.push("/");
        } catch(error) {
            setPlaceholder(error.response?.data)
            console.log("error: " + error)
        }
        setSignInData({
            username: "",
            password: "",
        });
    };

    return (
        <div>
            <Container>
                <Form className={styles.AuthenticationIsland} onSubmit={handleSubmit}>

                    <Form.Group>
                        <Form.Control
                        name="username"
                        type="text"
                        placeholder={"Username..." + placeholder.username}
                        value={username}
                        onChange={handleChange}
                        />
                    </Form.Group>
                    <br/>

                    <Form.Group>
                        <Form.Control
                        name="password"
                        type="password"
                        placeholder={"Password..." + placeholder.password}
                        value={password}
                        onChange={handleChange}
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
