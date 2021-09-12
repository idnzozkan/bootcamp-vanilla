import React, { useState } from 'react'
import { uuid } from 'uuidv4'
import './styles/AddNoteArea.css'

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
        <div id="form-container">
            <textarea id="entry-input" placeholder="Type something" value={value} onChange={handleChange} />
            <button class="create-btn" onClick={handleCreateNote}>Create</button>
        </div>
    )
}

export default AddNoteArea
