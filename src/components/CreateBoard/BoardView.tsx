// this will receive an column array [{},{},{}] which contains object for every task to do.

import Cards from "../Cards/Cards";
import { Draggable } from "@hello-pangea/dnd";
import { CardsProps } from "../Cards/types";
import { Board } from "./types/BoardTypes";
export default function BoardView({ cards }:{cards:Board}) { 
  return (

    <div className="flex flex-col gap-4">
      {cards.map((card: CardsProps,index:number) => {
        return (
     <Draggable
          key={card.cardId}
          draggableId={card.cardId}
          index={index}
        >
          {(provided) => (
            <div
              ref={provided.innerRef}
              {...provided.draggableProps}
              {...provided.dragHandleProps}
            >
              <Cards
                tagName={card.tagName}
                headings={card.headings}
                discription={card.discription}
                cardId={card.cardId}
              />
            </div>
          )}
        </Draggable>
        );
      })}
    </div>
  );
}
