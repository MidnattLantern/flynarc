import React from "react";
import styles from "./App.module.css";
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import {Route, Switch} from 'react-router-dom';
import './api/axiosDefaults';
import SignUpForm from "./pages/authentication/SignUpForm";
import SignInForm from "./pages/authentication/SignInForm";
//import axios from "axios";

// Transfered to CurrentAuthenticationContext.js
/*
export const CurrentAuthenticationContext = createContext();
export const setCurrentAuthenticationContext = createContext();
*/

function App() {
// Transfered to CurrentAuthenticationContext.js
/*
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
  */

  return (
    <div >
      <NavBar />
      <Container className={styles.MainView}>
        <Switch>
          <Route exact path="/signin" render={() => <SignInForm /> } />
          <Route exact path="/signup" render={() => <SignUpForm />} />
          <Route path="/" render={() => <h1>Page not found</h1>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
