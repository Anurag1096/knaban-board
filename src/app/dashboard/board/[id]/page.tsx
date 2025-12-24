"use client";
import { useState } from "react";
import ColumnName from "@/components/ColumnName/ColumnName";
import BoardView from "@/components/CreateBoard/BoardView";
import { useAppSelector, useAppDispatch } from "@/data/store/hooks";
import { dndCard } from "@/data/store/slices/ColumnSlice";
import { DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd";
import AddTask from "@/components/AddTask/AddTaskModal";
import NavBar from "@/components/NabBar/NabBar";
import { usePathname } from "next/navigation";
export default function Home() {
  const pathName=usePathname()
   const [openColumnId, setOpenColumnId] = useState<string | null>(null);
 
  const closeModal = () => {
  setOpenColumnId(null);
};
  const openModal = (colId: string) => {
  setOpenColumnId(colId);
};
  const dispatch = useAppDispatch();
  const BoardData = useAppSelector((state) => state.column);
  function onDrag(result: DropResult<string>) {
    if (!result.destination) return;

    const newData = structuredClone(BoardData);
    console.log(newData);
    const sourceColumn = newData.find(
      (col) => col.id === result.source.droppableId
    );
    const draggedCard = sourceColumn?.cards[result.source.index];
    const destinationColumn = newData.find(
      (col) => col.id === result.destination?.droppableId
    );

    //now remove it from the source and add it to destination

    sourceColumn?.cards.splice(result.source.index, 1);
    destinationColumn?.cards.splice(result.destination.index, 0, draggedCard);
    dispatch(dndCard(newData));
  }

 
  return (<>
  <div className="flex flex-col w-full ">

  <NavBar boardName={pathName}/>
  
    <DragDropContext onDragEnd={(result) => onDrag(result)}>
      <div className=" mt-10 grid-rows-1  md:grid grid-cols-3 md:gap-1">
        
        {BoardData.map((columns) => {
        
          return (
            <div
            key={columns.id}
              className="flex flex-col mx-10 mb-8 h-fit w-fit p-2 rounded-xl  bg-[#E2E8F0] "
            >
              <ColumnName
                name={columns.name}
                count={columns.cards.length}
                handleClick={() => openModal(columns.id)}
              />

              {/* The modal for adding of cards will be here* */}
                 <AddTask isOpen={openColumnId === columns.id} onCloseModal={closeModal} columnId={columns.id}/>
                 
              {/* ------------------ */}

              {/* Each column MUST be a droppable */}
              <Droppable droppableId={columns.id}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="flex flex-col gap-8 p-2"
                  >
                    <BoardView cards={columns.cards} columnsId={columns.id} />
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          );
        })}
      </div>
    </DragDropContext>
          </div>
    </>
  );
}
