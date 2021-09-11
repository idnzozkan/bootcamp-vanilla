import React, { useState } from 'react'

const AddNoteArea = ({ writtenNotes, setWrittenNotes }) => {
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleCreateNote = () => {
        if (value.length) setWrittenNotes([...writtenNotes, value])
        setValue('')
    }

    return (
        <div>
            <textarea value={value} onChange={handleChange} cols="30" rows="10" />
            <button onClick={handleCreateNote}>Create</button>
        </div>
    )
}

export default AddNoteArea
