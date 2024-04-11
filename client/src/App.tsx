import Hero from "./components/Hero"
import MangaList from "./components/MangaList"

function App() {
  
  return (
    <>
      <div className="flex flex-col space-y-2 m-4 text-xl md:text-3xl ">
        <Hero />
        <MangaList />
      </div>
    </>
  )
}

export default App
