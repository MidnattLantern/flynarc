import React, { createContext, useEffect, useState } from "react";
import styles from "./App.module.css";
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import {Route, Switch} from 'react-router-dom';
import './api/axiosDefaults';
import SignUpForm from "./pages/authentication/SignUpForm";
import SignInForm from "./pages/authentication/SignInForm";
import axios from "axios";

export const CurrentAuthenticationContext = createContext();
export const setCurrentAuthenticationContext = createContext();

function App() {
  const [authentication, setAuthentication] = useState(null)
  const handleMount = async () => {
    try {
      const {data} = await axios.get('dj-rest-auth/user/')
      setAuthentication(data)
    } catch(err){
      console.log(err)
    }
  }
  useEffect(() => {
    handleMount()
  }, []);

  return (
    <CurrentAuthenticationContext.Provider value={authentication}>
      <setCurrentAuthenticationContext.Provider value={setAuthentication}>
        <div >
          <NavBar />
          <Container className={styles.MainView}>
            <Switch>
              <Route exact path="/signin" render={() => <SignInForm /> } />
              <Route exact path="/signup" render={() => <SignUpForm />} />
            </Switch>
          </Container>
        </div>
      </setCurrentAuthenticationContext.Provider>
    </CurrentAuthenticationContext.Provider>
  );
}

export default App;
