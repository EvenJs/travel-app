import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import styles from './App.module.css';
import { HomePage, RegisterPage, SignInPage } from './pages';

function App() {
  return (
    <div className={styles.app}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/signIn" component={SignInPage} />
          <Route path="/register" component={RegisterPage} />
          <Route render={() => <h1> 404 not found! </h1>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
