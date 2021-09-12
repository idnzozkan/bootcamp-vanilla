import React, { useState } from 'react'
import AddNoteArea from './AddNoteArea'
import NoteList from './NoteList'
import NoteDetail from "./NoteDetail"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const NoteApp = () => {
    const [writtenNotes, setWrittenNotes] = useState([])

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <AddNoteArea writtenNotes={writtenNotes} setWrittenNotes={setWrittenNotes} />
                    <NoteList writtenNotes={writtenNotes} setWrittenNotes={setWrittenNotes} />
                </Route>

                <Route path="/notes/:id" >
                    <NoteDetail writtenNotes={writtenNotes} />
                </Route>
            </Switch>
        </Router>
    )
}

export default NoteApp
