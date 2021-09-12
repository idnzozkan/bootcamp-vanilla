import React from 'react'
import { Link, useParams } from 'react-router-dom'
import './styles/NoteDetail.css'

const NoteDetail = ({ writtenNotes }) => {
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
