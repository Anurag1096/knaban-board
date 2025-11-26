"use client";
import BoardView from "@/components/CreateBoard/BoardView";
import { useAppSelector } from "@/data/store/hooks";
import { DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd";

export default function Home() {
  const BoardData = useAppSelector((state) => state.column);
  function onDrag(result: DropResult<string>){
    if(!result.destination) return;
    console.log(result)

    if(result.source.droppableId === result.destination.droppableId){
      
    }

   }
  return (
    <DragDropContext onDragEnd={(result) => onDrag(result)}>
      <div className="flex justify-between">
        {BoardData.map((columns) => {
          return (
            <div key={columns.id} className="flex flex-col  ">
              <div className="text-amber-100 font-extrabold text-3xl">
                {columns.name}
              </div>

              {/* Each column MUST be a droppable */}
              <Droppable droppableId={columns.id}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="flex flex-col gap-2 p-2"
                  >
                    <BoardView columns={columns.columns}/>
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          );
        })}
      </div>
    </DragDropContext>
  );
}
