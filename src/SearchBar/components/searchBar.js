import React from 'react';
import './search.css';

const SearchBar = ({keyword, setKeyword}) => {
    return (
        <input
        key="random1"
        value={keyword}
        placeholder= {"search"}
        onChange={(e) => setKeyword(e.target.value)}
        />
    )
}

export default SearchBar;