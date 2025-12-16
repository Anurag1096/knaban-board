import createColumn from "@/lib/createColumn";
import { Button } from "../Button/Button";
import { InputBox } from "../InputBox/InputBox";
import { useAppDispatch ,useAppSelector} from "@/data/store/hooks";
import { addColumn } from "@/data/store/slices/ColumnSlice";
import { useRef } from "react";
import Modal from "../Modal/Modal";
import { useState } from "react";
interface Props {
  isOpen: boolean;
  onClose: () => void;
}
export default function AddColumn({ isOpen, onClose }: Props) {
    const dispatch=useAppDispatch()
    const col=useAppSelector(state=>state.column)
    const idcolumn=useRef(9)
  const [formData, setFormData] = useState<{ name: string }>({ name: "" });

  const handleFormUpdate = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const {name,value}=e.target
    setFormData((prev)=>({...prev,[name]:value}))
  };


  function handleFormSubmit(e:React.FormEvent){
    e.preventDefault();
    const newId=idcolumn.current++
    const newColumn=createColumn({name:formData.name,id:newId.toString()})
    dispatch(addColumn(newColumn))
    console.log(col)

  }
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <form onSubmit={handleFormSubmit}>
            <label htmlFor="name">Column Name</label>
          <InputBox
            variant="text"
            id="name"
            inputName="name"
            value={formData.name}
            handleChagne={handleFormUpdate}
            required={true}
            readonly={false}
          />
          <Button type='submit' variant={"primary"} >Add Column</Button>
        </form>
      </Modal>
    </>
  );
}
