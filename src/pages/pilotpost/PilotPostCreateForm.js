import React, { useRef, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Button, Form } from "react-bootstrap";

const PilotPostCreateForm = () => {
    const [errors, setErrors] = useState({});
    const [pilotPostData, setPilotPostData] = useState({
        title: "",
    });
    const { title } = pilotPostData;
    const history = useHistory();

    const handleChange = (event) => {
        setPilotPostData({
            ...pilotPostData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = async (event) => {
        console.log("click button")
        event.preventDefault();
        const formData = new FormData();

        formData.append("title", title);

        try {
            const { data } = await axiosReq.post("/pilot_post/", formData);
            history.push(`/pilot_post/detail/${data.id}`);
        } catch (err) {
            console.log(err);
            if (err.response?.status !== 401) {
                setErrors(err.response?.data);
            }
        }
    };

    return(
        <div>
            <h1>Pilot post create form</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control
                    type="text"
                    name="title"
                    value={title}
                    onChange={handleChange}
                    placeholder="Title"
                    />
                </Form.Group>
                <button type="submit">Submit</button>
            </Form>
        </div>
    )
};

export default PilotPostCreateForm;
