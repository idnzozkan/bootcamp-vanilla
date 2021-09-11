import React from 'react'
import NoteItem from './NoteItem'

const NoteList = ({ writtenNotes, setWrittenNotes }) => {
    return (
        <div>
            {writtenNotes.map((note, index) => (
                <>
                    <NoteItem text={note.text} writtenNotes={writtenNotes} setWrittenNotes={setWrittenNotes} key={index} id={note.id} />
                    <br />
                </>
            ))}
        </div>
    )
}

export default NoteList
