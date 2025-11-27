"use client";
import BoardView from "@/components/CreateBoard/BoardView";
import { useAppSelector,useAppDispatch } from "@/data/store/hooks";
import { dndCard } from "@/data/store/slices/ColumnSlice";
import { DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd";

export default function Home() {
  const dispatch=useAppDispatch()
  const BoardData = useAppSelector((state) => state.column);
  function onDrag(result: DropResult<string>) {
    if (!result.destination) return;
  
    const newData = structuredClone(BoardData);
    console.log(newData)
    const sourceColumn = newData.find(
      (col) => col.id === result.source.droppableId
    );
    const draggedCard = sourceColumn?.cards[result.source.index];
    const destinationColumn=newData.find(
      (col)=>col.id === result.destination?.droppableId
    )

    //now remove it from the source and add it to destination

    sourceColumn?.cards.splice(result.source.index,1)
    destinationColumn?.cards.splice(result.destination.index,0,draggedCard)
    dispatch(dndCard(newData))


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
                    <BoardView cards={columns.cards} />
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
