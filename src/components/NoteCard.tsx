import { Note } from "@prisma/client"
import { useNotes } from "@/context/NoteContext"
import { HiPencil, HiTrash } from "react-icons/hi"

const NoteCard = ({ note }: { note: Note }) => {
    const { deleteNote, setSelectedNote } = useNotes()
    const isUpdated = new Date(note.updatedAt).getTime() > new Date(note.createdAt).getTime();

    const formatDate = (dateString: Date) => {
        return new Date(dateString).toLocaleDateString();
    }
    
    return (
        <div key={note.id} className="bg-slate-300 p-4 my-2">
            <div>
                <h1 className="text-2xl font-bold">{note.title}</h1>
                <p>{note.content}</p>
                <p>
                    {isUpdated ? (
                        <>{formatDate(note.updatedAt)}</>
                    ) : (
                        <>{formatDate(note.createdAt)}</>
                    )}
                </p>
            </div>
            <div className="flex gap-x-2">
                <button className="bg-blue-500 text-white px-4 py-2 rounded-md" onClick={() => { setSelectedNote(note)}}>
                    <HiPencil className="text-2xl"/>
                </button>
                <button className="bg-red-500 text-white px-4 py-2 rounded-md" onClick={async() => { if(confirm(`Are you sure you want to delete this note?`)) { await deleteNote(Number(note.id))}} }>
                    <HiTrash className="text-2xl"/>
                </button>
            </div>
        </div>
    )
}

export default NoteCard
