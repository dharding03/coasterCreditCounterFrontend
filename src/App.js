import React from 'react';
import './App.css';
import "../src/slideshow/controls.css";
import "../src/slideshow/controls.js"
import Slideshow from './slideshow/controls.js';
import RegistrationForm from './Login/components/registrationForm';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LoginForm from './Login/components/loginForm';
import SearchBar from './SearchBar/components/searchBar';

 

import AddCredit from './credits/creditspage';


function App() {
  return (
    <div className="App">
      <header className="App-header">

        <SearchBar />
        <Slideshow />
      </header>

      <Router>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login"></Redirect>
          </Route>
          <Route path="/mycredits">
            <AddCredit />
          </Route>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegistrationForm} />
        </Switch>
      </Router>

    </div>
  );


}


export default App;
