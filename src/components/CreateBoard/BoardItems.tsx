import Link from "next/link";

import { BoardTypes } from "./types/BoardTypes";
// Now after receiving it's single board compoent it will render  a rectangular box on which when the
// user will click will be taken to teh board view component which will handle further task.
interface Props {
  board: BoardTypes;
}

export default function BoardItems({ board }: Props) {
  return (
      <Link href={`/dashboard/board/${board.id}`}>
    <div className="p-2 bg-white text-black rounded-2xl h-36 m-4 ">
        <div className="board-card">
          <h3>{board.name}</h3>
          <p>{board.columns} columns</p>
        </div>
    </div>
      </Link>
  );
}
