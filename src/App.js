import React from 'react';
import './App.css';
import Home from './Components/HomePage/Home';
import RegistrationForm from './Components/Login/components/registrationForm';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './Components/navbar/navbar';
import BucketList from './Components/navbar/bucketlist';
import LoginForm from './Components/Login/components/loginForm';
import MyAccount from './Components/AccountPage/myAccount';

import Credits from './Components/navbar/credits';




function App() {
  return (
    <div className="App">
       <NavBar className="nav"/> 

      <div className="routes">
        <Router>
          <Switch>
            <Route exact path="/">
              <Redirect to="/home"></Redirect>
            </Route>
          
            <Route path="/bucketlist" component={BucketList}/>
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegistrationForm} />
            <Route path="/home" component={Home}/>

            <Route path="/mycredits" component={Credits}/>

            

            <Route path="/myaccount" component={MyAccount}/>
          </Switch>
        </Router>
      </div>
    </div>
  );
}
export default App;
