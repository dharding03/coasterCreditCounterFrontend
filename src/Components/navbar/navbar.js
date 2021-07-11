
import React from 'react';

function NavBar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-primary">

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