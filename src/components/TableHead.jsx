import React from 'react'

const TableHead = ({ data }) => {
    return (
        <tr>
            <th>Döviz Cinsi</th>
            <th>Alış (TL)</th>
            <th>Satış (TL)</th>
            <th>Fark (%)</th>
        </tr>
    )
}

export default TableHead
