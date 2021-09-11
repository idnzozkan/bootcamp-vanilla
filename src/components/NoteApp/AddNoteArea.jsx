import React, { useState } from 'react'
import { uuid } from 'uuidv4'

const AddNoteArea = ({ writtenNotes, setWrittenNotes }) => {
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleCreateNote = () => {
        if (value.length) setWrittenNotes([...writtenNotes, { id: uuid(), text: value }])
        setValue('')
    }

    return (
        <div>
            <textarea value={value} onChange={handleChange} cols="30" rows="10" />
            <br />
            <button onClick={handleCreateNote}>Create</button>
            <br />
        </div>
    )
}

export default AddNoteArea
