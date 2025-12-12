"use client";
import BoardList from "@/components/CreateBoard/BoardList";
import { useState } from "react";
import AddBoard from "@/components/CreateBoard/CreateBoard";
import { useAppSelector } from "@/data/store/hooks";
//will contain board List
// component.

export default function DashboardPage() {
  const [open, setOpen] = useState<boolean>(false);
  const [boardData, setBoardData] = useState({ name: "", column: "" });
  const BoardArr = useAppSelector((state) => state.board);
  const handleAddBoardModal = () => {
    setOpen(!open);
  };
  const handleValUpdate = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setBoardData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <AddBoard
        isOpen={open}
        onClose={handleAddBoardModal}
        onValChange={handleValUpdate}
        name={boardData.name}
        column={boardData.column}
      />
      <div onClick={handleAddBoardModal}>++</div>
      <div>
        <BoardList Boards={BoardArr} />
      </div>
    </>
  );
}
