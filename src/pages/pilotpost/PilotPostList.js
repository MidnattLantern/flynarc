import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import PilotPost from "./PilotPost";
import { axiosReq } from "../../api/axiosDefaults";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const PilotPostList = () => {
    const [pilotPostList, setPilotPostList] = useState({ results: [] });

    useEffect(() => {
        const fetchPilotPostList = async () => {
            try {
                const { data } = await axiosReq.get(`/pilot_posts/`);
                setPilotPostList(data);
            } catch(err){
                console.log(err);
            }
        };
        fetchPilotPostList();
    }, []);

    return (
        <div>
            <p>Pilot posts: {pilotPostList.results.length}</p>
            {pilotPostList.results.length ? (<>
                <InfiniteScroll
                children={pilotPostList.results.map((pilotPost) => (
                    <PilotPost key={pilotPost.id} {...pilotPost} setPilotPostList={setPilotPostList} />
                ))}
                dataLength={pilotPostList.results.length}
                loader={<p>laoding...</p>}
                hasMore={!!pilotPostList.next}
                next={() => fetchMoreData(pilotPostList, setPilotPostList)}
                />
            </>) : (<>
                <p>false</p>
            </>)}

            <Link to="/pilot_post/create">Create</Link>
        </div>
    )
};

export default PilotPostList;
