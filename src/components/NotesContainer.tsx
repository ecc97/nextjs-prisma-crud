"use client"
import NoteForm from "@/components/NoteForm";
import NoteCard from "@/components/NoteCard";
import NotesSkeletonLoading from "@/components/NotesSkeletonLoading";
import { useNotes } from "@/context/NoteContext";
import { useEffect, useState } from "react";

// interface Note {
//     id: number;
//     title: string;
//     content: string;
//     createdAt: Date;
//     updatedAt: Date;
// }

// interface NotesContainerProps {
//     notes: Note[];
// }

export default function NotesContainer() {
    // const notes = await loadNotes()
    // console.log({notes})
    const { notes, loadNotes } = useNotes()
    const [isLoading, setIsLoading] = useState(true)
    console.log(notes)

    useEffect(() => {
        const fetchNotes = async () => {
            await loadNotes()
            setIsLoading(false)
        }
        fetchNotes()
    }, [])


    return (
        <>
            <NoteForm />
            {isLoading && <NotesSkeletonLoading />}
            {notes.map((note) => (
                <NoteCard note={note} key={note.id} />
            ))}
        </>
    );
}