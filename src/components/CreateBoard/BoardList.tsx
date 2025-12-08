import { BoardTypes } from "./types/BoardTypes";
import BoardItems from "./BoardItems";
interface BoardListProps {
  Boards: BoardTypes[];
}
//This Board list component receives array of boards.and will pass it down to the board items component.

export default function BoardList({ Boards }: BoardListProps) {
  return (
    <div className="p-2 rounded bg-[#F8FAFC]  w-[87vw] max-h-[90vh]   grid-rows-1 md:grid grid-cols-3 md:gap-5">
      {Boards.map((board) => {
        return <BoardItems key={board.name} board={board} />;
      })}
    </div>
  );
}
