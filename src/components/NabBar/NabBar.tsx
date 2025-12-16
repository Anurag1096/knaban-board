
import { Button } from "../Button/Button";
import { useState } from "react";
import AddColumn from "../AddColumn/AddColumn";
interface Props{
    boardName:string;
}

export default function NavBar({boardName}:Props){


    const [isOpen,setIsOpen]=useState<boolean>(false)
    const handleModalClose=()=>{
        setIsOpen(!isOpen)
    }
    return(<>
        <AddColumn isOpen={isOpen} onClose={handleModalClose}/>
    <nav className="p-2 w-full h-7 md:flex justify-between items-center ">
        <div>Kanban Board name {boardName}</div>
        <div><Button variant={"primary"} onClick={handleModalClose}>++Add Column modal</Button></div>
    </nav>
    <div className="mt-4">
        <div>Sorting row</div>
    </div>
    
    
    </>)
}