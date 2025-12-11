"use client";
import Modal from "../Modal/Modal";
import AddTaskForm from "./AddTaskForm";
import { useAppDispatch } from "@/data/store/hooks";
import { addTask } from "@/data/store/slices/ColumnSlice";
import { useState } from "react";
interface Props {
  columnId: string;
  isOpen: boolean;
  onCloseModal: () => void;
}
export default function AddTask({ columnId, isOpen, onCloseModal }: Props) {
  //   ---------------Add task specific code--------------------------
  const dispatch = useAppDispatch();
  const [count, setCount] = useState(7);
  const [formData, setFormData] = useState<{
    headingVal: string;
    discriptionVal: string;
    tagval: " " | "important" | "not_important" | "todo" | "urgent";
  }>({ headingVal: "", discriptionVal: "", tagval: " " });

  const handleValUpdate = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setCount((prev) => prev + 1);
    // alert("card creation will be handled here for testing only");
    dispatch(
      addTask({
        columnId,
        cardId: `0${count}`,
        tagName: formData.tagval,
        headings: formData.headingVal,
        discription: formData.discriptionVal,
      })
    );
  };
  //------------------------------------------------------
  //   --------------------modal specific code--------------

  return (
    <Modal isOpen={isOpen} onClose={onCloseModal}>
      <AddTaskForm
        handleSubmit={handleSubmit}
        formData={formData}
        handleValUpdate={handleValUpdate}
      />
    </Modal>
  );
}
