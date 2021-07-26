import React from 'react';
import {BrowserRouter as Router, Link, Redirect, Route, Switch} from 'react-router-dom';
import BucketList from "../Pages/bucketList";
import LoginForm from "../Login/components/loginForm";
import RegistrationForm from "../Login/components/registrationForm";
import Home from "../Pages/Home";
import Credits from "../Pages/Credits";
import MyAccount from "../Pages/myAccount";

function NavBar() {
    return (
        <Router>

        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-primary">
                <Link to="/home" class="navbar-brand">Coaster Credit Counter</Link>
                <Link to="/login" class="navbar-brand">Login</Link>
                <Link to="/bucketlist" class="navbar-brand">Bucket List</Link>
                <Link to="/mycredits" class="navbar-brand">My Credits</Link>
                <Link to="/myaccount" class="navbar-brand">My Account</Link>
            </nav>

                <Switch>
                    <Route exact path="/">
                        <Redirect to="/home"></Redirect>
                    </Route>
                    <Route path="/bucketlist" component={BucketList}>
                    </Route>
                    <Route path="/login" component={LoginForm}>
                    </Route>
                    <Route path="/register" component={RegistrationForm}>
                    </Route>
                    <Route path="/home" component={Home}>
                    </Route>
                    <Route path="/mycredits" component={Credits}>
                    </Route>
                    <Route path="/myaccount" component={MyAccount}>
                    </Route>
                </Switch>

                {/*<a href={"/home"} class="navbar-brand">Coaster Credit Counter</a><br />*/}
                {/*<a class="navbar-brand" href={"/login"}>Login</a>*/}
                {/*<a href={"/bucketlist"} class="navbar-brand">Bucket List</a>*/}
                {/*<a href={"/mycredits"} class="navbar-brand">My Credits</a>*/}
                {/*<a href={"/myaccount"} class="navbar-brand">My Account</a>*/}
        </div>
        </Router>
    )
}

export default NavBar;