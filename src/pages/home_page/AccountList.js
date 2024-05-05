import React, { useEffect, useState } from "react";
import { axiosReq } from "../../api/axiosDefaults";
import { useLocation } from "react-router";
import Account from "./Account";

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

    return (
        <div>
            <h1>Account list</h1>
            <p>Accounts: {accountList.length}</p>
            <br/>
            { hasLoaded ? (
                accountList.length ? (
                    accountList.map((key) => (
                        <>
                            <Account key={key.id} {...key} setAccountList={setAccountList}/>
                            {console.log("list test: " + accountList.length)}
                        </>
                    ))
                ) : (<>Fetching...</>)
            ) : (
                <p>Loading...</p>
            )}

        </div>
    )
};

export default AccountList;
