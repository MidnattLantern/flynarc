import React from "react";
import { Button, Container, Form } from "react-bootstrap";

const SignUpForm = () => {

    return (
        <div>
            <Container>
                <Form>

                    <Form.Group>
                        <Form.Label>
                            Username
                        </Form.Label>
                        <Form.Control
                        type="text"
                        placeholder=""
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>
                            Password
                        </Form.Label>
                        <Form.Control
                        type="password"
                        placeholder=""
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>
                            Confirm password
                        </Form.Label>
                        <Form.Control
                        type="password"
                        placeholder=""
                        />
                    </Form.Group>

                    <Button>
                        Submit
                    </Button>

                </Form>
            </Container>
        </div>
    )
};

export default SignUpForm;
