import Link from "next/link";
import { useState } from "react";
import { BoardTypes } from "./types/BoardTypes";
import Image from "next/image";
import DeleteBoard from "../DeleteBoard/deleteBoard";
// Now after receiving it's single board compoent it will render  a rectangular box on which when the
// user will click will be taken to teh board view component which will handle further task.
interface Props {
  board: BoardTypes;
}

export default function BoardItems({ board }: Props) {
  const [isBoardId,setIsBoardId]=useState<string |null>(null)
  function handleModalOpen(boardId:string){
      setIsBoardId(boardId)
  }
  function handleModlaClose(){
    setIsBoardId(null)
  }
  return (
    <>
    <DeleteBoard boardId={board.id} isOpen={isBoardId === board.id} onClose={handleModlaClose} />
      <div className="p-2 bg-white text-black rounded-2xl h-36 m-4 ">
        <div className="board-card">
          <Image    
            src={"/delete_icon.svg"}
            alt="delete_icon"
            className="cursor-pointer"
            width={24}
            height={24}
            onClick={()=>handleModalOpen(board.id)}
          />
          <Link href={`/dashboard/board/${board.id}`}>
            <h3>{board.name}</h3>
            <p>{board.columns} columns</p>
          </Link>
        </div>
      </div>
    </>
  );
}
