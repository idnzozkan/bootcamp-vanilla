import React, { useState } from 'react'
import TableHead from './TableHead'
import TableRecords from './TableRecords'
import data from '../../data'

const Table = () => {
    return (
        <table border='1'>
            <TableHead />
            <TableRecords data={data} />
        </table>
    )
}

export default Table