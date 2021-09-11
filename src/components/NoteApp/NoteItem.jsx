import React from 'react'

const NoteItem = ({ id, text, writtenNotes, setWrittenNotes }) => {
    const handleDeleteNote = () => {
        const writtenNotesAfterDeletedItem = writtenNotes.filter(note => note.id !== id)

        setWrittenNotes(writtenNotesAfterDeletedItem)
    }

    return (
        <div>
            <p>{text}</p>
            <button onClick={handleDeleteNote} >Delete</button>
        </div>
    )
}

export default NoteItem
