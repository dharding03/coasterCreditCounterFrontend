import React from 'react';
import Carousel from '../slideshow/controls';
import SearchBar from '../SearchBar/components/searchBar';

function myAccount() {
    return(
        <div>
            <SearchBar />
            <h2>My Account</h2>
            <Carousel />

        </div>
    )
}

export default myAccount;