import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import { NotesContext } from '../../contexts/NotesContext'
import './styles/NoteDetail.css'

const NoteDetail = () => {
    const [writtenNotes] = useContext(NotesContext)

    const { id } = useParams()

    const note = writtenNotes.find(note => note.id === id)

    return (
        <div id="detail-container">
            <h2 id="detail-title">Note Detail</h2>

            {note ? (<p>{note.text}</p>) : (<p>Note doesn't exist.</p>)}

            <Link to="/">Go back</Link>
        </div>
    )
}

export default NoteDetail
