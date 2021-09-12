import React, { useContext } from 'react'
import { NotesContext } from '../../contexts/NotesContext'
import { Link } from 'react-router-dom'
import './styles/NoteItem.css'

const NoteItem = ({ id, text }) => {
    const [writtenNotes, setWrittenNotes] = useContext(NotesContext)

    const handleDeleteNote = () => {
        const writtenNotesAfterDeletedItem = writtenNotes.filter(note => note.id !== id)

        setWrittenNotes(writtenNotesAfterDeletedItem)
    }

    return (
        <div className="note-item">
            <Link to={`notes/${id}`}>
                <p>{text}</p>
            </Link>
            <button className="delete-btn" onClick={handleDeleteNote} >Delete</button>
        </div>
    )
}

export default NoteItem
