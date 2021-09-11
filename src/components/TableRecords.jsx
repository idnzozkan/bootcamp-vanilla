import React from 'react'

const TableRecords = ({ data }) => {
    return (
        <>
            {data.currencies.map(record => (
                <tr>
                    <td>{record.exchangeType}</td>
                    <td>{record.buy}</td>
                    <td>{record.sell}</td>
                    <td>{record.diff}</td>
                </tr>
            ))}
        </>
    )
}

export default TableRecords