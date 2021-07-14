import React from 'react';
import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-primary">
                {/*<Link to={"/home"} class="navbar-brand">Coaster Credit Counter</Link>*/}
                {/*<Link to={"/login"} class="navbar-brand">Login</Link>*/}
                {/*<Link to={"/bucketlist"} class="navbar-brand">Bucket List</Link>*/}
                {/*<Link to={"/mycredits"} class="navbar-brand">My Credits</Link>*/}
                {/*<Link to={"/myaccount"} class="navbar-brand">My Account</Link>*/}
                <a href={"/home"} class="navbar-brand">Coaster Credit Counter</a><br />
                <a class="navbar-brand" href={"/login"}>Login</a>
                <a href={"/bucketlist"} class="navbar-brand">Bucket List</a>
                <a href={"/mycredits"} class="navbar-brand">My Credits</a>
                <a href={"/myaccount"} class="navbar-brand">My Account</a>
            </nav>
        </div>
    )
}

export default NavBar;