import React, { useState } from 'react';
import Carousel from '../slideshow/controls';
import SearchBar from '../SearchBar/components/searchBar';

function myAccount() {






// use effect 
// inside the use effect you will make an api call/fetch call
// you will fetch the data of the use that is currently logged in
// you will create a state using the use state hook 
// set the user info to that state 




    return(
        <div>
            <SearchBar />
            {/* once your state has data you can refference it here, inside of the the h2 tags */}
            <h2>My Account</h2>
            <Carousel />

        </div>
    )
}

export default myAccount;