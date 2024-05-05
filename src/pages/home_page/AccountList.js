import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import { useLocation } from "react-router";
import { fetchMoreData } from "../../utils/utils";
import InfiniteScroll from "react-infinite-scroll-component/dist";

const AccountList = () => {
    const [ accountList, setAccountList ] = useState({ results: [] });
    const [ hasLoaded, setHasLoaded ] = useState(false);
    const { pathname } = useLocation();

    useEffect(() => {
        const fetchAccountList = async () => {
            try {
                const { data } = await axiosReq.get('/user_authentication/');
                setAccountList(data);
                setHasLoaded(true);
            } catch (err) {
                console.log("error: " + err)
            }
        };
        fetchAccountList();
    }, [pathname]);

    console.log("list test: " + accountList.results.length)

    return (
        <div>
            <h1>Account list</h1>
            <p>Accounts: {accountList.results.length}</p>
            { hasLoaded ? (
                accountList.results.length ? (
                    <InfiniteScroll 
                    children={accountList.results.map((key) => (
                            <p>account item</p>
                        ))}
                    dataLength={accountList.results.length}
                    loader="Fetching..."
                    hasMore={!!accountList.next}
                    next={() => fetchMoreData(accountList, setAccountList)}
                    />
                ) : (<>Fetching...</>)
            ) : (
                <p>Loading...</p>
            )}

        </div>
    )
};

export default AccountList;
