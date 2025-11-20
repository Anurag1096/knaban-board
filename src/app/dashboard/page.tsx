'use client'
import BoardList from "@/components/CreateBoard/BoardList";
import { useAppSelector } from "@/data/store/hooks";
//will contain board List
// component.

export default function DashboardPage() {
  const BoardArr=useAppSelector(state=> state.board)
  return (
    <div>
      <BoardList Boards={BoardArr} />
    </div>
  );
}
