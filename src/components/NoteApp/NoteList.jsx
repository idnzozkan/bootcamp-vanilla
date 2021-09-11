import React from 'react'
import Note from './NoteItem'

const NoteList = ({ writtenNotes, setWrittenNotes }) => {
    return (
        <div>
            {writtenNotes.map((note, index) => (
                < Note text={note} writtenNotes={writtenNotes} setWrittenNotes={setWrittenNotes} key={index} />
            ))}
        </div>
    )
}

export default NoteList
