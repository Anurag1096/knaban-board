import { BoardTypes } from "./types/BoardTypes"
import BoardItems from "./BoardItems";
interface BoardListProps{
   boardProps:BoardTypes[];
}

export default function BoardList({boardProps}:BoardListProps){
 return(<div>

    {boardProps.map((board)=>{
       return (<BoardItems key={board.id} board={board}/>)
    })
    }
 </div>)
}