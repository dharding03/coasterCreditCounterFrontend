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
        return rows.filter((row) =>

            row.name.toLowerCase().indexOf(q) > -1 ||
            row.park.toLowerCase().indexOf(q) > -1 ||
            row.country.toLowerCase().indexOf(q) > -1 ||
            row.model.toLowerCase().indexOf(q) > -1
        );
    }
    let dataTable = "";
    if (q) {
        dataTable =  
        <div>
        <Datatable
            data={(search(data))}
        />
    </div>
    }
    return (
        <div>
            <div class= "form-center my-2 my-lg-0">
                <input type="text" placeholder="search" value={q} onChange={(e) => setQ(e.target.value)} />
            </div>
            {dataTable}
           

        </div>
    )
}

export default SearchBar;