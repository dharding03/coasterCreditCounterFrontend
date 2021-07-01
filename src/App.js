import React from 'react';
import './App.css';
import Home from './HomePage/Home';
import RegistrationForm from './Login/components/registrationForm';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import NavBar from './navbar/navbar';
import BucketList from './navbar/bucketlist';
import LoginForm from './Login/components/loginForm';
import Credits from './navbar/rollerCoasters';
import myAccount from './AccountPage/myAccount';

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
            <Route path="/rollercoasters" component={Credits}/>
            <Route path="/myaccount" component={myAccount}/>
          </Switch>
        </Router>
      </div>
    </div>
  );
}
export default App;
