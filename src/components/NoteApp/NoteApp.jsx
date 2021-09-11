import React, { useEffect, useState } from 'react'
import AddNoteArea from './AddNoteArea'
import NoteList from './NoteList'

const NoteApp = () => {
    const [writtenNotes, setWrittenNotes] = useState([])

    return (
        <div>
            <AddNoteArea writtenNotes={writtenNotes} setWrittenNotes={setWrittenNotes} />
            <NoteList writtenNotes={writtenNotes} setWrittenNotes={setWrittenNotes} />
        </div>
    )
}

export default NoteApp
