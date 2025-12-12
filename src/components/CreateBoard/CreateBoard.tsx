"use client";

import { createBoard } from "@/lib/createBoard";
import Modal from "../Modal/Modal";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}
export default function AddBoard({ isOpen, onClose }: Props) {
  function AddNewBoard() {
    const Board = createBoard({ name: "task" });
    console.log(Board);
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div>
          <h4>
            This file will be an modal which handle the creation of the kanban
            board
          </h4>

          <button onClick={AddNewBoard}>Add Board</button>
        </div>
      </Modal>
    </>
  );
}
