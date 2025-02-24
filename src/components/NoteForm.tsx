'use client'
import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useNotes } from "@/context/NoteContext"

const NoteForm = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const { createNote, selectedNote, setSelectedNote, updateNote } = useNotes()
    const router = useRouter()

    useEffect(() => {
        if (selectedNote) {
            setTitle(selectedNote.title)
            setContent(selectedNote.content || "")
        }
    }, [selectedNote])

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(selectedNote) {
            await updateNote(
                selectedNote.id,
                {
                    title,
                    content
                }
            )
            setSelectedNote(null)
        } else {
            await createNote({
                title,
                content,
            })
        }

        setTitle("")
        setContent("")

        inputRef.current?.focus()

        router.refresh()
        // if (response.ok) {
        //     
        //     
        // } else {
        //     console.error("Error saving note")
        // }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="title" autoFocus placeholder="Title" className="w-full px-4 py-2 text-black bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 my-2" value={title} onChange={(e) => setTitle(e.target.value)} ref={inputRef} />
            <textarea name="title" placeholder="Content" className="w-full px-4 py-2 text-black bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 my-2" value={content} onChange={(e) => setContent(e.target.value)} />
            <div className="flex justify-end gap-x-2">
                <button type="submit" className="px-5 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed" disabled={!title || !content}>
                    {selectedNote? "Update" : "Save"}
                </button>

                {selectedNote && (
                    <button type="button" className="px-5 py-2 text-black bg-slate-400 hover:bg-slate-500 rounded-md" onClick={() => { setSelectedNote(null); setTitle(""); setContent("") }}>Cancel</button>
                )}
                {/* {selectedNote && <button onClick={() => router.push(`/note/${selectedNote.id}/edit`)} className="px-5 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700">Edit</button>} */}
            </div>
        </form>
    )
}

export default NoteForm
