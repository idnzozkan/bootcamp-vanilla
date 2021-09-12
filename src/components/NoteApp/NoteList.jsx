import React from 'react'
import NoteItem from './NoteItem'
import './styles/NoteList.css'

const NoteList = ({ writtenNotes, setWrittenNotes }) => {
    return (
        <div id="note-list-container">
            {writtenNotes.map((note) => (
                <>
                    <NoteItem text={note.text} writtenNotes={writtenNotes} setWrittenNotes={setWrittenNotes} key={note.id} id={note.id} />
                    <br />
                </>
            ))}
        </div>
    )
}

export default NoteList
