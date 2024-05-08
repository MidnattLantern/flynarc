import React from "react";
import { useCurrentAuthentication } from "../../contexts/CurrentAuthenticationContext";
import { axiosRes } from "../../api/axiosDefaults";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Card } from "react-bootstrap";
import styles from "../../styles/PilotPost.module.css"

const PilotPost = (props) => {
    const {
        id,
        owner,
        title,
    } = props;

    const currentAuthentication = useCurrentAuthentication();
    const is_owner = currentAuthentication?.username === owner;
    const history = useHistory();

    return (
        <div>
            <Link to={`/pilot_post/detail/${id}`}>
                <p className={styles.PilotPostMainLand}>{title}</p>
            </Link>
        </div>
    )
};

export default PilotPost;
