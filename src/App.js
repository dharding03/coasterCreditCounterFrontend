import React from 'react';
import './App.css';
import Home from './Components/Pages/Home';
import RegistrationForm from "./Components/Login/components/registrationForm";
import {BrowserRouter as Router, Switch, Route, Redirect, Link} from 'react-router-dom';
// import NavBar from './Components/NavBar/navbar';
import BucketList from './Components/Pages/bucketList';
import LoginForm from "./Components/Login/components/loginForm";
import MyAccount from './Components/Pages/myAccount';
import Credits from './Components/Pages/Credits';


function App() {
    return (
        <Router>
            <div className="App">
                <nav class="navbar navbar-expand-lg navbar-light bg-primary">
                    <Link to="/home" class="navbar-brand">Coaster Credit Counter</Link>
                    <Link to="/login" class="navbar-brand">Login</Link>
                    <Link to="/mycredits" class="navbar-brand">My Credits</Link>
                    <Link to="/bucketlist" class="navbar-brand">Bucket List</Link>
                    <Link to="/myaccount" class="navbar-brand">My Account</Link>
                </nav>
                {/*<NavBar className="nav"/>*/}
                <div className="routes">
                    <Switch>
                        <Route exact path="/">
                            <Redirect to="/home"></Redirect>
                        </Route>
                        <Route path="/bucketlist">
                            <BucketList/>
                        </Route>
                        <Route path="/login">
                            <LoginForm/>
                        </Route>
                        <Route path="/register">
                            <RegistrationForm/>
                        </Route>
                        <Route path="/home">
                            <Home/>
                        </Route>
                        <Route path="/mycredits">
                            <Credits/>
                        </Route>
                        <Route path="/myaccount">
                            <MyAccount/>
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    )
}

export default App;
