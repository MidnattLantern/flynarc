import React from "react";
import { useCurrentAuthentication } from "../../contexts/CurrentAuthenticationContext";
import { axiosRes } from "../../api/axiosDefaults";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Card } from "react-bootstrap";

const PilotPost = (props) => {
    const {
        id,
        owner,
        title,
        image,
    } = props;

    const currentAuthentication = useCurrentAuthentication();
    const is_owner = currentAuthentication?.username === owner;
    const history = useHistory();

    return (
        <div>
            <Link to={`/pilot_post/${id}`}>
                <p>{title}</p>
                <Card.Img src={image} alt={title}/>
            </Link>
        </div>
    )
};

export default PilotPost;
