import React from 'react'
import TableHead from './TableHead'
import TableRecords from './TableRecords'
import data from '../../data/exchange-data'

const Table = () => {
    return (
        <table border='1'>
            <TableHead />
            <TableRecords data={data} />
        </table>
    )
}

export default Table