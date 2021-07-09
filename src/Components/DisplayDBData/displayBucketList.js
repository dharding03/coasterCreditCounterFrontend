import React, { useEffect, useState } from 'react';

function DisplayBucketList() {

    const [bucketList, setBucketList] = useState([])
    console.log(bucketList)
    useEffect(() => {
        fetch("http://localhost:7080/coasters/bucketlist")
        .then(response => response.json())
        .then(json => setBucketList(json));
    }, []);



    return (
        <div>
            <table cellPadding={0} cellSpacing={0}>
                <thead>
                    <tbody>
                        {bucketList.map((coaster, id) =>
                            
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

export default DisplayBucketList;