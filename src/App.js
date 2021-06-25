import React from 'react';
import './App.css';
import RegistrationForm from './Login/components/registrationForm';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import SearchBar from './SearchBar/components/searchBar';
import Carousel from './slideshow/controls.js';
import NavBar from './navbar/navbar';
import BucketList from './navbar/bucketlist';
import LoginForm from './Login/components/loginForm';
import Credits from './navbar/rollerCoasters';



 



function App() {
  return (
    <div className="App">
      <NavBar />
      <header className="App-header">
        <Carousel />

        <SearchBar />
      </header>
      <div className="routes">
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/login"></Redirect>
            </Route>
            <Route path="/bucketlist" component={BucketList}/>
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegistrationForm} />
            <Route path="/home" component={App}/>
            <Route path="/rollercoasters" component={Credits}/>
          </Switch>
        </Router>
      </div>
    </div>
  );


}


export default App;
