import React from "react";
import styles from "./App.module.css";
import NavBar from './components/NavBar';
import {Route, Switch} from 'react-router-dom';
import './api/axiosDefaults';
import SignUpForm from "./pages/authentication/SignUpForm";
import SignInForm from "./pages/authentication/SignInForm";

function App() {

  return (
    <div>

      <div className={styles.MainViewContainer}>
        <Switch>
          <Route exact path="/signin" render={() => <SignInForm /> } />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route path="/" render={() => <h1>Page not found</h1>} />
        </Switch>
      </div>

      <div className={styles.NavBarPosition}>
        <div className={styles.NavBarContainer}>
          <NavBar/>
        </div>
      </div>

    </div>
  )
};

export default App;
