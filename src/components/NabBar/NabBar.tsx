import { Button } from "../Button/Button";

interface Props{
    boardName:string;
}

export default function NavBar({boardName}:Props){
    return(<>
    <nav className="p-2 w-full h-7 md:flex justify-between items-center ">
        <div>Kanban Board name {boardName}</div>
        <div><Button variant={"primary"}>++Add Column modal</Button></div>
    </nav>
    <div className="mt-4">
        <div>Sorting row</div>
    </div>
    
    
    </>)
}