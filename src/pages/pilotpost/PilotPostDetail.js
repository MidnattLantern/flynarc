import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import PilotPost from "./PilotPost";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const PilotPostDetail = () => {
    const { id } = useParams();
    const [pilotPostDetail, setPilotPostDetail] = useState({ results: [] });

    useEffect(() => {
        const handleMount = async () => {
            try {
                const [{ data: pilotPost}] = await Promise.all([
                    axiosReq.get(`/pilot_post/${id}`)
                ]);
                setPilotPostDetail({ results: [pilotPost]})
            } catch(err) {
                console.log(err);
            }
        };
        handleMount();
    }, [id]);

    return (
        <div>
            <h1>Pilot Post Detail</h1>
            <PilotPost {...pilotPostDetail.results[0]} setPilotPostDetail={setPilotPostDetail} />

            <p>{id}</p>
            {id === "abc" ? (<>
                <p>id is ABC</p>
            </>) : (<>
                <p>id is not "abc"</p>
            </>)}
        </div>
    )
};

export default PilotPostDetail;
