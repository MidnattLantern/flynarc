import styles from "./App.module.css";
import NavBar from './components/NavBar';
import Container from 'react-bootstrap/Container';
import {Route, Switch} from 'react-router-dom';

import SignUpForm from "./pages/authentication/SignUpForm";

function App() {
  return (
    <div >
      <NavBar />
      <Container className={styles.MainView}>
        <Switch>
          <Route exact path="/signin" render={() => <SignUpForm /> } />
          <Route exact path="/signup" render={() => <h1>item 2</h1>} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
