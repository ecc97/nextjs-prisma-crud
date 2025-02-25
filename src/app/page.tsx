"use client"

import NoteForm from "@/components/NoteForm"
import NoteCard from "@/components/NoteCard"
import { useNotes } from "@/context/NoteContext"
import { useEffect } from "react"

// async function loadNotes() {
//   const response = await fetch(`http://localhost:3000/api/notes`)
//   const data = await response.json()
//   return data
// }

const HomePage = () => {
  // const notes = await loadNotes()
  // console.log({notes})
  const {notes, loadNotes} = useNotes()
  console.log(notes)

  useEffect(() => {
    loadNotes()
  }, [loadNotes])

  return (
    <div className="flex items-center justify-center h-auto">
      <div>
        <NoteForm />
        {notes.map((note) => (
          <NoteCard note={note} key={note.id} />
        ))}
      </div>
    </div>
  )
}

export default HomePage

