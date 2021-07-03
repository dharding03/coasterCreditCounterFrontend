import React, { useState, useEffect } from 'react';
import './search.css';
import Datatable from './dataTable';

require("es6-promise").polyfill();
require("isomorphic-fetch");

function SearchBar() {

    const [data, setData] = useState([])
    const [q, setQ] = useState("")

    useEffect(() => {
        fetch("https://coasters-api.herokuapp.com/")
            .then(response => response.json())
            .then(json => setData(json));
    }, []);

    function search(rows) {
        const columns = rows[0] && Object.keys(rows[0])
        return rows.filter((row) =>

            row.name.toLowerCase().indexOf(q) > -1 ||
            row.park.toLowerCase().indexOf(q) > -1 ||
            row.country.toLowerCase().indexOf(q) > -1 ||
            row.model.toLowerCase().indexOf(q) > -1
        );
    }

    return (
        <div>
            <div>
                <input type="text" placeholder="search" value={q} onChange={(e) => setQ(e.target.value)} />
            </div>
            <div>
                <Datatable
                    data={search(data)}
                />
            </div>
            {/* <input
        key="random1"
        value={keyword}
        placeholder= {"search"}
        onChange={(e) => setKeyword(e.target.value)}
        /> */}
        </div>
    )
}

export default SearchBar;