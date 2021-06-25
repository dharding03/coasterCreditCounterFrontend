import React from 'react';


function NavBar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-primary" />
            <div class="container-fluid">

                <a class="navbar-brand" href={"/login"}>Coaster Credit Counter</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarColor01">

                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <a href={"/bucketlist"} class="nav-link">Bucket List</a>
                        </li>
                        <li class="nav-item">
                            <a href={"/rollercoasters"} class="nav-link">Roller Coasters</a>
                        </li>
                    </ul>

                    <form class="d-flex">
                        <input class="form-control me-sm-2" type="text" placeholder="Search" />
                        <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default NavBar;