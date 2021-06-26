import React from 'react';

function BucketList() {

    return (
        <div>
            <h2>My Bucket List</h2>
            <div>
                <form>
                    <div>
                    <label htmlFor="addcoaster" type="text">Add Coaster</label>
                    <input type="text" placeholder="Add Coaster"></input>
                    </div>
                    <div>
                        <label htmlFor="addpark" type="text">Add Park</label>
                        <input type="text" placeholder="Add Park"></input>
                    </div>
                    <div>
                        <button type="submit">Add</button>
                    </div>

                </form>
            </div>
        </div>
    )

}

export default BucketList;