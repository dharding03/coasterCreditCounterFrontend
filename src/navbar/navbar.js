import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import Credits from './rollerCoasters';
import BucketList from './bucketlist';

function NavBar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary" />
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Coaster Credit Counter</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <Router>
                    <div class="collapse navbar-collapse" id="navbarColor01">
                        <ul class="navbar-nav me-auto">
                            <Switch>
                            <li class="nav-item">
                                <Route path="/rollercoasters"class="nav-link active">Home
                                    <span class="visually-hidden">(current)</span>
                                </Route>
                            </li>
                            <li class="nav-item">
                                <Route path="/bucketlist" component={BucketList} class="nav-link">Bucket List</Route>
                            </li>
                            <li class="nav-item">
                                <a path="/rollercoasters" component={Credits}class="nav-link">Roller Coasters</a>
                            </li>
                            </Switch>
                        </ul>
                        <form class="d-flex">
                            <input class="form-control me-sm-2" type="text" placeholder="Search" />
                            <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </Router>
            </div>
        </div>
    )
}

export default NavBar;