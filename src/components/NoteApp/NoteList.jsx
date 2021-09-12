import React, { useContext } from 'react'
import { NotesContext } from '../../contexts/NotesContext'
import NoteItem from './NoteItem'
import './styles/NoteList.css'

const NoteList = () => {
    const [writtenNotes] = useContext(NotesContext)

    return (
        <div id="note-list-container">
            {writtenNotes.map((note) => (
                <>
                    <NoteItem text={note.text} key={note.id} id={note.id} />
                    <br />
                </>
            ))}
        </div>
    )
}

export default NoteList
