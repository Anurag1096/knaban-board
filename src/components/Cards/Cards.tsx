//need to figure out how avatar list data and comments count should be structure
// and how to assign work to people.
"use client"
import Image from "next/image";
import { useState } from "react";
import { useAppDispatch } from "@/data/store/hooks";
import { CardsProps } from "./types";
import { updateTask } from "@/data/store/slices/ColumnSlice";
import DeleteCard from "../DeleteCard/deleteCard";
import DescriptionEditor from "../DescriptionEditor/DescriptionEditor";

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
    if(name==='title'){

      headings=value
    }else if(name=== "discription"){
      discription=value
    }
    dispatch(updateTask({columnId,cardId,title:headings,discription:discription}))
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
            value={headings}
            onChange={handleValChange}
           
       
          />
        </div>
        {/* ----------start---------- */}
        <div
          id="discriptions"
          className="text-md text-shadow-2xs font-medium text-gray-500 w-full"
        >
          <textarea
            id={"discription"}
            name={"discription"}
            className=" resize-none w-full"
            value={discription}
            onChange={handleValChange}
            
        
            
          />
        </div>
{/* -------------second for testing-------------- */}
  {/* <div
          id="discriptions"
          className="text-md text-shadow-2xs font-medium text-gray-500 w-full"
        >
          <DescriptionEditor 
             id={"discription"}
            name={"discription"} 
            value={discription} onChange={handleValChange}/>
          
        </div> */}

      {/* ----------------end--------- */}

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
