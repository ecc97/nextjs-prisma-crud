
import NotesContainer from "@/components/NotesContainer"

// async function loadNotes() {
//   const response = await fetch(`http://localhost:3000/api/notes`)
//   const data = await response.json()
//   return data
// }

const HomePage = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return (
    <div className="flex items-center justify-center h-auto">
      <div>
          <NotesContainer />
      </div>
    </div>
  )
}

export default HomePage

