import React from 'react'
import TableHead from './TableHead'
import TableRecords from './TableRecords'

const Table = ({ data }) => {
    return (
        <table border='1'>
            <TableHead />
            <TableRecords data={data} />
        </table>
    )
}

export default Table
