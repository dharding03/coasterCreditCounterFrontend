import React from 'react';
import './App.css';
import Slideshow from './slideshow/controls.js';
import RegistrationForm from './Login/components/registrationForm';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import LoginForm from './Login/components/loginForm';
import SearchBar from './SearchBar/components/searchBar';

function App() {
  return (
    <div className="App">
      <header className="App-header">


        <SearchBar />
        <Slideshow />
      </header>
      <div className="routes">
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/login"></Redirect>
            </Route>
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegistrationForm} />
          </Switch>
        </Router>
      </div>
    </div>
  );


}

export default App;