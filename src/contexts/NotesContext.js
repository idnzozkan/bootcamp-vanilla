import React, { useState, createContext } from "react"

export const NotesContext = createContext()

export const NotesProvider = ({ children }) => {
  const [writtenNotes, setWrittenNotes] = useState([])

  return (
    <NotesContext.Provider value={[writtenNotes, setWrittenNotes]}>
      {children}
    </NotesContext.Provider>
  )
}
