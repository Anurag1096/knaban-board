'use client'

import {createBoard} from "@/lib/createBoard";


export default function AddBoard(){
    
    function AddNewBoard(){
       const Board=createBoard({name:'task'})
       console.log(Board)
    }
    
    return(<>
      <div><h4>This file will be an modal which handle the creation of the kanban board</h4>
      
      <button onClick={AddNewBoard}>Add Board</button>
      </div>
    </>)
}


