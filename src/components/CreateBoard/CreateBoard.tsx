"use client";

import { createBoard } from "@/lib/createBoard";
import Modal from "../Modal/Modal";
import { InputBox } from "../InputBox/InputBox";
import { useAppDispatch } from "@/data/store/hooks";
import { Button } from "../Button/Button";
import { addBoard } from "@/data/store/slices/BoardSlice";
interface Props {
  name:string;
  column:string;
  isOpen: boolean;
  onClose: () => void;
  onValChange:(e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>void;
}
export default function AddBoard({ isOpen, onClose,name,column ,onValChange}: Props) {


  const dispatch=useAppDispatch()
  function AddNewBoard(e:React.FormEvent) {
    e.preventDefault()
    const colum=Number(column)
    const Board = createBoard({name,colum});
    console.log(Board);
    dispatch(addBoard(Board))
  }

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <div>
         <form onSubmit={AddNewBoard}>
          <label htmlFor="title">Name</label>
          <InputBox variant="text" id="name" inputName="name" value={name} handleChagne={onValChange} required={true} readonly={false}/>
         <label htmlFor="column"> Columns</label>
         <InputBox variant="number" min={0} max={10} id="column" inputName="column" value={column} handleChagne={onValChange} required={true} readonly={false} />
          <Button type="submit">Add Board</Button>
         </form>

        </div>
      </Modal>
    </>
  );
}
