import React from 'react';

function NavBar() {
    return (
        <div>
           {/* //<nav class="navbar navbar-expand-lg navbar-dark bg-primary" /> */}

                <a href={"/home"} class="home">Coater Credit Counter</a><br />
                <a class="navbar-brand" href={"/login"}>Login</a>
                <a href={"/bucketlist"} class="nav-link">Bucket List</a>
                <a href={"/rollercoasters"} class="nav-link">Roller Coasters</a>
            
            {/* <form class="d-flex">
                <input class="form-control me-sm-2" type="text" placeholder="Search" />
                <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form> */}
        </div>
    )
}

export default NavBar;