import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../utils/utils";
import PilotPost from "./PilotPost";
import { axiosReq } from "../../api/axiosDefaults";
import { Link, useLocation } from "react-router-dom/cjs/react-router-dom.min";

const PilotPostList = () => {
    const [pilotPostList, setPilotPostList] = useState({ results: [] });
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const fetchPilotPostList = async () => {
            try {
                const { data } = await axiosReq.get(`/pilot_post/`);
                setPilotPostList(data);
                setHasLoaded(true);
            } catch(err){
                console.log(err);
            }
        };
        fetchPilotPostList();
    }, [pathname]);

    return (
        <div>
            {hasLoaded ? (<>

                <h1>Pilot posts: {pilotPostList.results.length}</h1>
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

            </>) : (<>
            <h1>Loading...</h1>
            </>)}


            <Link to="/pilot_post/create">Create</Link>
        </div>
    )
};

export default PilotPostList;
