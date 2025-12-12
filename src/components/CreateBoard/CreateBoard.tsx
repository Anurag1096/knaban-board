"use client";

import { createBoard } from "@/lib/createBoard";
import Modal from "../Modal/Modal";
import { InputBox } from "../InputBox/InputBox";
import { Button } from "../Button/Button";

interface Props {
  name:string;
  column:string;
  isOpen: boolean;
  onClose: () => void;
  onValChange:(e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>void;
}
export default function AddBoard({ isOpen, onClose,name,column ,onValChange}: Props) {
  function AddNewBoard() {
    const Board = createBoard({ name: "task" });
    console.log(Board);
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div>
         <form onSubmit={AddNewBoard}>
          <label htmlFor="title">Name</label>
          <InputBox variant="text" id="title" inputName="title" value={name} handleChagne={onValChange} required={true} readonly={false}/>
         <label htmlFor="column"> Columns</label>
         <InputBox variant="number" id="column" inputName="column" value={column} handleChagne={onValChange} required={true} readonly={false} />
          <Button type="submit">Add Board</Button>
         </form>

        </div>
      </Modal>
    </>
  );
}
