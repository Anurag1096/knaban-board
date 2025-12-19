
import { Button } from "../Button/Button";
import { useState } from "react";
import AddColumn from "../AddColumn/AddColumn";
import DeletColModla from "../DeleteColumn/deleteColModal";
import { useAppSelector } from "@/data/store/hooks";
interface Props{
    boardName:string;
}

export default function NavBar({boardName}:Props){


    const [isOpen,setIsOpen]=useState<boolean>(false)
    const [isCollModalOpen,setIsCMO]=useState<boolean>(false)
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
    <div className="mt-4">                      
        <div>Sorting row</div>
    </div>
    
    
    </>)
}