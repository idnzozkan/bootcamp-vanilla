import React from 'react'

const Note = ({ text, writtenNotes, setWrittenNotes }) => {
    const handleDeleteNote = () => {
        const writtenNotesAfterDeletedItem = writtenNotes.filter(note => note !== text)

        setWrittenNotes(writtenNotesAfterDeletedItem)
    }

    return (
        <div>
            <p>{text}</p>
            <button onClick={handleDeleteNote} >Delete</button>
        </div>
    )
}

export default Note
