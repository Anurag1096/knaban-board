//need to figure out how avatar list data and comments count should be structure
// and how to assign work to people.
import Image from "next/image";
import { useState } from "react";
import { useAppDispatch } from "@/data/store/hooks";
import { CardsProps } from "./types";
import { updateTask } from "@/data/store/slices/ColumnSlice";
import DeleteCard from "../DeleteCard/deleteCard";

interface Props extends CardsProps {
  columnId: string;
}
export default function Cards({
  tagName,
  headings,
  discription,
  cardId,
  columnId,
}: Props) {
  const [openCardId, setOpenCardId] = useState<string | null>(null);
  const dispatch =useAppDispatch()
  const [cardProps, setCardProps] = useState<{
    title: string;
    discription: string;
  }>({ title: headings, discription: discription });
  function handleCloseDeleteModal() {
    setOpenCardId(null);
  }
  function handleOpen(cardId: string) {
    setOpenCardId(cardId);
  }
  function handleValChange(
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) {
    const { name, value } = e.target;
    setCardProps((prev) => ({ ...prev, [name]: value }));
    dispatch(updateTask({columnId,cardId,title:cardProps.title,discription:cardProps.discription}))
  }

  return (
    <>
      <DeleteCard
        columnId={columnId}
        cardId={cardId}
        isOpen={openCardId === cardId}
        onClose={handleCloseDeleteModal}
      />
      <div
        id="container"
        className="rounded-3xl p-4 m-1 bg-white max-w-80 min-h-48 "
      >
        <div id="tags" className="text-start flex justify-between items-center">
          <h5>{tagName ? tagName : "TagName"}</h5>
          <div onClick={() => handleOpen(cardId)}>
            <Image
              src={"/delete_icon.svg"}
              alt="delete_icon"
              width={24}
              height={24}
            />
          </div>
        </div>
        <div
          id="headings"
          className=" text-lg text-black font-extrabold text-shadow-black"
        >
          <textarea
            id={"title"}
            className="w-full h-fit resize-none"
            name={"title"}
            value={cardProps.title}
            onChange={handleValChange}
           
       
          />
        </div>
        <div
          id="discriptions"
          className="text-md text-shadow-2xs font-medium text-gray-500 w-full"
        >
          <textarea
            id={"discription"}
            name={"discription"}
            className=" resize-none w-full"
            value={cardProps.discription}
            onChange={handleValChange}
            
        
            
          />
        </div>
        <div id="bottom-row" className="flex justify-between items-center">
          <div>this will have an avatar component list</div>
          <div>
            this will have a comment modal where you can comment and read other
            peoples comments in a modal form and{" "}
          </div>
        </div>
      </div>
    </>
  );
}
