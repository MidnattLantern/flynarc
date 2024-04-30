import styles from "./App.module.css";
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import {Route, Switch} from 'react-router-dom';
import './api/axiosDefaults';

import SignUpForm from "./pages/authentication/SignUpForm";

function App() {
  return (
    <div >
      <NavBar />
      <Container className={styles.MainView}>
        <Switch>
          <Route exact path="/signin" render={() => <h1>Header 1</h1> } />
          <Route exact path="/signup" render={() => <SignUpForm />} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
