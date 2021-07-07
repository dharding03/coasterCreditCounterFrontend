import React from 'react';

function NavBar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary" />
        
                <a href={"/home"} class="home">Coaster Credit Counter</a><br />
                <a class="navbar-brand" href={"/login"}>Login</a>
                <a href={"/bucketlist"} class="nav-link">Bucket List</a>
                <a href={"/rollercoasters"} class="nav-link">Roller Coasters</a>
                <a href={"/myaccount"} class="nav-link">My Account</a>
            
         
        </div>
    )
}

export default NavBar;