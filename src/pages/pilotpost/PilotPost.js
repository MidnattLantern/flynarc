import React from "react";
//import { useCurrentAuthentication } from "../../contexts/CurrentAuthenticationContext";
import styles from "../../styles/PilotPost.module.css"
import { Card } from "react-bootstrap";

const PilotPost = (props) => {
    const {
        title,
        image,
    } = props;

//    const currentAuthentication = useCurrentAuthentication();
//    const is_owner = currentAuthentication?.username === owner;
//    const history = useHistory();

    return (
        <div>
            <div className={styles.PilotPostMainLand}>
                <p className={styles.Name}>{title}</p>
                <Card.Img src={image} className={styles.Image}/>
            </div>
        </div>
    )
};

export default PilotPost;
