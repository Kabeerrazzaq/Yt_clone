import { Upload, Bell, User, Menu, Search, Mic,  ArrowLeft } from "lucide-react"
import logo from "../assets/yt.jpg"
import  {Button} from "../component/Button"
import { useState } from "react"
export function PageHeader() {

const [ShowFullWidthSearch , setShowFullWidthSearch] = useState(false)

    return  <div className="flex gap-10 lg:gap-20 justify-between  pt-2 mb-6 mx-4">
        <div className={`gap-4 items-center flex-shrink-0 ${ShowFullWidthSearch ? "hidden" : "flex"}`}>
      <Button variant="ghost" size={"icon"} className="">       
        <Menu />
      </Button>

                <a href="/">
            <img src={logo} className="h-6"></img>
            </a>
      </div>
      <div className={`gap-4 flex-grow justify-center ${ShowFullWidthSearch ? "flex" : "hidden md:flex"}`}>

     {ShowFullWidthSearch && (
      <Button onClick={() => setShowFullWidthSearch(false)} type="button" size="icon"  variant="ghost" className="flex-shrink-0">
            <ArrowLeft />
        </Button>
      )} 
        <div className="flex flex-grow max-w-[600px]">
            <input type="search" placeholder="search" className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary-default py-1 px-4 text-lg w-full focus:border-blue-500 outline-none" />
            <Button className="py-2 px-4 rounded-r-full border-secondary-border  border-l-0 flex-shrink-0">
                <Search />
            </Button>
           
            <Button type="button" size="icon" className="flex-shrink-0">
            <Mic />
        </Button>
            
        </div>
        <Button type="button" size="icon" className="flex-shrink-0">
            <Mic />
        </Button>
      </div>
      <div className={` flex-shrink-0 md:gap:2 ${ShowFullWidthSearch ? "hidden" : "flex"}`}>
        <div className="md:hidden flex"> 
          <Button onClick={() => setShowFullWidthSearch(true)} size="icon" variant="ghost" className="md:hidden">
            <Search/>
        </Button>
        <Button size="icon" variant="ghost" className="md:hidden">
            <Mic/>
        </Button>
        </div>
     
        <Button size="icon" variant="ghost">
            <Upload />
        </Button>
        <Button size="icon" variant="ghost">
            <Bell />
        </Button>
        <Button size="icon" variant="ghost">
            <User />
        </Button>
      </div>
    </div>
}