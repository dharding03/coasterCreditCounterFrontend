import React, { useEffect, useState } from 'react';

function DisplayCredits() {

    const [credits, setCredits] = useState([])

    // useEffect(() => {
    //     fetch("http://localhost7080/coasters/credits")
    //     .then(response => response.json())
    //     .then(json => setCredits(json));
    // }, []);

    function display(rows) {
        return rows.filter((row) => 
        row.coaster.toLowerCase().indexOf(credits) > -1 ||
        row.park.toLowerCase().indexOf(credits) > -1
        )
    }

    return (
        <div>
            <p>
              {(display(credits))}  
            </p>
        </div>
    )

}

export default DisplayCredits;