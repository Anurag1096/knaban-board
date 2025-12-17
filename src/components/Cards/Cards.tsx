//need to figure out how avatar list data and comments count should be structure
// and how to assign work to people.
import Image from "next/image";
import { useState } from "react";
import { CardsProps } from "./types";
import DeleteCard from "../DeleteCard/deleteCard";

export default function Cards({tagName,headings,discription,cardId}:CardsProps) {
 const [openCardId, setOpenCardId] = useState<string | null>(null);
  function handleCloseDeleteModal(){
    setOpenCardId(null)
  }
  function handleOpen(cardId:string){
    setOpenCardId(cardId)
  }
  return (
    <>
    <DeleteCard columnId={""} cardId={cardId} isOpen={openCardId === cardId} onClose={handleCloseDeleteModal} />
      <div id="container" className="rounded-3xl p-4 m-1 bg-white max-w-80 min-h-48 ">
        <div id="tags" className="text-start flex justify-between items-center">
          <h5>{tagName?tagName:"TagName"}</h5>
          <div onClick={()=>handleOpen(cardId)}>
            <Image src={'/delete_icon.svg'} alt="delete_icon"  width={24} height={24}/>
          </div>
        </div>
        <div
          id="headings"
          className=" text-lg text-black font-extrabold text-shadow-black"
        >
          <h4>{headings?headings:"Your heading"}</h4>
        </div>
        <div
          id="discriptions"
          className="text-md text-shadow-2xs font-medium text-gray-500 "
        >
          <h5>{discription?discription:"Lorem ipsum dolor sit amet, libre unst consectetur adispicing elit."}</h5>
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
