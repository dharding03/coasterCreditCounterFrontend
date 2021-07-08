
import React, {useState} from 'react';

function NavBar() {
    const [setUsername] = useState("")
    const [setPassword] = useState("")
    const [setUser] = useState()

    const handleLogout = () => {
        setUser({});
        setUsername("");
        setPassword("");
        localStorage.clear();
    }

    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-primary">
        
                <a href={"/home"} class="navbar-brand">Coaster Credit Counter</a><br />
                <a class="navbar-brand" href={"/login"}>Login</a>
                <a href={"/bucketlist"} class="navbar-brand">Bucket List</a>
                <a href={"/mycredits"} class="navbar-brand">My Credits</a>
                <a href={"/myaccount"} class="navbar-brand">My Account</a>
                <button type="logout" onClick={handleLogout}>Logout</button>
            
                </nav>

        </div>
    )
}

export default NavBar;