import React, { useEffect, useState } from 'react';

function DisplayCredits() {

    const [credits, setCredits] = useState([])
    console.log(credits)
    useEffect(() => {
        fetch("http://localhost:7080/coasters/credits")
            .then(response => response.json())
            .then(json => setCredits(json));
    }, []);



    return (
        <div>
            <table cellPadding={0} cellSpacing={0}>
                <thead>
                    <tbody>
                        {credits.map((coaster, id) =>
                            
                                <td key={id}>
                                    <tr>
                                    <h6>
                                        Coaster: {coaster.coaster}
                                    </h6>
                                    </tr>
                                    <tr>
                                    <h6>
                                        Park: {coaster.park}
                                    </h6>
                                    </tr>
                                </td>
                           
                        )}
                    </tbody>
                </thead>
            </table>
        </div>
    )

}

export default DisplayCredits;