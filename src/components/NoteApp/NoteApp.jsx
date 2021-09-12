import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NotesProvider } from '../../contexts/NotesContext'
import AddNoteArea from './AddNoteArea'
import NoteList from './NoteList'
import NoteDetail from "./NoteDetail"

const NoteApp = () => {
    return (
        <NotesProvider>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <AddNoteArea />
                        <NoteList />
                    </Route>

                    <Route path="/notes/:id" >
                        <NoteDetail />
                    </Route>
                </Switch>
            </Router>
        </NotesProvider>
    )
}

export default NoteApp
