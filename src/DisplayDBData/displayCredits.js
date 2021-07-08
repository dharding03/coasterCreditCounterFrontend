import React, { useEffect, useState } from 'react';

function DisplayCredits() {

    const [credits, setCredits] = useState([])
    console.log(credits)
    useEffect(() => {
        fetch("http://localhost:7080/coasters/credits")
        .then(response => response.json())
        .then(json => setCredits(json));
    }, []);

    // function display(rows) {
    //     return rows.filter((row) => 
    //     row.coaster.toLowerCase().indexOf(credits) > -1 ||
    //     row.park.toLowerCase().indexOf(credits) > -1
    //     )
    // }

    return (
        <div>
            
              {credits.map((coaster, id ) => 
            <p key= {id}>
                 
               {coaster.coaster}
               {coaster.park}   
            </p>
              )}  
        </div>
    )

}

export default DisplayCredits;