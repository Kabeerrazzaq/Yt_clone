import { useState } from "react"
import { CategoryPills } from "./component/CategoryPills"
import { categories, videos } from "./data/home"
import { PageHeader } from "./layouts/PageHeader"
import { VideoGrid } from "./component/VideoGrid"
import { SideBar } from "./layouts/SideBar"


const App = () => {
const  [selectCategory, setSelectedCategory] = useState(categories[0])

  return (
    <div className='max-h-screen flex flex-col'>
      <PageHeader />
      <div className="grid grid-cols-[auto,1fr] flex-grow-1 overflow-auto">
        <SideBar />
        <div className="overflow-x-hidden px-8 pb-4">
        <div className="sticky top-8 bg-white z-10 pb-4">
         <CategoryPills categories={categories}
         selectedCategory={selectCategory} onSelect={setSelectedCategory}/>
        </div>
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
          {videos.map(video => (
              <VideoGrid  key={video.id} {...video}/>
          ))}
        
        </div>
        </div>
      </div>
    </div>
  )
}

export default App
