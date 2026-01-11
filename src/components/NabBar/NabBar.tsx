
import { Button } from "../Button/Button";
import { useState } from "react";
import AddColumn from "../AddColumn/AddColumn";
import DeletColModla from "../DeleteColumn/deleteColModal";
import { useAppSelector } from "@/data/store/hooks";
import SearchBar from "../SearchBar/Searchbar";
interface Props{
    boardName:string;
}

export default function NavBar({boardName}:Props){

    const [searchVal,setSearchVal] = useState<string>("")
    const [isOpen,setIsOpen]=useState<boolean>(false)
    const [isCollModalOpen,setIsCMO]=useState<boolean>(false)
    function handleSearchVal(e:React.ChangeEvent<HTMLInputElement>){
         const {value}=e.target
         setSearchVal(value)
         
    }
    const handleModalClose=()=>{
        setIsOpen(!isOpen)
    }
    function handleIsCMO(){
        setIsCMO(!isCollModalOpen)
    }
    const colls=useAppSelector(state=>state.column)
    return(<>
    <DeletColModla openColModal={isCollModalOpen} closeColModal={handleIsCMO} columns={colls} />
        <AddColumn isOpen={isOpen} onClose={handleModalClose}/>
    <nav className="p-2 w-full h-7 md:flex justify-between items-center ">
        <div>Kanban Board name {boardName}</div>
        <div><Button variant={"primary"} onClick={handleModalClose}>++Add Column modal</Button></div>
        <div><Button variant={"primary"} onClick={handleIsCMO}>++Delete Column </Button></div>
    </nav>
    <div className="mt-4 sm:flex justify-between items-center ">                      
        <div>Sorting row</div>
        <SearchBar name={"search"} value={searchVal} onChange={handleSearchVal} />
    </div>
    
    
    </>)
}