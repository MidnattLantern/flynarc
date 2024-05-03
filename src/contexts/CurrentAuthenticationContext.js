import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

export const CurrentAuthenticationContext = createContext();
export const setCurrentAuthenticationContext = createContext();

export const useCurrentAuthentication = () => useContext(CurrentAuthenticationContext);
export const useSetCurrentAuthentication = () => useContext(setCurrentAuthenticationContext);

export const CurrentAuthenticationProvider = ({children}) => {
    const [authentication, setAuthentication] = useState(null)
    const handleMount = async () => {
      try {
        const {data} = await axios.get('dj-rest-auth/user/');
        setAuthentication(data);
      } catch(err){
        console.log(err);
      }
    }
    useEffect(() => {
      handleMount();
    }, []);

    return (
        <div>
            <CurrentAuthenticationContext.Provider value={authentication}>
                <setCurrentAuthenticationContext.Provider value={setAuthentication}>
                    {children}
                </setCurrentAuthenticationContext.Provider>
            </CurrentAuthenticationContext.Provider>
        </div>
    )
};
