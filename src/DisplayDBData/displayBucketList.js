import React, { useEffect, useState } from 'react';

function DisplayBucketList() {

    const [bucketList, setBucketList] = useState([])

    useEffect(() => {
        fetch("http://localhost7080/coasters/bucketlist")
        .then(response => response.json())
        .then(json => setBucketList(json));
    }, []);

    function display(rows) {
        return rows.filter((row) => 
        row.coaster.toLowerCase().indexOf(bucketList) > -1 ||
        row.park.toLowerCase().indexOf(bucketList) > -1
        )
    }

    return (
        <div>
            <p>
              {(display(bucketList))}  
            </p>
        </div>
    )

}

export default DisplayBucketList;