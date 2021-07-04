import React from 'react';

function Datatable({ data }) {
    const columns = data[0] && Object.keys(data[0]);
    return (
        <table cellPadding={0} cellSpacing={0}>
            <thead>
                <tbody>
                    {data.map(row => <tr>
                        {
                            columns.map(column => <td>{row[column]}</td>)
                        }
                    </tr>)}
                </tbody>
            </thead>
        </table>
    )
}

export default Datatable;